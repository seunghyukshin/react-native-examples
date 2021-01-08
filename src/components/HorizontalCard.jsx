import React from "react";

import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

function HorizontalCard({ movieInfo, onPress }) {
  const { imgUrl, title, date, story } = movieInfo;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: imgUrl }} style={styles.image}></Image>
      <View style={styles.textView}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.text}> {date} </Text>
        <Text style={[styles.text, styles.story]} numberOfLines={3}>
          {" "}
          {story}{" "}
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
