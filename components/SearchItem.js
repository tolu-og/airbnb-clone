import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchItem = (props) => {
  const data = props.data;
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Reserve", {
            id: data.key,
            img: data.img,
            desc: data.description,
            lat: data.lat,
            location: data.location,
            person: data.person,
            price: data.price,
            review: data.review,
            star: data.star,
            title: data.title,
            total: data.total,
            distance: data.distance,
          })
        }
        style={styles.touchabale}
      >
        <Image style={styles.images} source={{ uri: data.img }} />
        <Pressable style={styles.heartIcon}>
          <AntDesign name="hearto" size={24} color="white" />
        </Pressable>
        <View>
          <View style={styles.texts}>
            <Text style={styles.location}>{data.location}</Text>
            <Text style={styles.price}>{data.price}</Text>
          </View>
        </View>
        <View style={styles.texts2}>
          <Text style={styles.distance}>{data.distance} km away</Text>
          <Text>Feb 12 - 16</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  images: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  touchabale: {
    margin: 10,
  },
  texts: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  location: {
    fontSize: 17,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
  },
  distance: {
    color: "grey",
    fontSize: 16,
  },
  texts2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heartIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});
