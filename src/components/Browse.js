import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainVideoContainer from "./MainVideoContainer";
import SecondaryContaner from "./SecondaryContaner";

export const Browse = () => {

  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainVideoContainer/>
      <SecondaryContaner/>
    </div>
  );
};
