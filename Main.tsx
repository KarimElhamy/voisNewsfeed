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
import {DetailsScreen} from './src/components/DetailsScreen';

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

const Stack = createNativeStackNavigator();

const config = {
  screens: {
    App: {path: 'app'},
    ArticleFun: {path: 'articles'},
    DetailsScreen: {path: 'details/:id'},
  },
};

export default function Main() {
  LogBox.ignoreAllLogs();
  const scheme = useColorScheme();
  return (
    <PaperProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <NavigationContainer
        linking={{
          prefixes: ['newsfeed://'],
          config,
        }}>
        <Stack.Navigator initialRouteName="App">
          <Stack.Screen
            options={{
              title: 'Newsfeed',
              headerShown: false,
              headerTitleStyle: {
                fontWeight: 'bold',
                color: 'green',
              },
            }}
            name="App"
            component={App}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              headerTitleStyle: {
                fontWeight: 'bold',
                color: 'green',
              },
            }}
            name="DetailsScreen"
            component={DetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
