// MovieList.js
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="py-2 px-2">
      <h1 className="text-lg text-white">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden no-scrollbar">
        <div className="flex mt-2">
          {movies && movies.length > 0 ? (
            movies.map((movie, index) => (
              <MovieCard key={index} posterPath={movie.poster_path} />
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
