import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Experience = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Discover airbnb Experiences</Text>
      <ImageBackground
      style={styles.backgroundimage} 
      source = {{
        uri:'https://wallpapersmug.com/download/1366x768/ca63c8/williamsburg-bridge-new-york-cityscape.jpg'
      }}>
        <View style={styles.textContainer}>
        <Text style={styles.imageText}>Things to do on your Trip</Text>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Experiences</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Experience;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
  backgroundimage:{
    width: 350,
    height: 450,
    resizeMode: 'contain',
    margin: 20,
    borderRadius: 10,
  },
  imageText:{
    fontSize: 30,
    color:'white',
    width: 260,
    fontWeight: 'bold'
  },
  textContainer:{
    padding: 10,
  },
  button:{
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    width: 150,
    borderRadius: 50
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
