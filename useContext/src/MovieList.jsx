import React, { useState } from "react";
import Movie from "./Movie";

function MovieList() {
  const [movies, setMovies] = useState([
    {
      name: "Harry Porter",
      price: "$100",
      id: 12345
    },
    {
      name: "Game of Thrones",
      price: "$50",
      id: 1243
    },
    {
      name: "Inception",
      price: "$140",
      id: 1234
    }
  ]);

  return (
    <div className="w-[100%] h-[50vh] flex flex-col items-center gap-2 text-[2em]">
      {movies.map((movie, index) => {
        return <Movie name={movie.name} price={movie.price} key={movie.id} />;
      })}
    </div>
  );
}

export default MovieList;
