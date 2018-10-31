import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Input from '../components/Input'

export default class GrowScreen extends React.Component {
    static navigationOptions = {
      title: 'Grow',
      headerStyle: {
          backgroundColor: '#7fffd4',
      },
    };
  
    render() {
      return (
        <ScrollView style={styles.container}>
            <Input/>
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