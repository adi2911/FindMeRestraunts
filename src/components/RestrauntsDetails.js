import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const RestrauntsDetails = ({ details }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: details.image_url }} />
      <Text style={styles.nameStyle}>{details.name}</Text>
      <Text>
        {details.rating} Stars, {details.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  imageStyle: {
    width: 250,
    borderRadius: 4,
    height: 250,
    marginBottom: 4,
  },
  nameStyle: {
    fontWeight: "bold",
  },
});

export default RestrauntsDetails;
