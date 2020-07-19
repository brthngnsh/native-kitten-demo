import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ApplicationProvider, Layout, Text,IconRegistry } from '@ui-kitten/components';
import myTheme from "./Component/theme/custom-theme";
import * as eva from '@eva-design/eva';
import login from './Component/login'
import home from './Component/home'
import profile from './Component/profile'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const Stack = createStackNavigator();

export default function App() {
  return (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...myTheme }}>
      <NavigationContainer>
        <Stack.Navigator headerMode='none' initialRouteName="profile">
          <Stack.Screen name="Login" component={login} />
          <Stack.Screen name="Home" component={home} />
          <Stack.Screen name="profile" component={profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
