import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MovieDetail = (props) => {
  return (
    <View style={styles.halfContainer}>
      <Text style={styles.contentTitle}> Overview </Text>
      <Text style={styles.text}> {props.overview} </Text>
      <Text style={styles.contentTitle}> Language </Text>
      <Text style={styles.text}> {from} </Text>
      <Text style={styles.contentTitle}> Status </Text>
      <Text style={styles.text}> {from} </Text>
      <Text style={styles.contentTitle}> First Air Date </Text>
      <Text style={styles.text}> {from} </Text>
      <Text style={styles.contentTitle}> Genres </Text>
      <Text style={styles.text}> {from} </Text>
      <Text style={styles.contentTitle}> Seasons / Episodes </Text>
      <Text style={styles.text}> {from} </Text>
      <Text style={styles.contentTitle}> Videos </Text>
      <Text style={styles.text}> {from} </Text>
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

export default MovieDetail;
