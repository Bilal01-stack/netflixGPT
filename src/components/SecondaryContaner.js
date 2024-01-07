import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export default function SecondaryContaner() {
  const movies = useSelector((store) => store.movies);
  //console.log(movies);
  return (
    <div className=" bg-black">
      <div className="mt-0 md:-mt-66 md:pl-7 relative z-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Trending"} movies={movies.nowTrendingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRateddMovies} />
        <MovieList title={"Upcomming"} movies={movies.upComingMovies} />
      </div>
    </div>
  );
}
