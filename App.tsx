import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getClient } from './utils/client';
import Search from './pages/Search';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './components/Nav';
import Profile from './pages/Profile';
import Messages from "./pages/Messages"
import Settings from './pages/Settings'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/Main';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux'
import { store } from './store/store'
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
      </Provider>
  );
}


