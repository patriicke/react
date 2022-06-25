import React, { useEffect, useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
function MovieList() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="w-[100%] h-[50vh] flex flex-col items-center gap-2 text-[2em]">
      {movies.map((movie, index) => {
        return <Movie name={movie.name} price={movie.price} key={movie.id} />;
      })}
    </div>
  );
}

export default MovieList;
