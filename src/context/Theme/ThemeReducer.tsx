import {Theme} from '@react-navigation/native';

type ThemeAction =
  | {type: 'set_dark_theme'; payload: ThemeState}
  | {type: 'set_light_theme'; payload: ThemeState};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    inactive: string;
  };
}

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return action.payload;
    case 'set_dark_theme':
      return action.payload;
    default:
      return state;
  }
};
