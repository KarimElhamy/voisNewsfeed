import * as React from 'react';
import {useColorScheme, View, Text, Button} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import App from './App';
// import {LanguageProvider} from 'react-native-translation';
// const locale = Localization.locale;
import {LogBox} from 'react-native';
import {Details} from './src/screens/details/Details';
import Navigation from './src/Navigation';

const darkTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1A1A1A',
    accent: '#FAFAFA',
  },
};

const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FAFAFA',
    accent: '#1A1A1A',
  },
};

export default function Main() {
  LogBox.ignoreAllLogs();
  const scheme = useColorScheme();
  return (
    <PaperProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <Navigation />
    </PaperProvider>
  );
}
