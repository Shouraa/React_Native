import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsLists from "../components/ResultsList";

import axios from "axios";
import ResultsList from "../components/ResultsList";

const FrontPage = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  // const filterByYear = (year) => {
  //   return results.filter((result) => {
  //     return parseInt(result.Year) > 2012;
  //   });
  // };

  const url = "http://www.omdbapi.com/?i=tt3896198&apikey=bece7c38";

  const searchApi = async () => {
    const response = await axios.get(url + "&s=" + input);
    console.log(response);

    setResults(response.data.Search);
  };

  return (
    <View>
      <SearchBar
        input={input}
        onInputChange={setInput}
        onInputSubmit={searchApi}
      />

      <Text>You have fethched {results.length} results</Text>
      <ResultsList results={results} title="New" />
      {/* <ResultsList results={filterByYear(2005)} title="Classic" /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default FrontPage;
