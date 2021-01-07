import React from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";

import { VerticalCard } from "~/components";

const movieList = [
  {
    imgUrl:
      "https://cphoto.asiae.co.kr/listimglink/6/2010121717211687643_1.jpg",
    title: "Yellow Sea",
    rate: 5,
  },
  {
    imgUrl:
      "https://cphoto.asiae.co.kr/listimglink/6/2010121717211687643_1.jpg",
    title: "Yellow Sea",
    rate: 5,
  },
  {
    imgUrl:
      "https://cphoto.asiae.co.kr/listimglink/6/2010121717211687643_1.jpg",
    title: "Yellow Sea",
    rate: 5,
  },
  {
    imgUrl:
      "https://cphoto.asiae.co.kr/listimglink/6/2010121717211687643_1.jpg",
    title: "Yellow Sea",
    rate: 5,
  },
  {
    imgUrl:
      "https://cphoto.asiae.co.kr/listimglink/6/2010121717211687643_1.jpg",
    title: "Yellow Sea",
    rate: 5,
  },
  {
    imgUrl: "https://reactnative.dev/img/tiny_logo.png",
    title: "React Native",
    rate: 10,
  },
];

function MovieScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.halfContainer}>
          <ScrollView horizontal={true}>
            {movieList.map((movie, i) => (
              <VerticalCard
                movieInfo={{
                  imgUrl: movie.imgUrl,
                  title: movie.title,
                  rate: movie.rate,
                }}
                onPress={() =>
                  navigation.navigate("Detail", {
                    title: movie.title,
                    count: 1,
                  })
                }
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "black",
  },
  halfContainer: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "white",
  },
  text: {
    color: "red",
  },
});
export default MovieScreen;
