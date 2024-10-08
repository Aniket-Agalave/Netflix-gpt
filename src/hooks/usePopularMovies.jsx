import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const PopularMovies = useSelector((store) => store.movies?.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${
        import.meta.env.VITE_TMDB_KEY
      }`,
      options
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    if (!PopularMovies) getPopularMovies();
  }, []);
};

export default usePopularMovies;
