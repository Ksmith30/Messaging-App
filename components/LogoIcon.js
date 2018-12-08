import React, { Component } from 'react';
import { View } from 'react-native';
import Circle from './Circle';

export default class LogoIcon extends Component {

  render() {
    return(
        <View>
          <Circle text="Logo"/>
        </View>
    );
  }
}
