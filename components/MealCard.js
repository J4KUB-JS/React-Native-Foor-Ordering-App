//Libraries
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  filterMenuByName,
  filterMenuByCategory,
  setSearchText,
} from "../redux/mainSlice";

const MealCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.cardHeader}>
          <Text style={styles.name}>{item.name}</Text>
          {item.icon && (
            <FontAwesome5 name={item.icon} size={20} style={styles.icon} />
          )}
        </View>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={() => dispatch(addItemToCart(item))}>
        <View style={styles.actionButton}>
          <Ionicons name="add-outline" size={30} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingLeft: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
  },
  price: {
    marginBottom: 10,
    fontSize: 16,
  },
  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    backgroundColor: "#2AB179",
    borderRadius: 20,
    marginRight: 16,
  },
});

export default MealCard;
