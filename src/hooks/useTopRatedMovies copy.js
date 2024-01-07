import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useTopRatedMovies = () => {
  //fetch the data from the API and update the store
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=3",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addNowTopRatedMovies(json.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};


export default useTopRatedMovies;