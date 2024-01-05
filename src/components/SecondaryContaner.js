import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export default function SecondaryContaner() {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    <div className=" bg-black">
      <div className="-mt-66 pl-7 relative z-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcomming"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
}
