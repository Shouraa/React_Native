import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ input, onInputChange, onInputSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={input}
        onChangeText={onInputChange}
        onEndEditing={onInputSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "white",
    marginTop: 12,
    marginBottom: 12,
    height: 48,
    borderRadius: 8,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
  },

  icon: {
    fontSize: 42,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
