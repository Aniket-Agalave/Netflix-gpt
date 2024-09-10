import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;

  const mainMovie = movies[0];
  //(mainMovie);
  const { original_title, overview, id } = mainMovie;

  return (
    <div className=" overflow-x-scroll no-scrollbar  overflow-y-scroll hide-scrollbar no-scrollbar">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
