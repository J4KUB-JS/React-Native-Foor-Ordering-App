//Libraries
import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

//Redux
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

//Internal
import MealCard from "../components/MealCard";
import MealSearchBar from "../components/MealSearchBar";
import CategoriesSlider from "../components/CategoriesSlider";
import { Category } from "../types/types";

const MealView = () => {
  const filteredMeals = useSelector((state: RootState) => state.main.filteredMenu);
  const categories = useSelector((state: RootState) => state.main.categories);

  const renderByCategory = ({ item }: { item: Category }) => {
    const categoryMenu = filteredMeals.filter(
      (menuItem) => menuItem.category.id === item.id
    );
    return (
      <>
        {categoryMenu.length !== 0 ? (
          <>
            <View style={styles.categoryLabelWrapper}>
              <Text style={styles.categoryLabel}>{item.title}</Text>
            </View>
            <FlatList
              data={categoryMenu}
              renderItem={({ item }) => <MealCard item={item} />}
              keyExtractor={(item) => item.id}
            />
          </>
        ) : null}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <MealSearchBar />
      <CategoriesSlider />
      <FlatList
        data={categories}
        renderItem={renderByCategory}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 120,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingVertical: 16,
  },
  categoryLabelWrapper: {
    marginVertical: 10,
    marginHorizontal: 5,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default MealView;
