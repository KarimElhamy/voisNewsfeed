import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from '../App';
import {Details} from './screens/details/Details';
import React from 'react';

const Stack = createNativeStackNavigator();

const config = {
  screens: {
    App: {path: 'app'},
    Article: {path: 'articles'},
    Details: {path: 'details/:id'},
  },
};

export default function Navigation() {
  return (
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
          name="Details"
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
