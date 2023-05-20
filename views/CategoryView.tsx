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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addItemToCart } from "../redux/mainSlice";

//Internal
import { Category, MenuItem } from "../types/types";
import { AddRemoveButton } from "../components/AddRemoveButton";

function CategoryView() {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const categories = useSelector((state: RootState) => state.main.categories);
  const menu = useSelector((state: RootState) => state.main.menu);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const cart = useSelector((state: RootState) => state.main.cart);

  const toggleCategory = (categoryId: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedCategoryId((prev) => (prev === categoryId ? "" : categoryId));
  };

  const renderCardItem = ({ item }: { item: MenuItem }) => {
    const itemCount = cart.find((cartItem) => cartItem.id === item.id)?.count;

    return (
      <View style={styles.mealItem}>
        <View style={styles.priceChip}>
          <Text style={styles.priceChipText}>$ {item.price.toFixed(2)}</Text>
        </View>
        <Text style={styles.mealItemName}>{item.name}</Text>
        <AddRemoveButton
          variant="horizontal"
          count={itemCount ? itemCount : 0}
          item={item}
        />
      </View>
    );
  };

  const renderCategoryItem = ({ item }: { item: Category }) => {
    const categoryMenu = menu.filter((meal) => meal.category.id === item.id);

    return (
      <>
        {selectedCategoryId === item.id ? (
          <View style={styles.card}>
            <TouchableOpacity onPress={() => toggleCategory(item.id)}>
              <View style={styles.cardHeader}>
                <Text style={styles.categoryTitle}>{item.title}</Text>
                <Ionicons name="chevron-up" size={25} color={colors.text} />
              </View>
            </TouchableOpacity>
            <FlatList
              data={categoryMenu}
              keyExtractor={(item) => item.id}
              renderItem={renderCardItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        ) : (
          <TouchableOpacity onPress={() => toggleCategory(item.id)}>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.categoryTitle}>{item.title}</Text>
                <Ionicons name="chevron-down" size={25} color={colors.text} />
              </View>
            </View>
          </TouchableOpacity>
        )}
      </>
    );
  };

  return (
    <FlatList
      data={categories}
      keyExtractor={(category) => category.id}
      renderItem={renderCategoryItem}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingVertical: 16,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 20,
  },
  card: {
    marginBottom: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
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
    width: 120,
    borderWidth: 2,
    borderColor: "#000",
    padding: 5,
    borderRadius: 15,
    marginRight: 10,
    marginTop: 10,
  },
  actionButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2AB179",
    padding: 10,
    borderRadius: 10,
  },
  actionButtonText: {
    color: "#fff",
  },
  mealItemName: {
    marginTop: 20,
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 10,
    fontSize: 16,
  },
  priceChip: {
    position: "absolute",
    right: -10,
    top: -10,
    width: 65,
    backgroundColor: "#276578",
    padding: 5,
    borderRadius: 20,
  },
  priceChipText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 14,
    color: "#fff",
  },
});

export default CategoryView;
