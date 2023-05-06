import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealCard from "./MealCard";
import MealSearchBar from "./MealSearchBar";

const MealView = ({ meals, addToCart }) => {
  const [filteredMeals, setFilteredMeals] = useState(meals);

  const renderMealItem = ({ item }) => (
    <MealCard item={item} addToCart={addToCart} />
  );

  const handleSearch = (searchText) => {
    if (!searchText) {
      setFilteredMeals(meals);
      return;
    }

    const filtered = meals.filter(
      (meal) =>
        meal.name.toLowerCase().includes(searchText.toLowerCase()) ||
        meal.category.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredMeals(filtered);
  };

  return (
    <View style={styles.container}>
      <MealSearchBar onSearch={handleSearch} />
      <FlatList
        data={filteredMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
        style={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    width: "100%",
    padding: 10,
  },
});

export default MealView;
