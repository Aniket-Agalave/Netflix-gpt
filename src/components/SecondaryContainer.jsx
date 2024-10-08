import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  // const movies = useSelector((store) => store.movies);
  const movies = useSelector((store) => store.movies);
  if (movies === null) return;

  return (
    <div className="bg-black">
      <div className=" md:-mt-64 mt-0 pl-2 md:pl-10 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
