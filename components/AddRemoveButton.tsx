//Libraries
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

//Redux
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../redux/mainSlice";
import { MenuItem } from "../types/types";

interface AddRemoveButtonProps {
  variant?: "horizontal" | "vertical";
  count: number;
  item: MenuItem;
}

export const AddRemoveButton = ({
  variant = "vertical",
  count,
  item,
}: AddRemoveButtonProps) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  return (
    <View
      style={
        variant === "horizontal"
          ? styles.actionsWrapperHorizontal
          : styles.actionsWrapperVertical
      }
    >
      <TouchableOpacity onPress={() => dispatch(addItemToCart(item))}>
        <Ionicons name="ios-add-circle" size={24} color={colors.primary} />
      </TouchableOpacity>
      <Text style={styles.itemCount}>{count}</Text>
      <TouchableOpacity onPress={() => dispatch(removeItemFromCart(item.id))}>
        <Ionicons name="ios-remove-circle" size={24} color={colors.notification} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actionsWrapperVertical: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: "#EDEDED",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    borderRadius: 15,
  },
  actionsWrapperHorizontal: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: "#EDEDED",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    borderRadius: 15,
  },
  itemCount: {
    fontSize: 20,
  },
});
