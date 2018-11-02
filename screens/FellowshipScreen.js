import React from 'react';
import MessagingScreen from '../components/MessagingScreen';

export default class FellowshipScreen extends React.Component {
  static navigationOptions = {
    title: 'Fellowship',
    headerStyle: {
      backgroundColor: 'beige',
    },
  };

  render() {
    return (
      <MessagingScreen/>
    );
  }
}