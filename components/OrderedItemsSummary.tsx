//Libraries
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

//Redux
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../redux/mainSlice";

//Internal
import { CartItem } from "../types/types";

interface OrderedItemsSummaryProps {
  item: CartItem;
}

function OrderedItemsSummary({ item }: OrderedItemsSummaryProps) {
  const dispatch = useDispatch();
  const { colors } = useTheme();

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)} / Each</Text>
      </View>
      <View style={styles.itemActions}>
        <TouchableOpacity onPress={() => dispatch(addItemToCart(item))}>
          <Ionicons name="ios-add-circle" size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.itemCount}>{item.count}</Text>
        <TouchableOpacity onPress={() => dispatch(removeItemFromCart(item.id))}>
          <Ionicons name="ios-remove-circle" size={24} color={colors.notification} />
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
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
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
