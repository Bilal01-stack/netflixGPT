import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

export default function VideoBackGround({ movieId }) {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  const dispatch = useDispatch();
  //fetch the trailer Video
  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/848326/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer))
  };
  useEffect(() => {
    getMoviesVideos();
  }, []);
  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/fhr3MzT6exg?si=" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
