import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies?.nowPlayingMovies && (
      <div className=" bg-black no-scrollbar">
        <div className="md:-mt-64 z-20 relative no-scrollbar">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRated} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Upcoming Moives"} movies={movies?.upcoming} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
