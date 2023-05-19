//Libraries
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

//Redux
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

//Internal
import OrderedItemsSummary from "../components/OrderedItemsSummary";
import CartSummaryWithAction from "../components/CartSummaryWithAction";

function CartView() {
  const cart = useSelector((state: RootState) => state.main.cart);

  return (
    <>
      {cart.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Ionicons name="cart" size={50} style={styles.emptyCartIcon} />
          <Text style={styles.emptyCartText}>
            No items in cart. {"\n"} Let's do something about it
          </Text>
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={cart}
            renderItem={({ item }) => <OrderedItemsSummary item={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingVertical: 16,
            }}
          />
          <CartSummaryWithAction
            mealsTotalPrice={cart.reduce((acc, curr) => acc + curr.price * curr.count, 0)}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    gap: 20,
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
});

export default CartView;
