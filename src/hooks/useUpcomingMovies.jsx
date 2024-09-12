import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const UpcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${
        import.meta.env.VITE_TMDB_KEY
      }`,
      options
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    if (!UpcomingMovies) getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
