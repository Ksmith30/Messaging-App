import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import PrayScreen from '../screens/PrayScreen';
import ShareScreen from '../screens/ShareScreen';
import FellowshipScreen from '../screens/FellowshipScreen';
import GrowScreen from '../screens/GrowScreen';
import GoScreen from '../screens/GoScreen';

const PrayerStack = createStackNavigator({
  Pray: PrayScreen,
});

PrayerStack.navigationOptions = {
  tabBarLabel: 'Pray',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ShareStack = createStackNavigator({
  Share: ShareScreen,
});

ShareStack.navigationOptions = {
  tabBarLabel: 'Share',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const FellowshipStack = createStackNavigator({
  Fellowship: FellowshipScreen,
});

FellowshipStack.navigationOptions = {
  tabBarLabel: 'Fellowship',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const GrowStack = createStackNavigator({
  Grow: GrowScreen,
});

GrowStack.navigationOptions = {
  tabBarLabel: 'Grow', 
}

const GoStack = createStackNavigator({
  Go: GoScreen,
});

GoStack.navigationOptions = {
  tabBarLabel: 'Go',
}

export default createBottomTabNavigator({
  PrayerStack,
  ShareStack,
  FellowshipStack,
  GrowStack,
  GoScreen,
});
