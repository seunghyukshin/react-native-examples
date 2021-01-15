import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TvDetail = ({ info, video }) => {
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
      {video.length !== 0 ? (
        <Text style={styles.contentTitle}> Videos </Text>
      ) : (
        <></>
      )}
      {video.map((v, i) => (
        <View style={styles.videoRightView} key={i}>
          <MaterialCommunityIcons
            name="youtube"
            color="white"
            size={28}
            style={{ marginRight: 10 }}
          />
          <Text
            style={styles.text}
            onPress={() => Linking.openURL(`http://youtube.com/list?${v.id}`)}
          >
            {v.name}
          </Text>
        </View>
      ))}
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
  videoRightView: { flexDirection: "row", alignItems: "center" },
});

export default TvDetail;
