//Libraries
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

//Redux
import { store } from "./redux/store";
import { Provider } from "react-redux";

//Internal Components
import MainView from "./views/MainView";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff", // set the background color of the app
  },
};

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <MainView />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
