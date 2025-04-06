import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';

const Stack =  createNativeStackNavigator();

const MyApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Login">
        <Stack.Screen name = "Login" component = {Login} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyApp;