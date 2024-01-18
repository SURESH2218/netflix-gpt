import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="overflow-x-hidden">
      <Header />
      {/*
          MovieContainer
            -VideoBg
            -Title
          -SecondaryContainer
            -MovieList
        */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
