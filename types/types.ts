export interface Category {
  id: string;
  title: string;
}

export interface MenuItem {
  id: string;
  name: string;
  ingredients: string[];
  price: number;
  category: Category;
  icon: any;
}

export interface CartItem extends MenuItem {
  count: number;
}

export interface MainState {
  cart: CartItem[];
  cartItemsCount: number;
  menu: MenuItem[];
  filteredMenu: MenuItem[];
  categories: Category[];
  searchText: string;
  selectedCategory: string;
}
