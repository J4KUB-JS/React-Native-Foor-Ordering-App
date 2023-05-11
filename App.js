//Libraries
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//Redux
import { store } from "./redux/store";
import { Provider } from "react-redux";

//Internal Components
import MainView from "./views/MainView";
import { MyTheme } from "./theme/theme";

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
