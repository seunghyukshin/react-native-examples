import React, { useState, useEffect } from "react";

import { Loading } from "~/components";
import {
  getMovieDetail,
  getTvDetail,
  getMovieVideo,
  getTvVideo,
} from "~/modules";
import DetailPresenter from "./DetailPresenter";
export default function ({ route }) {
  const [detail, setDetail] = useState(null);
  const [video, setVideo] = useState(null);

  const { from } = route.params;
  const {
    id,
    poster_path,
    backdrop_path,
    original_title,
    name,
    vote_average,
  } = route.params.info;

  const saveData = async () => {
    let detailData = null;
    let videoData = null;
    if (from === "movie") {
      detailData = await getMovieDetail(id);
      videoData = await getMovieVideo(id);
    } else if (from === "tv") {
      detailData = await getTvDetail(id);
      videoData = await getTvVideo(id);
    }
    setDetail(detailData);
    setVideo(videoData);
  };

  useEffect(() => {
    detail && video ? "" : saveData();
  });
  const title = original_title ? original_title : name;

  return detail && video ? (
    <DetailPresenter
      detail={detail}
      video={video}
      poster_path={poster_path}
      backdrop_path={backdrop_path}
      vote_average={vote_average}
      title={title}
      from={from}
    />
  ) : (
    <Loading />
  );
}
