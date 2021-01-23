import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { VerticalCard } from "~/components";
import { getDiscover } from "~/modules";

function DiscoveryScreen() {
  const [discovers, setDiscovers] = useState(null);

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
        <ScrollView horizontal={true} style={styles.cardList}>
          {discovers.map((discover, index) => (
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
          ))}
        </ScrollView>
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
