import { createStackNavigator } from 'react-navigation';
import PrayInfoScreen from '../screens/PrayInfoScreen';
import { PrayScreen } from '../screens/PrayScreen.js';

export default  createStackNavigator({
        Pray: PrayScreen,
});