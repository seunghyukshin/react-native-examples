import React from "react";
import { Text, View, StyleSheet, TextInput, ScrollView } from "react-native";

import { VerticalCard } from "~/components";
export default function ({
  movies,
  tvs,
  navigation,
  keyword,
  handleSubmit,
  handleChange,
}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Write a keyword"
          value={keyword}
          onChangeText={(text) => handleChange(text)}
          onSubmitEditing={handleSubmit}
        />
      </View>
      {movies ? (
        <View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}> Movie Results</Text>
          </View>
          <ScrollView horizontal={true} style={styles.cardList}>
            {movies.map((movie, index) => (
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
      ) : (
        <></>
      )}
      {tvs ? (
        <View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}> TV Results</Text>
          </View>
          <ScrollView horizontal={true} style={styles.cardList}>
            {tvs.map((tv, index) => (
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
      ) : (
        <></>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  inputContainer: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  textInput: {
    width: 300,
    height: 50,
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 10,
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
