import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  filterMenuByName,
  filterMenuByCategory,
  setSearchText,
} from "../redux/mainSlice";

//Internal Components
import MenuView from "./MenuView";
import CartView from "./CartView";
import CategoryView from "./CategoryView";

const Tab = createBottomTabNavigator();

function MainView() {
  const cartItemsCount = useSelector((state) => state.main.cartItemsCount);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#2AB179",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: { backgroundColor: "#000" },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Meal") {
            iconName = "fast-food";
          } else if (route.name === "Categories") {
            iconName = "list";
          } else if (route.name === "Cart") {
            iconName = "cart";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        animationEnabled: true, // enable animation
        animationTypeForReplace: "slide-in-right", // set the animation type
      }}
    >
      <Tab.Screen name="Meal" component={MenuView} />
      <Tab.Screen name="Categories" component={CategoryView} />
      <Tab.Screen name="Cart" component={CartView} />
    </Tab.Navigator>
  );
}

export default MainView;
