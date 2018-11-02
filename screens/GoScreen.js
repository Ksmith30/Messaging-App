import React from 'react';
import MessagingScreen from '../components/MessagingScreen';

export default class GoScreen extends React.Component {
  static navigationOptions = {
    title: 'Go',
    headerStyle: {
        backgroundColor: '#6495ED',
    }
  };

  render() {
    return (
      <MessagingScreen/>
    );
  }
}