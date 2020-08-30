import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.Poster }} />
      <Text style={styles.title}>{result.Title}</Text>
      <Text style={styles.caption}>
        {result.Type} - {result.Year}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },

  image: {
    width: 250,
    height: 200,
    borderRadius: 4,
    marginBottom: 8,
  },

  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#9d8de9",
    marginBottom: 8,
  },

  caption: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#9d8de9",
  },
});

export default ResultsDetail;
