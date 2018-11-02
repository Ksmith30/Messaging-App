import React from 'react';
import MessagingScreen from '../components/MessagingScreen';

export default class GrowScreen extends React.Component {
    static navigationOptions = {
      title: 'Grow',
      headerStyle: {
          backgroundColor: '#7fffd4',
      },
    };
  
    render() {
      return (
        <MessagingScreen/>
      );
    }
  }