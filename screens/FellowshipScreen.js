import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Input from '../components/Input';

export default class FellowshipScreen extends React.Component {
  static navigationOptions = {
    title: 'Fellowship',
    headerStyle: {
      backgroundColor: 'beige',
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