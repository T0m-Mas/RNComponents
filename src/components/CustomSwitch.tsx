import React, {useContext} from 'react';
import {Switch} from 'react-native';
import {ThemeContext} from '../context/Theme/ThemeContex';

export const CustomSwitch = ({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (value: boolean) => void;
}) => {
  const {
    theme: {
      colors: {primary, inactive},
    },
  } = useContext(ThemeContext);
  return (
    <Switch
      trackColor={{false: inactive, true: primary}}
      thumbColor={'#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={onChange}
      value={value}
    />
  );
};
