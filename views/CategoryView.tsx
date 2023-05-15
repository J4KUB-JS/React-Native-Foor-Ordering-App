//Libraries
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

//Redux
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

//Internal
import { Category } from "../types/types";

function CategoryView() {
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const categories = useSelector((state: RootState) => state.main.categories);
  const menu = useSelector((state: RootState) => state.main.menu);
  const { colors } = useTheme();

  const toggleCategory = (categoryId: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedCategoryId((prev) => (prev === categoryId ? "" : categoryId));
  };

  const renderCategoryItem = ({ item }: { item: Category }) => {
    const categoryMenu = menu.filter((meal) => meal.category.id === item.id);

    return (
      <TouchableOpacity onPress={() => toggleCategory(item.id)}>
        {selectedCategoryId === item.id ? (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.categoryTitle}>{item.title}</Text>
              <Ionicons name="chevron-up" size={25} color={colors.text} />
            </View>
            <FlatList
              data={categoryMenu}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Text style={styles.mealItem}>{item.name}</Text>}
            />
          </View>
        ) : (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.categoryTitle}>{item.title}</Text>
              <Ionicons name="chevron-down" size={25} color={colors.text} />
            </View>
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
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    gap: 20,
  },
  card: {
    marginBottom: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    justifyContent: "space-between",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
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
