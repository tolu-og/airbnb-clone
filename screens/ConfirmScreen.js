import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const ConfirmScreen = () => {
  const [add, setAdd] = useState(1);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Confirm and Pay",
      headerStyle: {
        backgroundColor: "#FD5C63",
      },
      headerTintColor: "#fff",
    });
  });
  const route = useRoute();
  //price calculations
  const price = route.params.price;
  const serviceFee = 20;
  const taxes = 25;
  const result = price.replace(/\D/g, "");
  const price_with_days = result * route.params.no_of_days;
  const totalPrice = (price_with_days + serviceFee + taxes) * add;
  return (
    <View style={styles.safe}>
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: route.params.img }} />
        <View style={styles.textContainer}>
          <Text style={styles.texts}>{route.params.location}</Text>
          <Text style={styles.title}>{route.params.title}</Text>
          <Text style={styles.desc}>{route.params.desc}</Text>
          <Text style={styles.texts}>{route.params.star} ratings</Text>
        </View>
      </View>
      <View style={styles.bookContainer}>
        <View>
          <Text style={{ fontWeight: "bold" }}>This is a rare find</Text>
          <Text style={styles.personStyle}>
            {route.params.person}'s Airbnb is usually fully booked
          </Text>
        </View>
        <FontAwesome name="diamond" size={24} color="orange" />
      </View>
      <Text style={styles.line} />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.tripText}>Your Trip</Text>
        <Text style={{ fontWeight: "bold", marginTop: 15 }}>Dates</Text>
        <Text style={styles.dateText}>
          {route.params.startDate} - {route.params.endDate}
        </Text>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Guests</Text>
          <Text> {add} Guests </Text>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              right: 10,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fd5c63",
              borderRadius: 5,
            }}
          >
            <Pressable onPress={() => setAdd(Math.max(1, add - 1))}>
              <Text
                style={{
                  fontSize: 25,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                -
              </Text>
            </Pressable>

            <Pressable>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                {add}
              </Text>
            </Pressable>

            <Pressable onPress={() => setAdd(add + 1)}>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                +
              </Text>
            </Pressable>
          </Pressable>
        </View>
      </View>
      <Text style={styles.line} />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17 }}>Price Details</Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            {route.params.price} x {route.params.no_of_days} Days
          </Text>
          <Text style={{ color: "gray", fontSize: 16 }}>
            £{result * route.params.no_of_days}
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Service Fee</Text>
          <Text style={{ color: "gray", fontSize: 16 }}>£20</Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Occupancy Taxes and Fee
          </Text>
          <Text style={{ color: "gray", fontSize: 16 }}>£45</Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>TOTAL</Text>
          <Text style={{ color: "gray", fontSize: 16 }}>£{totalPrice} </Text>
        </View>
      </View>
      <Text style={styles.line} />
      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Cancelation Policy
        </Text>
        <Text style={styles.cancelText}>
          Free cancelation for 48 hours minus the service fee
        </Text>
        <Text style={styles.cancelText}>
          Review the Host's full cancellation policy
        </Text>
      </View>

      <Text style={styles.line} />
      <TouchableOpacity
        onPress={() => navigation.navigate("Final")}
        style={styles.confirmButton}
      >
        <Text style={{ textAlign: "center", color: "white" }}>
          Confirm and Pay
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmScreen;

const styles = StyleSheet.create({
  cancelText: { marginTop: 10, color: "gray", fontSize: 16 },
  confirmButton: {
    backgroundColor: "#fd5c63",
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    padding: 10,
  },
  tripText: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "500",
  },
  safe: {
    padding: 10,
  },
  textContainer: {
    margin: 10,
  },

  texts: {
    color: "gray",
    fontSize: 15,
  },
  title: {
    marginVertical: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  container: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  desc: {
    width: 300,
    color: "gray",
  },
  line: {
    height: 1,
    borderWidth: 3,
    borderColor: "#D8D8D8",
    marginTop: 7,
  },
  bookContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  personStyle: {
    fontSize: 15,
  },
});
