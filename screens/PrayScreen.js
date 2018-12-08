import React, { Component } from 'react';
import MessagingScreen from '../components/MessagingScreen';
import InfoButton from '../components/InfoButton';

export default class PrayScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'salmon',
    },
    headerRight: <InfoButton
      onPress= {() => this.props.navigation.navigate('Pray')}
    ></InfoButton>,
    title: 'Pray',
  };

  _onPressInfoButton = () => {
    return this.props.navigation.navigate('PrayInfo');
  }

  render() {
    return (
      <MessagingScreen/>
    );
  }
}
