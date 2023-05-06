import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function OrderedItemsSummary({ item, removeCartItem, addToCart }) {
  return (
    <View style={styles.card}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemLabel}>{item.name}</Text>
        <Text style={styles.itemValue}>${item.price} / Each</Text>
      </View>
      <View style={styles.itemActions}>
        <TouchableOpacity onPress={() => addToCart(item)}>
          <View style={styles.addIcon}>
            <Ionicons name="ios-add-circle" size={24} color="#2AB179" />
          </View>
        </TouchableOpacity>
        <Text style={styles.itemCount}>{item.count}</Text>
        <TouchableOpacity onPress={() => removeCartItem(item.id)}>
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
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemInfo: {
    flexDirection: "column",
    gap: 10,
  },
  itemLabel: {
    fontWeight: "bold",
    fontSize: 20,
  },
  itemValue: {
    fontSize: 15,
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
