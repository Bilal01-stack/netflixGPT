import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

export default function MainVideoContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;

  const mainMovie = movies[0];
  console.log(mainMovie);

  const {original_title,overview,id } = mainMovie;
  return (
    <div>
      MainVideoContainer
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
}
