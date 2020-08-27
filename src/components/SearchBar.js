import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ input, onInputChange }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={input}
        onChangeText={(newInput) => onInputChange(newInput)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "grey",
    marginTop: 12,
    height: 48,
    borderRadius: 8,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 22,
  },

  icon: {
    fontSize: 42,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
