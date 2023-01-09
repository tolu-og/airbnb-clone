import { View, Text, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import Search from "../data/Search";
import { useNavigation } from "@react-navigation/native";
import SearchItem from "../components/SearchItem";

const SearchScreen = () => {
  const data = Search;
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Explore Airbnb",
      headerStyle: {
        backgroundColor: "#FD5C63",
      },
      headerTintColor: "#fff",
    });
  });
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <SearchItem data={item} />}
      />
    </View>
  );
};

export default SearchScreen;
