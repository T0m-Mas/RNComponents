import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {TextNormal, ViewScreen} from '../styles/globals';
import {useState} from 'react';
import {ThemeContext} from '../context/Theme/ThemeContex';

export const ThemeScreen = () => {
  const {
    theme: {
      currentTheme,
      colors: {text},
    },
    setDarkTheme,
    setLightTheme,
  } = useContext(ThemeContext);
  const [darkSide, setDarkSide] = useState(
    currentTheme === 'dark' ? true : false,
  );
  const changeTheme = () => {
    if (darkSide) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
    setDarkSide(!darkSide);
  };
  return (
    <View style={ViewScreen}>
      <HeaderTitle title="Themes" subtitle="come to the dark side..." />
      <View
        style={{
          marginTop: 10,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{...TextNormal, color: text}}>Dark Side</Text>
        <CustomSwitch value={darkSide} onChange={changeTheme} />
      </View>
    </View>
  );
};
