import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtdq44e2impvwyz5xZrCZY3HTX-2dFkTU",
  authDomain: "food-ordering-app-1becb.firebaseapp.com",
  projectId: "food-ordering-app-1becb",
  storageBucket: "food-ordering-app-1becb.appspot.com",
  messagingSenderId: "400687386536",
  appId: "1:400687386536:web:55d84def6a74b697de579d",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore();

export const colRefMenu = collection(database, "menu");
export const colRefCategories = collection(database, "categories");

export const menuQuery = query(colRefMenu, orderBy("createdAt", "desc"));
export const categoriesQuery = query(colRefCategories, orderBy("createdAt", "desc"));
