import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.Poster }} />
      <Text style={styles.title}>{result.Title}</Text>
      <Text style={styles.title}>{result.Type}</Text>
      <Text style={styles.title}>{result.Year}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },

  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 8,
  },

  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ResultsDetail;
