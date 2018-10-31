import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Input from '../components/Input';

export default class PrayScreen extends React.Component {
  static navigationOptions = {
    title: 'Pray',
    headerStyle: {
      backgroundColor: 'salmon',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Input/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  contentContainer: {
    paddingTop: 30,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
