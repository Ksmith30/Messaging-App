import { createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import StackNavigator from './StackNavigator';

export default createSwitchNavigator({
    Main: MainTabNavigator,
    Stack: StackNavigator,
});