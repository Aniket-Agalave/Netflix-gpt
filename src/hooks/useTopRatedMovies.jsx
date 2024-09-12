import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const TopRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${
        import.meta.env.VITE_TMDB_KEY
      }`,
      options
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    if (!TopRatedMovies) getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
