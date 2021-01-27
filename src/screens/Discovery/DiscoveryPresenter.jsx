import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

import { VerticalCard } from "~/components";

export default function ({ discovers, panResponder, pan }) {
  return (
    <View style={styles.container}>
      {discovers ? (
        <View>
          {discovers.map((discover, index) => (
            <Animated.View
              style={{
                transform: [{ translateX: pan.x }, { translateY: pan.y }],
              }}
              {...panResponder.panHandlers}
            >
              <VerticalCard
                movieInfo={discover}
                onPress={() =>
                  navigation.navigate("Detail", {
                    info: discover,
                    from: "movie",
                  })
                }
                key={index}
              />
            </Animated.View>
          ))}
        </View>
      ) : (
        <></>
      )}
      <View style={styles.halfContainer}>
        <Text style={styles.text}> Discovery</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
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
