import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";

import { MovieDetail, TvDetail, Loading } from "~/components";
import {
  getMovieDetail,
  getTvDetail,
  getMovieVideo,
  getTvVideo,
} from "~/modules";
import { IMAGE_URI } from "~/modules";

export default function ({ route }) {
  const [detail, setDetail] = useState(null);
  const [video, setVideo] = useState(null);

  const { from } = route.params;
  const {
    id,
    poster_path,
    backdrop_path,
    original_title,
    name,
    vote_average,
  } = route.params.info;

  const saveData = async () => {
    let detailData = null;
    let videoData = null;
    if (from === "movie") {
      detailData = await getMovieDetail(id);
      videoData = await getMovieVideo(id);
    } else if (from === "tv") {
      detailData = await getTvDetail(id);
      videoData = await getTvVideo(id);
    }
    setDetail(detailData);
    setVideo(videoData);
  };

  useEffect(() => {
    detail && video ? "" : saveData();
    console.log(detail);
  });
  const title = original_title ? original_title : name;
  return detail && video ? (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{ uri: IMAGE_URI + backdrop_path }}
        style={styles.bgImage}
      ></ImageBackground>

      <View style={styles.topContainer}>
        <Image
          source={{ uri: IMAGE_URI + poster_path }}
          style={styles.image}
        ></Image>
        <View style={styles.rightView}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>⭐ {vote_average} / 10</Text>
        </View>
      </View>

      {from === "movie" ? (
        <MovieDetail info={detail} video={video} />
      ) : (
        <TvDetail info={detail} video={video} />
      )}
    </ScrollView>
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  topContainer: {
    flexDirection: "row",
    paddingTop: 80,
    paddingLeft: 20,
  },
  rightView: {
    marginLeft: 40,
    // alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: "white",
  },
  image: {
    width: 100,
    height: 170,
    borderRadius: 5,
  },
  bgImage: {
    width: "100%",
    height: 220,
    position: "absolute",
    opacity: 0.5,
  },
  halfContainer: {
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 30,
  },
  contentTitle: {
    marginTop: 20,
    color: "#dcdcdc",
    fontSize: 15,
    marginBottom: 5,
  },
  text: {
    color: "#dcdcdc",
    fontSize: 13,
  },
});
