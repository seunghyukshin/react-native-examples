import React from "react";

import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

function VerticalCard({ movieInfo, onPress }) {
  const { imgUrl, title, rate } = movieInfo;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{
            uri: imgUrl,
            width: 100,
            height: 100,
          }}
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.rate}> ☆ {rate} / 10 </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  image: {
    flex: 5,
  },
  title: {
    flex: 1,
  },
  rate: {
    flex: 1,
  },
});
export default VerticalCard;
