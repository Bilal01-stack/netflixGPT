import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";



const useMoviesVideo = () =>{
    const dispatch = useDispatch();
   //fetch the store and update the tailer video data
  const getMovieVideos = async () => {
    

export default useMoviesVideo;