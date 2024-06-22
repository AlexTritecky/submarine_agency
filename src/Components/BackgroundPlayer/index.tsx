import { useRef, useState } from "react";
import "./styles.css";
import RecoverVideo from "../../Assets/videos/RecoverDetail.mp4";

const BackgroundVideo = ({ src }: any) => {
  return (
    <video
      loop
      muted
      autoPlay
      playsInline
      style={{ width: "100%", height: "100%" }}
    >
      <source type="video/mp4" src={RecoverVideo} />
    </video>
  );
};

export default BackgroundVideo;
