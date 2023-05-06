import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MealCard = ({ addToCart, item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <View style={styles.categoryPill}>
          <Text style={styles.categoryText}>{item.category.title}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => addToCart(item)}>
        <Ionicons name="add-circle-sharp" size={30} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  details: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    color: "#0d0d0d",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
  },
  categoryPill: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#276578",
  },
  categoryText: {
    color: "#276578",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 10,
  },
  price: {
    marginBottom: 10,
    color: "#0d0d0d",
    fontWeight: "bold",
    fontSize: 16,
  },
  icon: {
    color: "#2AB179",
  },
});

export default MealCard;
