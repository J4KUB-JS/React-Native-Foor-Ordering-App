import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CATEGORIES, MEALS } from "./data/data";

import MealView from "./MealView";
import CartView from "./CardView";
import CategoryView from "./CategoryView";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [meals, setMeals] = useState(MEALS);
  const [categories, setCategories] = useState(CATEGORIES);

  const addToCart = (mealToAdd) => {
    setCartItems((prevState) => {
      const index = prevState.findIndex((item) => item.id === mealToAdd.id);
      if (index !== -1) {
        prevState[index].count++;
        return [...prevState];
      } else {
        return [...prevState, { ...mealToAdd, count: 1 }];
      }
    });
  };

  const removeCartItem = (mealId) => {
    const index = cartItems.findIndex((item) => item.id === mealId);
    if (index !== -1) {
      const modifiedArray = [...cartItems];
      if (modifiedArray[index].count === 1) {
        modifiedArray.splice(index, 1);
      } else {
        modifiedArray[index] = {
          ...modifiedArray[index],
          count: modifiedArray[index].count - 1,
        };
      }
      setCartItems(modifiedArray);
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#2AB179",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Meal"
          options={{
            tabBarLabel: "Meals",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="fast-food" size={size} color={color} />
            ),
          }}
        >
          {() => <MealView meals={meals} addToCart={addToCart} />}
        </Tab.Screen>
        <Tab.Screen
          name="Category"
          options={{
            tabBarLabel: "Categories",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        >
          {() => <CategoryView meals={meals} categories={categories} />}
        </Tab.Screen>
        <Tab.Screen
          name="Cart"
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart" size={size} color={color} />
            ),
          }}
        >
          {() => (
            <CartView
              cartItems={cartItems}
              removeCartItem={removeCartItem}
              addToCart={addToCart}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
