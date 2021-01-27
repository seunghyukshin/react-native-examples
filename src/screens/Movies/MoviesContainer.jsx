import React, { useState, useEffect } from "react";
import { Loading } from "~/components";

import MoviesPresenter from "./MoviesPresenter";
import { getPopularMovies, getUpcomingMovies } from "~/modules";

export default function ({ navigation }) {
  const [popularMovies, setPopularMovies] = useState(null);
  const [upcomingMovies, setUpcomingMovies] = useState(null);

  const saveMovieDatas = async () => {
    const popularData = await getPopularMovies();
    setPopularMovies(popularData);

    const upcomingData = await getUpcomingMovies();
    setUpcomingMovies(upcomingData);
  };

  useEffect(() => {
    console.log("======= MovieScreen.js - useEffect()=======");
    popularMovies && upcomingMovies ? " " : saveMovieDatas();
  });

  return popularMovies && upcomingMovies ? (
    <MoviesPresenter
      popularMovies={popularMovies}
      upcomingMovies={upcomingMovies}
      navigation={navigation}
    />
  ) : (
    <Loading />
  );
}
