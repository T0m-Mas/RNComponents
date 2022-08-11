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
import {ModalScreen} from '../screens/ModalScreen';
import {InfiniteScrollScreen} from '../screens/InfiniteScrollScreen';
import {SlideShowScreen} from '../screens/SlideShowScreen';
import {ThemeScreen} from '../screens/ThemeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {useContext} from 'react';
import {ThemeContext} from '../context/Theme/ThemeContex';
import {StatusBar, View} from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';

const Stack = createStackNavigator();

function StackNavigator() {
  const {theme} = useContext(ThemeContext);
  SystemNavigationBar.setNavigationColor(theme.colors.background);
  SystemNavigationBar.lightNavigationBar(theme.dark);
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <NavigationContainer theme={theme}>
        <StatusBar
          barStyle={theme.dark ? 'light-content' : 'dark-content'}
          backgroundColor={theme.colors.background}
        />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animationTypeForReplace: 'push',
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Animation101Screen"
            component={Animation101Screen}
          />
          <Stack.Screen
            name="Animation102Screen"
            component={Animation102Screen}
          />
          <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
          <Stack.Screen
            name="PullToRefreshScreen"
            component={PullToRefreshScreen}
          />
          <Stack.Screen
            name="SectionListScreen"
            component={SectionListScreen}
          />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen
            name="InfiniteScrollScreen"
            component={InfiniteScrollScreen}
          />
          <Stack.Screen
            name="SlideShowScreen"
            component={SlideShowScreen}
            options={{gestureEnabled: false}}
          />
          <Stack.Screen
            name="ThemeScreen"
            component={ThemeScreen}
            options={{gestureEnabled: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default StackNavigator;
