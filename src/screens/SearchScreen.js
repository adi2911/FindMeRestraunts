import React, { useState } from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-screens";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View>
      <SearchBar
        searchTerm={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={(newText) => console.log(newText)}
      />
    </View>
  );
};

export default SearchScreen;
