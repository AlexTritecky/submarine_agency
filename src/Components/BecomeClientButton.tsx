import styles from "../Styling/homePage.module.css";
import PlusImage from "../Assets/Images/HomePageImages/PlusElement.svg";
import Image from "next/image";
import { useState } from "react";

function BecomeClientButton() {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => {
        setIsHovered(true);
        console.log("зайшов");
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        console.log("вийшов");
      }}
      onMouseUp={() => {
        console.log("настиснув");
        setIsPressed(false);
      }}
      onMouseDown={() => {
        console.log("відтиснув");
        setIsPressed(true);
      }}
      className={`${styles.becomeClientButton} ${
        isPressed ? styles.becomeClientButtonPressed : ""
      }`}
      tabIndex={0}
    >
      <Image
        className={`${styles.becomeClientButton__plus} ${
          isHovered ? styles.becomeClientButton__plusHovered : ""
        } ${isPressed ? styles.becomeClientButton__plusClicked : ""}  `}
        src={PlusImage}
        alt="plus"
      />
      СТАТИ КЛІЄНТОМ
    </button>
  );
}

export default BecomeClientButton;
