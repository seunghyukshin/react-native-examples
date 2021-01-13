import React from "react";

import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { IMAGE_URI } from "~/modules";
function VerticalCard({ movieInfo, onPress }) {
  const { poster_path, title, vote_average } = movieInfo;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: IMAGE_URI + poster_path,
        }}
        style={styles.image}
      ></Image>
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <Text style={styles.rate}> ⭐ {vote_average} / 10 </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 100,
    height: 170,
    borderRadius: 5,
    marginBottom: 10,
  },
  titleContainer: {
    width: 78,
    alignItems: "center",
  },
  title: {
    marginBottom: 5,
    color: "white",
  },
  rate: {
    fontSize: 12,
    color: "white",
  },
});
export default VerticalCard;
