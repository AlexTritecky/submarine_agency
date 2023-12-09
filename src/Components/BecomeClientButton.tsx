import styles from "../Styling/homePage.module.css";
import PlusImage from "../Assets/Images/HomePageImages/PlusElement.svg";
import Image from "next/image";
import { useState } from "react";

function BecomeClientButton() {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <button
      onMouseUp={() => setIsPressed(false)}
      onMouseDown={() => setIsPressed(true)}
      className={`${styles.becomeClientButton} ${
        isPressed ? styles.becomeClientButtonPressed : ""
      }`}
      tabIndex={0}
    >
      <Image
        className={styles.becomeClientButton__plus}
        src={PlusImage}
        alt="plus"
      />
      СТАТИ КЛІЄНТОМ
    </button>
  );
}

export default BecomeClientButton;
