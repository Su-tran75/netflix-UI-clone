import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const trailer = "https://video-previews.elements.envatousercontent.com/files/1998f682-7bee-4409-a49a-69bff334bac9/video_preview_h264.mp4";

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        atl=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoplay="true" loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 45 mins</span>
              <span className="limit">+16</span>
              <span>2015</span>
            </div>
            <div className="desc">
              Quisquam pariatur perferendis sed et nemo tempore ea quis.
              Excepturi eum facere voluptatum quas.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
