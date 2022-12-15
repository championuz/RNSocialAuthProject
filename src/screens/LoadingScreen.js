
import React, { useEffect, useContext } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

import { AuthContext } from "../context/AuthContext";

function LoadingScreen({ navigation }) {
  const { loading, loggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (loggedIn) {
      navigation.replace("Home");
    } else if (!loggedIn) {
      navigation.replace("Login");
    }
  }, [loggedIn]);

  return (
    <View style={styles.container}>
      {loading && (
        <React.Fragment>
          <ActivityIndicator size="large" />
          <View style={{ marginTop: 10 }}>
            <Text>Please wait...</Text>
          </View>
        </React.Fragment>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingScreen;