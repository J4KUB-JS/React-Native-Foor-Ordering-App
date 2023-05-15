//Libraries
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { getDocs } from "firebase/firestore";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setMenu, setCategories } from "../redux/mainSlice";

//Internal Components
import MenuView from "./MenuView";
import CartView from "./CartView";
import CategoryView from "./CategoryView";
import { RootState } from "../redux/store";
import { colRefCategories, colRefMenu } from "../config/firebase";
import { Category, MenuItem } from "../types/types";

const Tab = createBottomTabNavigator();

function MainView() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const cartItemsCount = useSelector((state: RootState) => state.main.cartItemsCount);

  useEffect(() => {
    getDocs(colRefMenu).then((snapshot) => {
      let menu: MenuItem[] = [];
      snapshot.docs.forEach((doc) => {
        const response = doc.data() as MenuItem;
        menu.push({
          id: response.id,
          name: response.name,
          ingredients: response.ingredients,
          price: response.price,
          category: response.category,
          icon: response.icon,
        });
      });
      dispatch(setMenu(menu));
    });

    getDocs(colRefCategories).then((snapshot) => {
      let category: Category[] = [];
      snapshot.docs.forEach((doc) => {
        const response = doc.data() as Category;
        category.push({
          id: response.id,
          title: response.title,
        });
      });
      dispatch(setCategories(category));
    });
  }, []);

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
