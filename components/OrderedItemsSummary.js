//Libraries
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  filterMenuByName,
  filterMenuByCategory,
  setSearchText,
} from "../redux/mainSlice";

function OrderedItemsSummary({ item }) {
  const dispatch = useDispatch();
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)} / Each</Text>
      </View>
      <View style={styles.itemActions}>
        <TouchableOpacity onPress={() => dispatch(addItemToCart(item))}>
          <View style={styles.addIcon}>
            <Ionicons name="ios-add-circle" size={24} color="#2AB179" />
          </View>
        </TouchableOpacity>
        <Text style={styles.itemCount}>{item.count}</Text>
        <TouchableOpacity onPress={() => dispatch(removeItemFromCart(item.id))}>
          <View style={styles.removeIcon}>
            <Ionicons name="ios-remove-circle" size={24} color="#EF6363" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
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
  itemActions: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: "#EDEDED",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    borderRadius: 15,
  },
  itemCount: {
    fontSize: 20,
  },
});

export default OrderedItemsSummary;
