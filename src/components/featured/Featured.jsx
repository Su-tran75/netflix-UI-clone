import "./featured.scss";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Featured = ({type}) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select id="genre" name="genre">
            <option>Genre </option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/4300115/pexels-photo-4300115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="featured picture"
      />
      <div className="info">
        <img src="https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRKrgH8goki6B50_fsipiwG8-efCu0w57iY4KsMiMOkV_xpwmCR1bwdO-qexN7jGsMEEVHu_udqNGVab2eGM-RxjYidvNBjuWkAE.png?r=df1" alt="" />
        <span className="desc">
          Nesciunt quos enim dolore dolorum consequatur magni. Earum delectus
          laboriosam officia. Sint quos perferendis ipsa quis illo officiis
          asperiores dolor.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
