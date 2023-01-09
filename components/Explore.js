import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const Explore = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://www.jsonkeeper.com/b/4G1G")
        .then((resposnse) => resposnse.json())
        .then((data) => setPlaces(data))
        .catch((error) => alert(error)); // display errors;
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.exploreText}>Explore More</Text>
      <FlatList
        numColumns={2}
        data={places}
        renderItem={({ item }) => (
          <View style={styles.cardView}>
            <Image style={styles.image} source={{ uri: item.img }} />
            <View style={styles.textsView}>
              <Text style={styles.textLocation}>{item.location}</Text>
              <Text>{item.distance}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  exploreText: {
    fontWeight: "500",
    fontSize: 18,
  },
  image: {
    width: 50,
    height: 50,
  },
  cardView: {
    flexDirection: "row",

    margin: 7,
  },
  textsView: {
    paddingLeft: 10,
    backgroundColor: "#72A0C1",
    alignItems: "center",
    paddingTop: 5,
    width: 120,
  },
  textLocation: {
    color: "white",
  },
});
