import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        style={styles.image}
        source={{
          uri: "https://wallpapersmug.com/download/1280x900/e24db9/mountains-clouds-landscape-art.jpg",
        }}
      >
        <View style={styles.container}>
          <AntDesign name="search1" size={18} style={styles.searchLogo} />
          <TextInput
            placeholder="Where do you want to go?"
            style={styles.searchText}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.buttonText}>I'm Flexible</Text>
        </TouchableOpacity>
        <View style={styles.textView}>
          <Text style={styles.text}>Not Sure Where to GO?</Text>
          <Text style={styles.text}>Perfect!</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    width: 220,
    padding: 6,
    borderRadius: 16,
    marginRight: "auto",
    marginLeft: "auto",
  },
  image: {
    width: "100%",
    height: 540,
  },
  searchText: {
    color: "red",
    fontSize: 16,
    paddingHorizontal: 10,
  },
  searchLogo: {
    color: "#C71585",
  },
  button: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    borderRadius: 20,
  },
  buttonText: {
    color: "#C71585",
    backgroundColor: "white",
    padding: 10,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  textView: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
});
