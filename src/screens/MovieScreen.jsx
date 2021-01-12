import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

import { VerticalCard, HorizontalCard, AutoSlideCard } from "~/components";
import { getPopularMovies } from "~/modules";

const movieList = [
  {
    imgUrl:
      "https://cphoto.asiae.co.kr/listimglink/6/2010121717211687643_1.jpg",
    title: "Yellow Sea",
    rate: 5,
    date: "01/20/21",
    story:
      "hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! hello !! ",
  },
  {
    imgUrl:
      "https://cphoto.asiae.co.kr/listimglink/6/2010121717211687643_1.jpg",
    title: "Honest Thief",
    rate: 5,
    date: "01/20/21",
  },
  {
    imgUrl:
      "https://cphoto.asiae.co.kr/listimglink/6/2010121717211687643_1.jpg",
    title: "Soul",
    rate: 5,
    date: "01/20/21",
  },
  {
    imgUrl:
      "https://cphoto.asiae.co.kr/listimglink/6/2010121717211687643_1.jpg",
    title: "We Can Be Heros Real kkkkkkkkkkk",
    rate: 5,
    date: "01/20/21",
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
  const [popularDatas, setPopularDatas] = useState(null);

  const saveMovieData = async () => {
    const result = await getPopularMovies();
    setPopularDatas(result);
    // getPopularMovies().then((res) => {
    //   setPopularDatas(res);
    // });
  };

  useEffect(() => {
    console.log("======= MovieScreen.js - useEffect()=======");
    console.log(popularDatas ? popularDatas[0] : " state null ");
    popularDatas ? " " : saveMovieData();
  });

  return (
    <ScrollView style={styles.container}>
      {console.log("======= MovieScreen.js - reder()=======")}
      {console.log(popularDatas ? popularDatas[0] : " kkk ")}

      {popularDatas ? (
        <Swiper
          showsPagination={false}
          autoplay={true}
          // style={{ flex: 1 }}
          autoplayTimeout={3}
          style={styles.swiper}
        >
          {popularDatas.map((data, index) => (
            <AutoSlideCard
              movieInfo={data}
              onPress={() =>
                navigation.navigate("Detail", {
                  title: "what",
                  count: 1,
                })
              }
              key={index}
            />
          ))}
        </Swiper>
      ) : (
        console.log(popularDatas)
      )}

      <View style={styles.section}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}> Popluar Movies</Text>
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
          <Text style={styles.subTitle}> Coming Soon </Text>
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
