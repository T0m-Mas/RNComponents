import 'react-native-gesture-handler';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigator from './src/navigation/Navigator';
import {StatusBar} from 'react-native';
import {background} from './src/theme/globals';

const App = () => {
  SystemNavigationBar.setNavigationColor(background, true);
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar backgroundColor={background} />
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
