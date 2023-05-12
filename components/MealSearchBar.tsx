//Libraries
import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  filterMenuByName,
  filterMenuByCategory,
  setSearchText,
  setSelectedCategory,
} from "../redux/mainSlice";
import { RootState } from "../redux/store";

const MealSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state: RootState) => state.main.searchText);
  const [isActive, setIsActive] = useState(false);

  const handleSearchTextChange = (text: string) => {
    dispatch(setSelectedCategory(""));
    dispatch(filterMenuByName(text));
    dispatch(setSearchText(text));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWithIconWrapper}>
        <Ionicons name="search-outline" size={25} />
        <TextInput
          style={styles.input}
          value={searchText}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          onChangeText={handleSearchTextChange}
          placeholder="Search by meal or category"
        />
      </View>
      {isActive && searchText !== "" && (
        <TouchableOpacity onPress={() => handleSearchTextChange("")}>
          <Ionicons name="close-circle" size={25} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  inputWithIconWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    width: "82%",
    fontSize: 16,
  },
});

export default MealSearchBar;
