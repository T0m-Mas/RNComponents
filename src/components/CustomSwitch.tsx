import React from 'react';
import {Switch} from 'react-native';
import {primary, inactiveColor} from '../theme/globals';

export const CustomSwitch = ({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (value: boolean) => void;
}) => {
  return (
    <Switch
      trackColor={{false: inactiveColor, true: primary}}
      thumbColor={'#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={onChange}
      value={value}
    />
  );
};
