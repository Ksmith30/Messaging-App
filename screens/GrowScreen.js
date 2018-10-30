import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

export default class GrowScreen extends React.Component {
    static navigationOptions = {
      title: 'Grow',
    };
  
    render() {
      return (
        <ScrollView style={styles.container}>
        
        </ScrollView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
  });