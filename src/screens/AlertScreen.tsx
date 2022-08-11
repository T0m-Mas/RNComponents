import React from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ViewScreen} from '../styles/globals';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert('An Alert', 'Wee-Ooo Wee-Ooo, you have been alerted', [
      {
        text: 'Um ok',
      },
    ]);
  };

  return (
    <View style={ViewScreen}>
      <HeaderTitle
        title="Alerts"
        subtitle="very useful for alerting of something"
      />
      <View style={container}>
        <Button title="Alert me" onPress={showAlert} />
      </View>
    </View>
  );
};

const {container} = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
