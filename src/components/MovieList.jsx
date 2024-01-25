import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="pl-12  text-white">
      <div>
        <h1 className="text-4xl font-bold py-3">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-5 ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
