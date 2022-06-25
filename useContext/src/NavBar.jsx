import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
export default function () {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="w-[100%] h-[10vh] shadow-2xl flex justify-between items-center font-bold text-[1.4em] px-[10%]">
      <div>MovieSite</div>
      <div className="flex gap-4 text-[orange]">
        <div className="cursor-pointer">Action</div>
        <div className="cursor-pointer">Horror</div>
        <div className="cursor-pointer">Fantasy</div>
        <div className="cursor-pointer">Comedy</div>
        <div className="cursor-pointer">Drama</div>
        <div className="cursor-pointer">Romancy</div>
      </div>
      <div>Movie List: {movies.length} </div>
    </div>
  );
}
