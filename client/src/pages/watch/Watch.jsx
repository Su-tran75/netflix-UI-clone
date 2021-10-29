import "./watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import { useLocation, Link } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const movie = location.movie;

  return (
    <div>
      <div className="watch">
        <Link to="/">
          <div className="back">
            <ArrowBackOutlined />
            Home
          </div>
        </Link>
        <video
          className="video"
          autoplay="true"
          progress
          controls
          src={movie.video}
        />
      </div>
    </div>
  );
};

export default Watch;
