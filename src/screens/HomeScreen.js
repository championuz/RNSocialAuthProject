import React, {useState, useEffect, useContext} from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from "../context/AuthContext";


const HomeScreen =({navigation}) => {
  const { userData, loggedIn, logout } = useContext(AuthContext);

  useEffect(() => {
    if (!loggedIn) {
      navigation.replace("Login");
    }
  }, [loggedIn]);

    return (
      <View style={styles.container}>
       <Text style={styles.title}>Welcome to the HomeScreen</Text>
        <Image 
        style={{ width: 100, height: 100, borderRadius: 50}}
        source={{ uri: userData.picture }} />
        <Text style={styles.label}>Logged in as {userData.name}  </Text> 
      
        <TouchableOpacity style={styles.signInButton} onPress={()=>logout()}>
          <Text style={styles.signInButtonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    title: {
      fontSize: 24,
      marginBottom: 24,
      fontWeight: '900',
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 24,
      padding: 8,
      width: '100%',
    },
    error: {
      color: 'red',
      marginBottom: 24,
    },
    signInButton: {
      backgroundColor: '#0077ff',
      padding: 12,
      marginBottom: 10,
      width: '100%',
    },
    signInButtonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });
  
export default HomeScreen
