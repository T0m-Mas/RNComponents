import React from 'react';
import {Text, View} from 'react-native';
import {MainMenu} from '../components/MainMenu';
import {MenuOptions} from '../data/MenuOptions';
import {useContext} from 'react';
import {ThemeContext} from '../context/Theme/ThemeContex';

export const HomeScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text
        style={{
          color: colors.primary,
          fontSize: 32,
          marginTop: 10,
          marginBottom: -10,
          fontWeight: '700',
          textAlign: 'center',
        }}>
        React Native
      </Text>
      <Text
        style={{
          color: colors.text,
          fontSize: 24,
          marginBottom: 10,
          fontWeight: '700',
          textAlign: 'center',
        }}>
        Components
      </Text>
      <MainMenu menuItems={MenuOptions} />
    </View>
  );
};
