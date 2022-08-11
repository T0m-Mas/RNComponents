import 'react-native-gesture-handler';
import React from 'react';
import StackNavigator from './src/navigation/Navigator';
import {ThemeProvider} from './src/context/Theme/ThemeContex';

const App = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
