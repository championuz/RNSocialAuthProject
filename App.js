import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import {AuthContextProvider} from './src/context/AuthContext';

const Stack = createNativeStackNavigator();


const App = () => {
 
  return (
    <SafeAreaView style={styles.container}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});


export default App;
