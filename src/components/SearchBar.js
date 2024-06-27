import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchBar = (props) => {
  const { searchTerm, onTermChange, onTermSubmit } = props;
  return (
    <View style={styles.searchBarStyle}>
      <Feather style={styles.iconStyle} name="search" />
      <TextInput
        style={styles.searchTextInput}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={searchTerm}
        onChangeText={(newSearchText) => onTermChange(newSearchText)}
        onEndEditing={(searchEvent) =>
          onTermSubmit(searchEvent.nativeEvent.text)
        } //Only once typing is done search should start
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarStyle: {
    margin: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
  },
  searchTextInput: {
    flex: 1,
    alignSelf: "center",
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
