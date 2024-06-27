import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import RestrauntsList from "../components/RestrauntsList";
import SearchBar from "../components/SearchBar";
import useYelpSearch from "../customHooks/useYelpSearch";

const SearchScreen = (props) => {
  const [term, setTerm] = useState("");
  const [restraunts, error, searchRestraunts] = useYelpSearch();

  const getRestrauntList = (price) => {
    return restraunts.filter((res) => res.price === price);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchTerm={term}
        onTermChange={setTerm}
        onTermSubmit={(search) => {
          searchRestraunts(search);
        }}
      />
      {!!error ? <Text style={styles.errorText}>{error}</Text> : <></>}
      <ScrollView>
        <RestrauntsList
          title="Cost Effective"
          restrauntsList={getRestrauntList("$")}
        />
        <RestrauntsList
          title="Bit Pricier"
          restrauntsList={getRestrauntList("$$")}
        />
        <RestrauntsList
          title="Big Spender"
          restrauntsList={getRestrauntList("$$$")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: "red",
  },
  container: { flex: 1 }, // Helps to fix the cut off content on the screen, it contains completely
});
export default SearchScreen;
