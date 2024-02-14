// MovieDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieDetails = () => {
  const { id } = useParams();

  // You might fetch movie details based on the 'id' parameter here

  return (
    <div>
      <h1>Movie Details for ID: {id}</h1>
      <img alt="dfgf" src={IMG_CDN_URL + `/posterPathForMovie${id}.jpg`} />
      <p>Release Date: </p>
      <p>Overview: </p>
    </div>
  );
};

export default MovieDetails;
