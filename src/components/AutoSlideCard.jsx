import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

function AutoSlideCard({ movieInfo, onPress }) {
  const { imgUrl, title, rate, story } = movieInfo;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: imgUrl }}
        style={styles.bgImage}
      ></ImageBackground>

      <View style={styles.subContainer}>
        <Image source={{ uri: imgUrl }} style={styles.image}></Image>

        <View style={styles.rightView}>
          <Text style={styles.title}> {title} </Text>
          <Text style={styles.text}> ⭐ {rate} / 10 </Text>
          <Text style={[styles.text, styles.story]} numberOfLines={3}>
            {" "}
            {story}{" "}
          </Text>

          <View style={styles.buttonView}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
              <Text style={styles.buttonText}> View details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.5,
  },
  subContainer: {
    flexDirection: "row",

    padding: 20,
  },
  image: {
    width: 100,
    height: 170,
    borderRadius: 5,
  },
  rightView: {
    width: 200,
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
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
  buttonView: {
    alignItems: "flex-start",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#FF3333",
    borderRadius: 3,
  },
  buttonText: {
    color: "white",
  },
});

export default AutoSlideCard;
