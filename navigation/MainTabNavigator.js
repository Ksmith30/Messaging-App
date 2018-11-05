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
          ? `ios-disc${focused ? '' : '-outline'}`
          : 'md-disc'
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
      name={Platform.OS === 'ios' ? `ios-disc${focused ? '' : '-outline'}` : 'md-disc'}
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
      name={Platform.OS === 'ios' ? `ios-disc${focused ? '' : '-outline'}` : 'md-disc'}
    />
  ),
};

const GrowStack = createStackNavigator({
  Grow: GrowScreen,
});

GrowStack.navigationOptions = {
  tabBarLabel: 'Grow', 
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-disc${focused ? '' : '-outline'}` : 'md-disc'}
    />
  ),
}

const GoStack = createStackNavigator({
  Go: GoScreen,
});

GoStack.navigationOptions = {
  tabBarLabel: 'Go',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-disc${focused ? '' : '-outline'}` : 'md-disc'}
    />
  ),
}

export default createBottomTabNavigator({
  PrayerStack,
  ShareStack,
  FellowshipStack,
  GrowStack,
  GoStack,
});