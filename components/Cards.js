import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Cards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Inspiration for your next trip?</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator ={false}>

      <TouchableOpacity style={styles.cardTouchable}>
        <Image
          style={styles.image}
          source={{
            uri: "https://wallpapersmug.com/download/1280x900/ca63c8/williamsburg-bridge-new-york-cityscape.jpg",
          }}
        />
        <View style={styles.cardView}>
          <Text style={styles.cardLocation}>Maldives</Text>
          <Text style={styles.cardDistance}>20km</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardTouchable}>
        <Image
          style={styles.image}
          source={{
            uri: "https://wallpapersmug.com/download/1280x900/bc2c23/phoenix-island-resort-sanya-china.jpg",
          }}
        />
        <View style={styles.cardView}>
          <Text style={styles.cardLocation}>Hull</Text>
          <Text style={styles.cardDistance}>26km</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardTouchable}>
        <Image
          style={styles.image}
          source={{
            uri: "https://wallpapersmug.com/download/1280x900/0d5bff/Italy-city-monring-mist.jpg",
          }}
        />
        <View style={styles.cardView}>
          <Text style={styles.cardLocation}>Mauritius</Text>
          <Text style={styles.cardDistance}>30km</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardTouchable}>
        <Image
          style={styles.image}
          source={{
            uri: "https://wallpapersmug.com/download/1280x900/38b0e9/aerial-view-bay-monaco-city.jpg",
          }}
        />
        <View style={styles.cardView}>
          <Text style={styles.cardLocation}>Lagos</Text>
          <Text style={styles.cardDistance}>60km</Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  image: {
    width: 190,
    height: 150,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    marginTop: 10,
  },
  cardLocation: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  cardDistance: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
  },
  cardView: {
    backgroundColor: "orange",
    width: 190,
    padding: 10,
  },
  cardTouchable:{
    marginTop: 10,
    margin: 10
  }
});
