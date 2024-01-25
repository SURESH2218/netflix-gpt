import React, { useRef } from "react";
import lang from "../utils/langugageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const dispatch = useDispatch(null);

  const searchMovieTMDB = async (movie) => {
    // fetch('https://api.themoviedb.org/3/search/movie?query=lift&include_adult=false&language=en-US&page=1', options)
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchButton = async () => {
    // console.log(searchText.current.value);
    const getQuery =
      "Act as a Movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated liek the example result given ahead: Gadar,Sholay,Don,Raone,Lift";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: getQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      return (
        <div>
          <h1>Please Update the key..</h1>
        </div>
      );
    }
    // console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // console.log(gptMovies);

    //for each mvoie ii will search TMDB api
    const data = gptMovies.map((movie) => searchMovieTMDB(movie));
    const TMDBresults = await Promise.all(data);
    // console.log(TMDBresults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: TMDBresults })
    );
  };

  return (
    <div className="flex pt-[3%] justify-center">
      <div className="bg-black relative z-40 p p-6 flex  gap-2 rounded-lg">
        <input
          ref={searchText}
          type="text"
          className="py-2 px-4 rounded-lg"
          placeholder={lang[language].getSearchPlaceholder}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg "
          onClick={handleGptSearchButton}
        >
          {lang[language].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
