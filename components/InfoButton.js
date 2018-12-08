import React, { Component } from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';

export default class InfoButton extends Component {
    render() {
        return (
                <TouchableOpacity onPress={this._onPressInfoButton}>
                    <Icon.Ionicons
                        name= {Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-information-circle'}
                        size= {26}
                    />

                </TouchableOpacity>
        );
    }
}
