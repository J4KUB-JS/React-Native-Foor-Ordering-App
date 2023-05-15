import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, MainState, MenuItem } from "../types/types";

const initialState: MainState = {
  cart: [],
  cartItemsCount: 0,
  menu: [],
  filteredMenu: [],
  categories: [],
  searchText: "",
  selectedCategory: "",
};

export const cartSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<MenuItem[]>) => {
      state.menu = action.payload;
      state.filteredMenu = action.payload;
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    addItemToCart: (state, action: PayloadAction<MenuItem>) => {
      state.cartItemsCount++;
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cart[index].count++;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.cartItemsCount--;
      const index = state.cart.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        const item = state.cart[index];
        if (item.count === 1) {
          state.cart.splice(index, 1);
        } else {
          state.cart[index] = { ...item, count: item.count - 1 };
        }
      }
    },
    filterMenuByName: (state, action: PayloadAction<string>) => {
      state.filteredMenu = state.menu.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterMenuByCategory: (state, action: PayloadAction<string>) => {
      if (state.selectedCategory !== "") {
        state.filteredMenu = state.menu.filter(
          (item) => item.category.id.toLowerCase() === action.payload
        );
      } else {
        state.filteredMenu = state.menu;
      }
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {
  setMenu,
  setCategories,
  addItemToCart,
  removeItemFromCart,
  filterMenuByName,
  filterMenuByCategory,
  setSearchText,
  setSelectedCategory,
} = cartSlice.actions;

export default cartSlice.reducer;
