import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

import { VerticalCard, HorizontalCard, AutoSlideCard } from "~/components";

export default function ({ popularMovies, upcomingMovies, navigation }) {
  return (
    <ScrollView style={styles.container}>
      {console.log("======= MovieScreen.js - reder()=======")}

      <Swiper
        showsPagination={false}
        autoplay={true}
        // style={{ flex: 1 }}
        autoplayTimeout={3}
        style={styles.swiper}
      >
        {popularMovies.map((movie, index) => (
          <AutoSlideCard
            movieInfo={movie}
            onPress={() =>
              navigation.navigate("Detail", {
                info: movie,
                from: "movie",
              })
            }
            key={index}
          />
        ))}
      </Swiper>

      <View style={styles.section}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}> Popluar Movies</Text>
        </View>
        <ScrollView horizontal={true} style={styles.cardList}>
          {popularMovies.map((movie, index) => (
            <VerticalCard
              movieInfo={movie}
              onPress={() =>
                navigation.navigate("Detail", {
                  info: movie,
                  from: "movie",
                })
              }
              key={index}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}> Coming Soon </Text>
        </View>
        <ScrollView style={styles.cardList}>
          {upcomingMovies.map((movie, index) => (
            <HorizontalCard
              movieInfo={movie}
              onPress={() =>
                navigation.navigate("Detail", {
                  info: movie,
                  from: "movie",
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
  swiper: {
    height: 220,
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
});
