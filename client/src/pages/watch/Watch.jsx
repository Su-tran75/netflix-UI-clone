import "./watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";

const Watch = () => {
  return (
    <div>
      <div className="watch">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
        <video
          className="video"
          autoplay="true"
          progress
          controls
          src="https://video-previews.elements.envatousercontent.com/files/33f18381-73db-4bfb-9ee0-25393876cea1/video_preview_h264.mp4"
        />
      </div>
    </div>
  );
};

export default Watch;
