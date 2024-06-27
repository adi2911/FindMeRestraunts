import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import RestrauntsDetails from "./RestrauntsDetails";

const RestrauntsList = (props) => {
  const { title, restrauntsList, navigation } = props;
  if (!restrauntsList.length) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal //listing item horizontally
        showsHorizontalScrollIndicator={false} //hides scroll bar
        data={restrauntsList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ShowBusiness", {
                  id: item.id,
                })
              }
            >
              <RestrauntsDetails details={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 3,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(RestrauntsList); // to get navigation props, without passing it from parent
