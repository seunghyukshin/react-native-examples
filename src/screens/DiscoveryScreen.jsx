import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  PanResponder,
} from "react-native";

import { VerticalCard } from "~/components";
import { getDiscover } from "~/modules";

function DiscoveryScreen() {
  const pan = useRef(new Animated.ValueXY()).current;
  const [discovers, setDiscovers] = useState(null);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;

  const saveData = async () => {
    const data = await getDiscover();
    setDiscovers(data);
  };

  useEffect(() => {
    saveData();
  }, []);

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

export default DiscoveryScreen;
