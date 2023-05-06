export const CATEGORIES = [
  { id: "c1", title: "Italian", color: "#f5428d" },
  { id: "c2", title: "Asian", color: "#f5a442" },
  { id: "c3", title: "American", color: "#f5d142" },
  { id: "c4", title: "Mexican", color: "#368dff" },
  { id: "c5", title: "Vegetarian", color: "#41d95d" },
];

export const MEALS = [
  {
    id: "m1",
    name: "Margherita Pizza",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Salt and pepper to taste",
    ],
    price: 10.99,
    category: CATEGORIES[0],
  },
  {
    id: "m2",
    name: "Pad Thai",
    ingredients: [
      "Rice noodles",
      "Shrimp",
      "Eggs",
      "Bean sprouts",
      "Green onions",
      "Chopped peanuts",
      "Lime wedges",
      "Soy sauce",
      "Fish sauce",
      "Brown sugar",
      "Garlic",
      "Tamarind concentrate",
    ],
    price: 13.99,
    category: CATEGORIES[1],
  },
  {
    id: "m3",
    name: "Cheese Quesadilla",
    ingredients: [
      "Flour tortillas",
      "Shredded cheddar cheese",
      "Sour cream",
      "Salsa",
      "Guacamole",
    ],
    price: 8.99,
    category: CATEGORIES[3],
  },
  {
    id: "m4",
    name: "Chicken Caesar Salad",
    ingredients: [
      "Romaine lettuce",
      "Grilled chicken",
      "Parmesan cheese",
      "Croutons",
      "Caesar dressing",
    ],
    price: 9.99,
    category: CATEGORIES[2],
  },
  {
    id: "m5",
    name: "Chicken Alfredo",
    ingredients: [
      "Fettuccine pasta",
      "Chicken breasts",
      "Heavy cream",
      "Parmesan cheese",
      "Garlic",
      "Butter",
      "Salt and pepper to taste",
    ],
    price: 14.99,
    category: CATEGORIES[0],
  },
  {
    id: "m6",
    name: "Vegetarian burger",
    ingredients: [
      "Vegetable patty",
      "Whole wheat bun",
      "Lettuce",
      "Tomato",
      "Onion",
      "Pickles",
      "Ketchup",
      "Mustard",
    ],
    price: 10.99,
    category: CATEGORIES[4],
  },
];
