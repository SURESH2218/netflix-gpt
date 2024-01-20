import { useSelector } from "react-redux";
import useTopRated from "../hooks/uesTopRated";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopular from "../hooks/usePopular";
import useUpcoming from "../hooks/useUpcoming";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useUpcoming();

  return (
    <div className="">
      <Header />
      {showGptSearch ? (
        <GptSearch className="" />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
