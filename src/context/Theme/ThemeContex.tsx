import React, {createContext, useReducer} from 'react';
import {useColorScheme} from 'react-native';
import {themeReducer, ThemeState} from './ThemeReducer';
import {useEffect} from 'react';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  colors: {
    primary: '#38a3eb',
    background: '#f3f3f3',
    card: 'green',
    text: '#444444',
    border: 'orange',
    notification: 'purple',
    inactive: '#403f3e',
  },
};
const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  colors: {
    primary: '#38a3eb',
    background: '#0c0c0d',
    card: 'green',
    text: '#cfcfcf',
    border: 'orange',
    notification: 'purple',
    inactive: '#403f3e',
  },
};

export const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();
  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'light' ? lightTheme : darkTheme,
  );

  useEffect(() => {
    if (colorScheme === 'dark') {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, [colorScheme]);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme', payload: darkTheme});
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme', payload: lightTheme});
  };

  return (
    <ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
