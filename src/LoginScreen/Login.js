
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Button
} from 'react-native';

class Login extends Component {

  state = {
    authMode: 'login',
    email: '',
    password: '',
    confirmPassword: ''
  }

  switchAuthMode = () => {
    this.setState(prevState => ({
      authMode: prevState.authMode === 'login' ? 'signup' : 'login'
    }));
  }

  loginOrCreateAccount = (email, password, confirmPassword) => {
    console.log("Logging in with " + email);
    console.log(password);
    console.log(confirmPassword);
  }

  render() {
    let confirmPasswordInput = null;

    if (this.state.authMode === 'signup') {
      confirmPasswordInput = (
        <View>
          <TextInput
            style={styles.formInput}
            secureTextEntry={true}
            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
            placeholder='Confirm Password'
          />
        </View>
      );
    }

    return (
      <View style={styles.formContainer}>
        <Text style={styles.header}>Coding with Curry</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={(email) => this.setState({ email })}
          placeholder='Email'
        />
        <TextInput
          style={styles.formInput}
          secureTextEntry={true}
          onChangeText={}
          placeholder='Password'
        />
        {confirmPasswordInput}
        <View style={styles.loginButton}>
          <Button
            onPress={() =>
              this.loginOrCreateAccount(this.state.email, this.state.password, this.state.confirmPassword)}
            title={this.state.authMode === 'login' ? 'Login' : 'Create Account'} />
        </View>
        <View style={styles.switchButton}>
          <Button
            color='black'
            onPress={() => this.switchAuthMode()}
            title={this.state.authMode === 'login' ? 'Switch to Signup' : 'Switch to Login'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 32,
    fontSize: 26
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'mintcream'
  },
  formInput: {
    width: 280,
    height: 50,
    borderColor: '#B5B4BC',
    borderWidth: 1,
    padding: 8,
    marginBottom: 20
  },
  loginButton: {
    width: 200,
    marginBottom: 20
  },
  switchButton: {
    width: 200
  }
});

export default Login;