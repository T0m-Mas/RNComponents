import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import React from 'react';
import {Animation101Screen} from '../screens/Animation101Screen';
import {Animation102Screen} from '../screens/Animation102Screen';
import {SwitchScreen} from '../screens/SwitchScreen';
import {AlertScreen} from '../screens/AlertScreen';
import {TextInputScreen} from '../screens/TextInputScreen';
import {PullToRefreshScreen} from '../screens/PullToRefreshScreen';
import {SectionListScreen} from '../screens/SectionListScreen';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        animationTypeForReplace: 'push',
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;