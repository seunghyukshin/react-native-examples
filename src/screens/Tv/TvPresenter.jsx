import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { VerticalCard, HorizontalCard } from "~/components";

export default function ({ popularTvs, topRatedTvs, airingTvs, navigation }) {
  return (
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
