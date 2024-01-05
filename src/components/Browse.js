import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainVideoContainer from "./MainVideoContainer";
import SecondaryContaner from "./SecondaryContaner";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

export const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {
        showGptSearch ? ( <GptSearch/>) : (<> <MainVideoContainer/> <SecondaryContaner/> </>)
      }
      
      
    </div>
  );
};
