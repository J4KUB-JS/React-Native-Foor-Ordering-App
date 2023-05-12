import { DefaultTheme } from "@react-navigation/native";

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFF",
    primary: "#2AB179",
    card: "#FAFAFA",
    text: "#303030",
    border: "#8E8E8E",
    notification: "#E34C4C",
  },
};
