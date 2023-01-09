import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import DateRangePicker from "rnv-date-range-picker";
import moment from "moment";
const ReserveScreen = () => {
  const route = useRoute();
  const [selectedRange, setRange] = useState({});

  const day = new Date(selectedRange.firstDate);
  const night = new Date(selectedRange.secondDate);
  const diffTime = Math.abs(day - night);

  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const navigation = useNavigation();

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={{ uri: route.params.img }} />
        <Text style={styles.title}>{route.params.title}</Text>
        <View style={styles.textContainer}>
          <FontAwesome name="star" size={24} color="#fd5c63" />
          <Text style={styles.text}>{route.params.star}</Text>
          <Text style={styles.locationText}>{route.params.location}</Text>
        </View>

        <Text style={styles.line}></Text>
        <View style={styles.bookContainer}>
          <View>
            <Text style={{ fontWeight: "bold" }}>This is a rare find</Text>
            <Text style={styles.personStyle}>
              {route.params.person}'s Airbnb is usually fully booked
            </Text>
          </View>
          <FontAwesome name="diamond" size={24} color="orange" />
        </View>
        <Text style={styles.line}></Text>

        <View style={styles.host}>
          <View>
            <Text style={styles.hostText}>Hosted by {route.params.person}</Text>
            <Text style={styles.descStyle}>{route.params.desc}</Text>
          </View>
          <Image style={styles.imageStyle} source={{ uri: route.params.img }} />
        </View>
        <Text style={styles.line} />
        <View style={styles.homeContainer}>
          <AntDesign name="home" size={28} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.homeStyle}>Entire Home</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>
              You will have to yourself
            </Text>
          </View>
        </View>

        <View style={styles.homeContainer}>
          <SimpleLineIcons name="emotsmile" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.homeStyle}>Enhanced Cleaning</Text>
            <Text style={{ fontSize: 16, color: "gray", width: 300 }}>
              The host is commited to Airbnb's 5 step enhanced cleaning process
            </Text>
          </View>
        </View>

        <View style={styles.homeContainer}>
          <EvilIcons name="location" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.homeStyle}>Great Location</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>
              100% of guests gave a 5 star rating
            </Text>
          </View>
        </View>

        <View style={styles.homeContainer}>
          <FontAwesome name="calendar-times-o" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 18 }}>Free Cancelation Available</Text>
          </View>
        </View>
        <Text style={styles.line} />

        <Text style={styles.sleep}>Where You'll Sleep</Text>
        <View style={styles.sleepContainer}>
          <View style={styles.bedIconContainer}>
            <Ionicons name="bed-outline" size={24} color="black" />
            <Text style={styles.homeStyle}>Bedroom</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>1 double bed</Text>
          </View>
        </View>

        <Text style={styles.line} />

        <View style={{ marginLeft: 10 }}>
          <Text style={styles.offersText}>What this place offers</Text>
          <View style={styles.meal}>
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={24}
              color="black"
            />
            <Text style={styles.kitchenText}>Kitchen</Text>
          </View>

          <View style={styles.meal}>
            <AntDesign name="wifi" size={24} color="black" />
            <Text style={styles.kitchenText}>Wifi</Text>
          </View>

          <View style={styles.meal}>
            <AntDesign name="car" size={24} color="black" />
            <Text style={styles.kitchenText}>Free Parking</Text>
          </View>

          <View style={styles.meal}>
            <MaterialIcons name="pets" size={24} color="black" />
            <Text style={styles.kitchenText}>Pets</Text>
          </View>
        </View>
        <Text style={styles.line} />

        <View style={styles.container}>
          <DateRangePicker
            onSelectDateRange={(range) => {
              setRange(range);
            }}
            responseFormat="YYYY-MM-DD"
            minDate={moment()}
          />
          <View style={styles.container}>
            {!selectedRange.firstDate && !selectedRange.secondDate ? null : (
              <>
                <View style={styles.dateContainer}>
                  <Text style={styles.dateStyle}>
                    first date: {selectedRange.firstDate} -
                  </Text>
                  <Text style={styles.dateStyle}>
                    second date: {selectedRange.secondDate}
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>

      <Pressable style={styles.reserveContainer}>
        <Text style={styles.price}>{route.params.price} </Text>

        <TouchableOpacity
          disabled={!selectedRange.firstDate && !selectedRange.secondDate}
          onPress={() =>
            navigation.navigate("Confirm", {
              img: route.params.img,
              title: route.params.title,
              location: route.params.location,
              desc: route.params.desc,
              price: route.params.price,
              no_of_days: days,
              startDate: selectedRange.firstDate,
              endDate: selectedRange.secondDate,
              star: route.params.star,
              person: route.params.person,
            })
          }
          style={styles.reserveButton}
        >
          <Text style={styles.reserveText}>Reserve</Text>
        </TouchableOpacity>
      </Pressable>
    </>
  );
};

export default ReserveScreen;

const styles = StyleSheet.create({
  image: {
    height: 190,
    width: "100%",
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
  },
  reserveButton: {
    backgroundColor: "#fd5c63",
    padding: 10,
    borderRadius: 10,
  },
  reserveText: {
    color: "white",
  },
  reserveContainer: {
    backgroundColor: "#AFD8F5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  dateStyle: {
    fontSize: 17,
  },
  offersText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  kitchenText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "400",
  },
  meal: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  bedIconContainer: {
    marginTop: 10,
  },
  sleepContainer: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: "gray",
    width: 130,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  sleep: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  title: {
    padding: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  text: {
    paddingHorizontal: 10,
  },
  locationText: {
    fontSize: 16,
    color: "grey",
  },
  line: {
    height: 1,
    borderWidth: 1,
    borderColor: "#D8D8D8",
    marginTop: 7,
  },
  bookContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
  },
  personStyle: {
    fontSize: 15,
  },
  host: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hostText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  descStyle: {
    fontSize: 14,
    color: "#8A2bE2",
    fontWeight: "bold",
  },
  homeStyle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  homeContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
});
