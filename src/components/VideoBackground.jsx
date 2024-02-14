import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/usetrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
  // console.log(trailerVideo?.key);
  useTrailerVideo(movieId);

  return (
    <div className="overflow-hidden">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&&mute=1"
        }
        title="YouTube video player"
        autoPlay="1"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

