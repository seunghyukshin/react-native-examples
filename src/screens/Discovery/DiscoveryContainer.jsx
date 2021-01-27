import React, { useState, useEffect, useRef } from "react";
import { Animated, PanResponder } from "react-native";

import { getDiscover } from "~/modules";
import DiscoveryPresenter from "./DiscoveryPresenter";

export default function () {
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
    <DiscoveryPresenter
      discovers={discovers}
      panResponder={panResponder}
      pan={pan}
    />
  );
}
