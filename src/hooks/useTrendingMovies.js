import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPopularMovies, addNowTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useTrendingMovies = () => {
  //fetch the data from the API and update the store
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=2",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addNowTrendingMovies(json.results));
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);
};


export default useTrendingMovies;