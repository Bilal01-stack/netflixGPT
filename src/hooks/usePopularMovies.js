import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const usePopularMovies = () => {
  //fetch the data from the API and update the store
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addNowPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};


export default usePopularMovies;