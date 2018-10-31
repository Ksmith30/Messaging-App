import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class Input extends React.Component {
    render() {
        return (
            <TextInput
                style = {styles.textInputStyle}
                placeholder='Reply'
            />
        );
    }
}

const styles = StyleSheet.create({
    textInputStyle: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
    },
});