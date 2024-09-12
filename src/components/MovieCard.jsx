// MovieCard.js
import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  // Log the posterPath to check the value passed

  // Check if posterPath exists before rendering the image
  if (!posterPath) return null;

  return (
    <div className="w-48 max-h-full mx-auto pr-4">
      <img src={`${IMG_CDN_URL}${posterPath}`} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
