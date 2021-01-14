import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

import { VerticalCard, HorizontalCard, AutoSlideCard } from "~/components";
import { getPopularMovies, getUpcomingMovies } from "~/modules";

function MovieScreen({ navigation }) {
  const [popularMovies, setPopularMovies] = useState(null);
  const [upcomingMovies, setUpcomingMovies] = useState(null);

  const saveMovieDatas = async () => {
    const popularData = await getPopularMovies();
    setPopularMovies(popularData);

    const upcomingData = await getUpcomingMovies();
    setUpcomingMovies(upcomingData);
  };

  useEffect(() => {
    console.log("======= MovieScreen.js - useEffect()=======");
    popularMovies && upcomingMovies ? " " : saveMovieDatas();
  });

  return popularMovies && upcomingMovies ? (
    <ScrollView style={styles.container}>
      {console.log("======= MovieScreen.js - reder()=======")}

      {popularMovies ? (
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
      ) : (
        console.log(popularMovies)
      )}

      <View style={styles.section}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}> Popluar Movies</Text>
        </View>
        <ScrollView horizontal={true} style={styles.cardList}>
          {popularMovies
            ? popularMovies.map((movie, index) => (
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
              ))
            : ""}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}> Coming Soon </Text>
        </View>
        <ScrollView style={styles.cardList}>
          {upcomingMovies
            ? upcomingMovies.map((movie, index) => (
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
              ))
            : ""}
        </ScrollView>
      </View>
    </ScrollView>
  ) : (
    <View>
      <Text> fu ck u</Text>
    </View>
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

export default MovieScreen;
