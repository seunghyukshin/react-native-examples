import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, Animated } from "react-native";

import image from "../../assets/popcorn.jpg";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "black",
  },
});

export default Loading;
