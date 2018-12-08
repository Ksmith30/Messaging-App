import React, { Component } from 'React';
import { Button, View } from 'react-native';
import LogoIcon from '../components/LogoIcon';

export default class LoginScreen extends Component {
  render() {
    return(
      <View>
        <LogoIcon/>
        <Button
          onPress={() => {this.onPressEmailLogin}}
          title="Login with Email"
          color="#000000"
          accessibilityLabel="Login with Email"
        />
        <Button
          onPress={() => {this.onPressFacebookLogin}}
          title="Login with Facebook"
          color="#000000"
          accessibilityLabel="Login with Facebook"
        />
        <Button
          onPress={() => {this.onPressTwitterLogin}}
          title="Login with Twitter"
          color="#000000"
          accessibilityLabel="Login with Twitter"
        />
        <Button
          onPress={() => {this.onPressGoogleLogin}}
          title="Login with Google"
          color="#000000"
          accessibilityLabel="Login with Google"
        />
      </View>
    );
  }

  onPressEmailLogin = () => {

  }

  onPressFacebookLogin = () => {

  }

  onPressTwitterLogin = () => {

  }

  onPressGoogleLogin = () => {

  }
}
