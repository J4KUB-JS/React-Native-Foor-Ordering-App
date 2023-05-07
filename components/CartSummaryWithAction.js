import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function CartSummaryWithAction({ mealsTotalPrice }) {
  return (
    <View style={styles.cartSummaryContainer}>
      <View style={styles.priceContainer}>
        <View style={styles.individualCostsItem}>
          <Text style={styles.individualCostsLabel}>Subtotal</Text>
          <Text style={styles.individualCostsLabel}>
            $ {mealsTotalPrice.toFixed(2)}
          </Text>
        </View>
        <View style={styles.individualCostsItem}>
          <Text style={styles.individualCostsLabel}>Service Fee</Text>
          <Text style={styles.individualCostsLabel}>2%</Text>
        </View>
        <View style={styles.individualCostsItem}>
          <Text style={styles.individualCostsLabel}>Delivery</Text>
          <Text style={styles.individualCostsLabel}>Free</Text>
        </View>

        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceLabel}>Total:</Text>
          <Text style={styles.totalPriceLabel}>
            $ {(mealsTotalPrice + mealsTotalPrice * 0.02).toFixed(2)}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Place Order</Text>
        <Ionicons name="arrow-forward" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cartSummaryContainer: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  priceContainer: {
    flexDirection: "column",
    gap: 15,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  individualCostsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  individualCostsLabel: {
    fontSize: 15,
  },
  totalPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    paddingTop: 20,
  },
  totalPriceLabel: {
    fontWeight: "bold",
    fontSize: 20,
  },
  orderButton: {
    backgroundColor: "#2AB179",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CartSummaryWithAction;
