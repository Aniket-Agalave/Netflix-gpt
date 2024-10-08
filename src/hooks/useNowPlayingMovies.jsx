import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const NowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=${
        import.meta.env.VITE_TMDB_KEY
      }`,
      options
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    if (!NowPlayingMovies) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
