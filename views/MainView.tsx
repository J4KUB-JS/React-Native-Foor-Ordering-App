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
import { useTheme } from "@react-navigation/native";
import { RootState } from "../redux/store";

const Tab = createBottomTabNavigator();

function MainView() {
  const { colors } = useTheme();
  const cartItemsCount = useSelector(
    (state: RootState) => state.main.cartItemsCount
  );
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.background,
        tabBarStyle: {
          backgroundColor: colors.text,
          borderRadius: 50,
          marginBottom: 20,
          paddingTop: 20,
          width: "95%",
          height: 90,
          alignSelf: "center",
          flexDirection: "row",
        },
        headerStyle: {
          backgroundColor: colors.background,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: "fast-food" | "list" | "cart" = "cart";
          if (route.name === "Menu") {
            iconName = "fast-food";
          } else if (route.name === "Categories") {
            iconName = "list";
          } else if (route.name === "Cart") {
            iconName = "cart";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Menu" component={MenuView} />
      <Tab.Screen name="Categories" component={CategoryView} />
      <Tab.Screen
        name="Cart"
        component={CartView}
        options={
          cartItemsCount !== 0
            ? {
                tabBarBadge: cartItemsCount,
                tabBarBadgeStyle: {
                  backgroundColor: colors.notification,
                  color: colors.background,
                  fontSize: 14,
                },
              }
            : {}
        }
      />
    </Tab.Navigator>
  );
}

export default MainView;
