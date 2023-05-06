import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

const MealSearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={handleSearchTextChange}
        placeholder="Search by meal or category"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 16,
    width: "100%",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
  },
});

export default MealSearchBar;
