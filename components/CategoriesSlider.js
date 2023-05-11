//Libraries
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

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

const CategoriesSlider = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.main.categories);
  const selectedCategory = useSelector((state) => state.main.selectedCategory);

  useEffect(() => {
    dispatch(filterMenuByCategory(selectedCategory));
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    dispatch(setSearchText(""));
    if (selectedCategory !== null) {
      if (selectedCategory.id !== category.id) {
        dispatch(setSelectedCategory(category));
      } else {
        dispatch(setSelectedCategory(null));
      }
    } else {
      dispatch(setSelectedCategory(category));
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        handleCategoryChange(item);
      }}
    >
      <Text
        style={
          selectedCategory !== null
            ? selectedCategory.id === item.id
              ? styles.activeCategory
              : styles.category
            : styles.category
        }
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  category: {
    marginRight: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#276578",
    fontSize: 16,
    fontWeight: "bold",
    color: "#276578",
  },
  activeCategory: {
    padding: 10,
    marginRight: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#2AB179",
    fontSize: 16,
    fontWeight: "bold",
    color: "#2AB179",
  },
});

export default CategoriesSlider;
