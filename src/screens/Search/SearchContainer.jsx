import React, { useState } from "react";

import { getSearchMovies, getSearchTvs } from "~/modules";
import SearchPresenter from "./SearchPresenter";

export default function ({ navigation }) {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState(null);
  const [tvs, setTvs] = useState(null);

  const handleChange = (input) => {
    setKeyword(input);
  };

  const handleSubmit = async () => {
    const movieDatas = await getSearchMovies(keyword);
    const tvDatas = await getSearchTvs(keyword);

    if (movieDatas.length != 0) setMovies(movieDatas);
    else setMovies(null);

    if (tvDatas.length != 0) setTvs(tvDatas);
    else setTvs(null);
  };

  return (
    <SearchPresenter
      movies={movies}
      tvs={tvs}
      navigation={navigation}
      keyword={keyword}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
}
