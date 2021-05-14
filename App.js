import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/welcomeScreen'
import {AppTabNavigator}  from './components/tabNavigator'
import { createAppContainer, createSwitchNavigator,} from 'react-navigation'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {AppDrawerNavigator} from './components/appDrawerNavigator';


export default function App() {
  return (
   <AppContainer>
     
   </AppContainer>
  );
}



const SwitchNavigator= createSwitchNavigator({
  firstScreen: {screen:WelcomeScreen},
  secondScreen: {screen:AppDrawerNavigator}
})

const AppContainer = createAppContainer(
  SwitchNavigator
)