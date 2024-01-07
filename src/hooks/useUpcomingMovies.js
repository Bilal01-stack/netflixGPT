import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {  addNowTrendingMovies, addNowUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useUpcomingMovies = () => {
  //fetch the data from the API and update the store
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=3",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addNowUpComingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};


export default useUpcomingMovies;