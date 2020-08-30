import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';

import axios from 'axios';
import ResultsList from '../components/ResultsList';

const FrontPage = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=bece7c38';

  const searchApi = async () => {
    const response = await axios.get(url + '&s=' + input);
    console.log(response);

    setResults(response.data.Search);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        input={input}
        onInputChange={setInput}
        onInputSubmit={searchApi}
      />

      <ScrollView>
        <ResultsList results={results} title='Trending' />
        <ResultsList results={results} title='Classics' />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
  },
});

export default FrontPage;
