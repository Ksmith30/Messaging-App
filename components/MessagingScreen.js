import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Input from './Input';

export default class MessagingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                </ScrollView>
                <Input/>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
    },
    contentContainer: {
      paddingTop: 30,
    },
});