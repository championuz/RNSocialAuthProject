import React, { useState } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import {AuthContextProvider} from './src/context/AuthContext';
import {useAuth0} from 'react-native-auth0';


const Stack = createNativeStackNavigator();


const App = () => {
  const {authorize, clearSession, user} = useAuth0();
  const loggedIn = user !== undefined && user !== null;

 
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar />
      <AuthContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Loading" options={{headerShown: false}} component={LoadingScreen} />
          <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} /> 
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        </AuthContextProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
});


export default App;
