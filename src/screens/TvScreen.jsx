import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { VerticalCard, HorizontalCard } from "~/components";
import { getPopularTv, getTopRatedTv, getAiringTv } from "~/modules";

function TvScreen({ navigation }) {
  const [popularTvs, setPopularTvs] = useState(null);
  const [topRatedTvs, setTopRatedTvs] = useState(null);
  const [airingTvs, setAiringTvs] = useState(null);

  const saveTvDatas = async () => {
    const popularData = await getPopularTv();
    setPopularTvs(popularData);

    const topRatedData = await getTopRatedTv();
    setTopRatedTvs(topRatedData);

    const airingData = await getAiringTv();
    setAiringTvs(airingData);
  };

  useEffect(() => {
    console.log("======= Tv Screen.js - useEffect()=======");
    popularTvs && topRatedTvs && airingTvs ? " " : saveTvDatas();
  });

  return popularTvs && topRatedTvs && airingTvs ? (
    <ScrollView style={styles.container} auto>
      <View style={styles.section}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}> Popluar Shows</Text>
        </View>
        <ScrollView horizontal={true} style={styles.cardList}>
          {popularTvs.map((tv, index) => (
            <VerticalCard
              movieInfo={tv}
              onPress={() =>
                navigation.navigate("Detail", {
                  info: tv,
                  from: "tv",
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
          {topRatedTvs.map((tv, index) => (
            <VerticalCard
              movieInfo={tv}
              onPress={() =>
                navigation.navigate("Detail", {
                  info: tv,
                  from: "tv",
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
          {airingTvs.map((tv, index) => (
            <HorizontalCard
              movieInfo={tv}
              onPress={() =>
                navigation.navigate("Detail", {
                  info: tv,
                  from: "tv",
                })
              }
              key={index}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  ) : (
    <View>
      <Text> fuck u</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
