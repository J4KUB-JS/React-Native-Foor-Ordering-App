//Libraries
import React, { useState } from "react";
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
} from "../redux/mainSlice";

const CategoriesSlider = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.main.categories);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCategoryChange = (category) => {
    if (selectedCategoryId !== category.id) {
      dispatch(filterMenuByCategory(category));
      setSelectedCategoryId(category.id);
    } else {
      dispatch(filterMenuByCategory(null));
      setSelectedCategoryId(null);
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
          selectedCategoryId === item.id
            ? styles.activeCategory
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
