import React from "react";

import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { IMAGE_URI } from "~/modules";

function HorizontalCard({ movieInfo, onPress }) {
  const {
    poster_path,
    original_title,
    name,
    release_date,
    overview,
  } = movieInfo;

  const title = original_title ? original_title : name;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: IMAGE_URI + poster_path }}
        style={styles.image}
      ></Image>
      <View style={styles.textView}>
        <Text style={styles.title}> {title} </Text>
        {release_date ? (
          <Text style={styles.text}> {release_date} </Text>
        ) : (
          <></>
        )}
        <Text style={[styles.text, styles.story]} numberOfLines={3}>
          {" "}
          {overview}{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  image: {
    width: 100,
    height: 170,
    borderRadius: 5,
  },
  textView: {
    width: 200,
    marginLeft: 20,
  },
  title: {
    marginBottom: 10,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    marginBottom: 10,
    fontSize: 12,
    color: "#dcdcdc",
  },
  story: {
    fontSize: 13,
  },
});

export default HorizontalCard;
