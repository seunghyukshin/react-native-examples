import React, { useState, useEffect } from "react";
import { Loading } from "~/components";

import { getPopularTv, getTopRatedTv, getAiringTv } from "~/modules";
import TvPresenter from "./TvPresenter";
export default function ({ navigation }) {
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
    <TvPresenter
      popularTvs={popularTvs}
      topRatedTvs={topRatedTvs}
      airingTvs={airingTvs}
      navigation={navigation}
    />
  ) : (
    <Loading />
  );
}
