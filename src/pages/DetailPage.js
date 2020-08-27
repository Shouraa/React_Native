import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import axios from "axios";

const DetailPage = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");

  const url = "http://www.omdbapi.com/?i=";
  const apiKey = "&apikey=bece7c38";

  const getDetail = async (id) => {
    const response = await axios.get(url + id + apiKey);

    setResult(response.data);
  };

  useEffect(() => {
    getDetail(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.Title}</Text>
      <Image style={styles.image} source={{ uri: result.Poster }} />
      <Text style={styles.caption}>{result.Genre}</Text>
      <Text style={styles.caption}>Director: {result.Director}</Text>
      <Text style={styles.caption}>Actors: {result.Actors}</Text>
      <Text style={styles.caption}>Plot Summary: {result.Plot}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
  },
  image: {
    width: 300,
    height: 470,
    borderRadius: 4,
    marginBottom: 8,
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    marginTop: 12,
    marginBottom: 14,
  },
  caption: {
    color: "#9d8de9",
    fontSize: 16,
    marginBottom: 4,
  },
});

export default DetailPage;
