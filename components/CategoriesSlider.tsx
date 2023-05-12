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
import { Category } from "../types/types";
import { RootState } from "../redux/store";

const CategoriesSlider = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.main.categories);

  const selectedCategory = useSelector(
    (state: RootState) => state.main.selectedCategory
  );

  useEffect(() => {
    dispatch(filterMenuByCategory(selectedCategory));
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId: string) => {
    dispatch(setSearchText(""));
    if (selectedCategory !== categoryId) {
      dispatch(setSelectedCategory(categoryId));
    } else {
      dispatch(setSelectedCategory(categoryId));
    }
  };

  const renderItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      onPress={() => {
        handleCategoryChange(item.id);
      }}
    >
      <Text
        style={
          selectedCategory !== null
            ? selectedCategory === item.id
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
