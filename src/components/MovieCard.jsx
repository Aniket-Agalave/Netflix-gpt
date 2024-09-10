// MovieCard.js
import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  // Log the posterPath to check the value passed
  // console.log("Poster Path:", posterPath);

  // Check if posterPath exists before rendering the image
  if (!posterPath) return <p>Poster not available</p>;

  return (
    <div className="w-40 h-40 mx-auto pr-4">
      <img src={`${IMG_CDN_URL}${posterPath}`} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
