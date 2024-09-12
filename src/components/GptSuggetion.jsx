import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggetion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black bg-opacity-85 text-white rounded-md w-[95%] md:w-[98%]">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSuggetion;
