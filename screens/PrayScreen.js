import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
