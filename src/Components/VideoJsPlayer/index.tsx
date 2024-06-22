import { useCallback, useEffect, useState } from "react";
import videojs from "video.js";
import "./styles.css";
import styles from "../../Styling/recoverUkraine.module.css";
import RecoverVideoTablet from "../../Assets/videos/RecoverDetailTablet.mp4";
import LogoVideo from "../../Assets/videos/LogoVideo.mp4";
import Foto from "../../Assets/HomePageImages/CaseFoto.png";
interface PlayerProps {
  videoName: "RecoverDetailTablet" | "Logo";
}

/**
 * A simple video player component for displaying videos from external websites.
 * @returns A Video.js video player element.
 */
const Player = (props: PlayerProps) => {
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);
  const videoJsOptions = {
    loop: true,
    autoplay: false,
    controls: true,
    sources: [
      {
        src: props.videoName === "Logo" ? LogoVideo : RecoverVideoTablet,
        type: "video/mp4",
      },
    ],
  };
  const onVideo = useCallback((el: HTMLVideoElement) => {
    setVideoEl(el);
  }, []);

  useEffect(() => {
    if (videoEl == null) {
      return;
    }

    // our video.js player
    const player = videojs(videoEl, videoJsOptions);

    return () => {
      player.dispose();
    };
  }, [props, videoEl]);

  return (
    <>
      <div data-vjs-player>
        <video
          playsInline
          poster="../../Assets/HomePageImages/CaseFoto.png"
          className={`${
            props.videoName === "Logo"
              ? styles.recoveryProcessContainer__logoVideo
              : styles.recoveryProcessContainer__recoverDetailVideoTablet
          }  video-js`}
          style={{ backgroundColor: "white !important" }}
          ref={onVideo}
        />
      </div>
    </>
  );
};

export default Player;
