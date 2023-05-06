import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import OrderedItemsSummary from "./OrderedItemsSummary";
import CartSummaryWithAction from "./CartSummaryWithAction";

function CartView({ cartItems, removeCartItem, addToCart }) {
  const renderItem = ({ item }) => (
    <OrderedItemsSummary
      item={item}
      removeCartItem={removeCartItem}
      addToCart={addToCart}
    />
  );
  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Ionicons name="cart" size={50} style={styles.emptyCartIcon} />
          <Text style={styles.emptyCartText}>
            No items in cart. {"\n"} Let's do something bout it
          </Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingVertical: 8,
            }}
          />
          <CartSummaryWithAction
            mealsTotalPrice={cartItems.reduce(
              (acc, curr) => acc + curr.price * curr.count,
              0
            )}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartIcon: {
    color: "#9BAEBC",
  },
  emptyCartText: {
    textAlign: "center",
    fontSize: 20,
    color: "#9BAEBC",
  },
  itemContainer: {
    flexDirection: "row",
    marginVertical: 8,
  },
  itemText: {
    flex: 1,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
});

export default CartView;
