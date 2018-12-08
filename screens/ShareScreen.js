import React, { Component } from 'react';
import MessagingScreen from '../components/MessagingScreen';

export default class ShareScreen extends Component {
  static navigationOptions = {
    title: 'Share',
    headerStyle: {
      backgroundColor: 'gold',
    },
  };

  render() {
    return (
      <MessagingScreen/>
    );
  }
}
