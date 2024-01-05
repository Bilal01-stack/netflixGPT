import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ title, movies }) {
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 font-semibold text-white">{title}</h1> 
      <div className="flex overflow-x-scroll">
       
        <div className="flex">
          {movies && Array.isArray(movies) && movies.length > 0 ? (
            movies.map((movie) => (
                <MovieCard posterPath={movie} key={movie.id} />
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
}
