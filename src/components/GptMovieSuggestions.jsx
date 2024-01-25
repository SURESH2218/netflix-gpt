import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 mt-3 text-white relative z-20 bg-black bg-opacity-70">
      <div>
        {movieNames.map((moviename, index) => (
          <MovieList
            key={moviename}
            title={moviename}
            movies={movieResults[index]}
          />
        ))}
        
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
