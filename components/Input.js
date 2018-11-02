import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class Input extends React.Component {
    render() {
        return (
            <TextInput
                style = {styles.textInputStyle}
                placeholder='Reply'
                placeholderTextColor='black'
            />
        );
    }
}

const styles = StyleSheet.create({
    textInputStyle: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        alignContent: 'flex-end',
        paddingStart: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset:{ width: 0, height: 1 },
        shadowRadius: 5,
    },
});