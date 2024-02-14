import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ id, posterPath }) => {
  // console.log(posterPath);
  if (!posterPath) return null;

  return (
    <Link to={`/movie/${id}`} className="w-32 md:w-48">
      <img alt="" src={IMG_CDN_URL + posterPath} />
      <h1 className="py-1">{id}</h1>
    </Link>
  );
};

export default MovieCard;
