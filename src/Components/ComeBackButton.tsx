import styles from "../Styling/homePage.module.css";
import Arrow from "../Assets/Images/HomePageImages/PopUp/ComeBackArrow.svg";
import Image from "next/image";
import { useState } from "react";

function ComeBackButton({ onClose }: any) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <button
      onClick={onClose}
      onMouseUp={() => setIsPressed(false)}
      onMouseDown={() => setIsPressed(true)}
      className={`${styles.comeBackButton} ${
        isPressed ? styles.comeBackButtonPressed : ""
      }`}
      tabIndex={0}
    >
      <div>Повернутися назад</div>
      <Image className={styles.comeBackButton__arrow} src={Arrow} alt="arrow" />
    </button>
  );
}

export default ComeBackButton;
