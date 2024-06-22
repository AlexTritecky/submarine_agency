import Image from "next/image";
import React, { useState, useEffect } from "react";
import ServiceArrow from "../../Assets/Images/OkkoCaseImages/ServiceArrow.svg";
import styles from "../../Styling/okko.module.css";
const RotatingImageCard = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((rotation) => (rotation === -135 ? 0 : -135));
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.okkoStartSection__fotosContainer__rightSection_card}>
      <Image
        src={ServiceArrow}
        alt={"arrow"}
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </div>
  );
};

export default RotatingImageCard;
