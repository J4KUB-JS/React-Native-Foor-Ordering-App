import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
} from "react-native";

function CategoryView({ categories, meals }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const toggleCategory = (categoryId) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedCategoryId((prev) => (prev === categoryId ? null : categoryId));
  };

  const renderCategoryItem = ({ item }) => {
    const categoryMeals = meals.filter((meal) => meal.category.id === item.id);
    const isCategorySelected = selectedCategoryId === item.id;

    return (
      <TouchableOpacity onPress={() => toggleCategory(item.id)}>
        {!isCategorySelected && (
          <View style={styles.card}>
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </View>
        )}
        {isCategorySelected && (
          <View style={styles.card}>
            <Text style={styles.categoryTitle}>{item.title}</Text>
            <FlatList
              data={categoryMeals}
              keyExtractor={(meal) => meal.id}
              renderItem={({ item }) => (
                <Text style={styles.mealItem}>{item.name}</Text>
              )}
            />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={categories}
      keyExtractor={(category) => category.id}
      renderItem={renderCategoryItem}
      style={{ width: "100%", marginTop: 20 }}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    justifyContent: "space-between",
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mealItem: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default CategoryView;
