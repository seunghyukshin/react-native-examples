import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TvDetail = ({ info }) => {
  const {
    overview,
    spoken_languages,
    status,
    first_air_date,
    genres,
    number_of_seasons,
    number_of_episodes,
  } = info;
  //   const { name } = spoken_language[0];

  return (
    <View style={styles.halfContainer}>
      <Text style={styles.contentTitle}> Overview </Text>
      <Text style={styles.text}> {overview} </Text>
      <Text style={styles.contentTitle}> Language </Text>
      <Text style={styles.text}>
        {spoken_languages.map((s, i) => {
          let text = s.name;
          if (i != spoken_languages.length - 1) text += ", ";
          return text;
        })}
      </Text>
      <Text style={styles.contentTitle}> Status </Text>
      <Text style={styles.text}> {status} </Text>
      <Text style={styles.contentTitle}> First Air Date </Text>
      <Text style={styles.text}> {first_air_date} </Text>
      <Text style={styles.contentTitle}> Genres </Text>
      <Text style={styles.text}>
        {/* {genres
          .filter((g, i) => i != genres.length - 1)
          .map((g) => g.name + ",")} */}
        {genres.map((genre, i) => {
          let text = genre.name;
          if (i != genres.length - 1) text += ", ";
          return text;
        })}
      </Text>
      <Text style={styles.contentTitle}> Seasons / Episodes </Text>
      <Text style={styles.text}>
        {" "}
        {number_of_seasons} / {number_of_episodes}{" "}
      </Text>
      <Text style={styles.contentTitle}> Videos </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default TvDetail;
