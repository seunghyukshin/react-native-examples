import React from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";

import { VerticalCard, HorizontalCard } from "~/components";

const movieList = [
  {
    imgUrl:
      "https://cphoto.asiae.co.kr/listimglink/6/2010121717211687643_1.jpg",
    title: "Yellow Sea",
    rate: 5,
    story:
      "hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! ",
  },
  {
    imgUrl:
      "https://cphoto.asiae.co.kr/listimglink/6/2010121717211687643_1.jpg",
    title: "Honest Thief",
    rate: 5,
  },
  {
    imgUrl:
      "https://cphoto.asiae.co.kr/listimglink/6/2010121717211687643_1.jpg",
    title: "Soul",
    rate: 5,
  },
  {
    imgUrl:
      "https://cphoto.asiae.co.kr/listimglink/6/2010121717211687643_1.jpg",
    title: "We Can Be Heros Real kkkkkkkkkkk",
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

function TvScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} auto>
      <View style={styles.section}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}> Popluar Shows</Text>
        </View>
        <ScrollView horizontal={true} style={styles.cardList}>
          {movieList.map((movie, index) => (
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
              key={index}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}> Top Rated </Text>
        </View>
        <ScrollView horizontal={true} style={styles.cardList}>
          {movieList.map((movie, index) => (
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
              key={index}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}> Airing Today </Text>
        </View>
        <ScrollView style={styles.cardList}>
          {movieList.map((movie, index) => (
            <HorizontalCard
              movieInfo={{
                imgUrl: movie.imgUrl,
                title: movie.title,
                date: movie.date,
                story: movie.story,
              }}
              onPress={() =>
                navigation.navigate("Detail", {
                  title: movie.title,
                  count: 1,
                })
              }
              key={index}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },

  container: {
    backgroundColor: "black",
  },
  subTitleContainer: { marginLeft: 30, marginTop: 40, marginBottom: 10 },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  cardList: {
    paddingLeft: 20,
  },

  halfContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});

export default TvScreen;
