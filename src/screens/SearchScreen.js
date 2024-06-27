import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useYelpSearch from "../customHooks/useYelpSearch";

const SearchScreen = () => {
  const [term, setTerm] = useState("food");
  const [restraunts, error, searchRestraunts] = useYelpSearch();

  return (
    <View>
      <SearchBar
        searchTerm={term == "food" ? "" : term}
        onTermChange={setTerm}
        onTermSubmit={searchRestraunts}
      />
      {!!error ? <Text style={styles.errorText}>{error}</Text> : <></>}
      <Text>{restraunts.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: "red",
  },
});
export default SearchScreen;
