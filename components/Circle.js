import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Circle extends Component {
  render() {
    return(
      <View style = {styles.circle}>
        <Text style = {styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    circle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 138,
      height: 138,
      borderRadius: 69,
      backgroundColor: '#D8D8D8',
    },
    text: {
      color: '#000000',
    }
});
