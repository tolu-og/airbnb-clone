import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FinalScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.booking}>Hooray Your booking has been confirmed</Text>
      <Text style={styles.airbnbText}>Airbnb</Text>
    </View>
  );
};

export default FinalScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  booking: {
    fontSize: 20,
  },
  airbnbText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fd5c63",
  },
});
