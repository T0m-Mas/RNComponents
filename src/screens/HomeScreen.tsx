import React from 'react';
import {Text, View} from 'react-native';
import {MainMenu} from '../components/MainMenu';
import {MenuOptions} from '../data/MenuOptions';
import {primary, textColor, ViewScreen} from '../theme/globals';

export const HomeScreen = () => {
  return (
    <View style={{...ViewScreen, alignItems: 'center'}}>
      <Text
        style={{
          color: primary,
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
          color: textColor,
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
