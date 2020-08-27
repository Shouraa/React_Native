import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const FrontPage = () => {
  const [input, setInput] = useState("");

  return (
    <View>
      <SearchBar
        input={input}
        onInputChange={(newInput) => setInput(newInput)}
      />
      <Text>Front Psage</Text>
      <Text>{input}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FrontPage;
