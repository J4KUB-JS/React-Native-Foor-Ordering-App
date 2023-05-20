//Libraries
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

//Redux
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

//Internal
import { MenuItem } from "../types/types";
import { AddRemoveButton } from "./AddRemoveButton";

interface MealCardProps {
  item: MenuItem;
}

const MealCard = ({ item }: MealCardProps) => {
  const cart = useSelector((state: RootState) => state.main.cart);
  const itemCount = cart.find((cartItem) => cartItem.id === item.id)?.count;

  return (
    <View style={styles.card}>
      <View style={styles.priceChip}>
        <Text style={styles.priceChipText}>$ {item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.mainWrapper}>
        <View style={styles.cardHeader}>
          <Text style={styles.name}>{item.name}</Text>
          {item.icon && <FontAwesome5 name={item.icon} size={20} />}
        </View>
        {item.ingredients.length !== 0 && (
          <Text style={styles.ingredients}>{item.ingredients.join(", ")}</Text>
        )}
      </View>
      <AddRemoveButton variant="vertical" count={itemCount ? itemCount : 0} item={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    // height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: "#fff",
    marginBottom: 10,
    // paddingLeft: 16,
    padding: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  mainWrapper: {
    width: "70%",
  },
  name: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  ingredients: {
    marginTop: 10,
    display: "flex",
    flexWrap: "wrap",
    fontSize: 15,
  },
  priceChip: {
    position: "absolute",
    left: -5,
    top: -5,
    width: 70,
    backgroundColor: "#276578",
    padding: 5,
    borderRadius: 20,
  },
  priceChipText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    color: "#fff",
  },
});

export default MealCard;
