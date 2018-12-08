import React from 'react';
import { View, StyleSheet, TextInput, Dimensions } from 'react-native';

export default class LogoIcon extends React.Component {

  render() {
    return(
      <View
        style = {styles.circle}
      >
        <TextInput>Logo</TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    circle: {
       width: 138,
       height: 138,
       borderRadius: 69,
       backgroundColor: '#D8D8D8',
    },
    text: {
      color: '#000000',
    }
});
