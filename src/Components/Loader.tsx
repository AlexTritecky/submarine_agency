import * as React from "react";
import Image from "next/image";
import styles from "../Styling/loader.module.css";
import LoaderImage from "../Assets/Images/LoaderImage/Loader.webp";
import LinearProgress from "@mui/material/LinearProgress";

function Loader({ isLoaded }: any) {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    if (isLoaded) {
      setProgress(100);
    }
    document.body.style.overflow = "hidden";
    const timer = setInterval(() => {
      !isLoaded &&
        setProgress((prevProgress) =>
          prevProgress >= 90 ? 98 : prevProgress + 5
        );
    }, 1000);

    return () => {
      document.body.style.overflow = "unset";
      clearInterval(timer);
    };
  }, [isLoaded]);
  return (
    <div className={styles.loaderContainer}>
      <Image src={LoaderImage} alt="loading" />
      <div className={styles.progressContainer}>
        <LinearProgress variant="determinate" value={progress} />
      </div>
    </div>
  );
}

export default Loader;
