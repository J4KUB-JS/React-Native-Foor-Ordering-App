import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES, MENU } from "../data/data";

const initialState = {
  cart: [],
  cartItemsCount: 0,
  menu: MENU,
  filteredMenu: MENU,
  categories: CATEGORIES,
  searchText: "",
};

export const cartSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
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
    removeItemFromCart: (state, action) => {
      state.cartItemsCount - 1;
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
    filterMenuByName: (state, action) => {
      state.filteredMenu = state.menu.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterMenuByCategory: (state, action) => {
      if (action.payload !== null) {
        state.filteredMenu = state.menu.filter((item) =>
          item.category.id
            .toLowerCase()
            .includes(action.payload.id.toLowerCase())
        );
      } else {
        state.filteredMenu = state.menu;
      }
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  filterMenuByName,
  filterMenuByCategory,
  setSearchText,
} = cartSlice.actions;

export default cartSlice.reducer;
