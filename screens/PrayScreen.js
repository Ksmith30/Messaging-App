import React from 'react';
import MessagingScreen from '../components/MessagingScreen';

export default class PrayScreen extends React.Component {
  static navigationOptions = {
    title: 'Pray',
    headerStyle: {
      backgroundColor: 'salmon',
    },
  };

  render() {
    return (
      <MessagingScreen/>
    );
  }
}