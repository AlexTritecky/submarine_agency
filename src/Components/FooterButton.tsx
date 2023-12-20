import styles from "../Styling/homePage.module.css";
import PlusImage from "../Assets/Images/HomePageImages/BluePlus.svg";
import Image from "next/image";
import { useState } from "react";

function FooterButton() {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onMouseUp={() => {
        setIsPressed(false);
      }}
      onMouseDown={() => {
        setIsPressed(true);
      }}
      className={`${styles.footerClientButton} ${
        isPressed ? styles.footerClientButtonPressed : ""
      }`}
      tabIndex={0}
    >
      <Image
        className={`${styles.footerClientButton__plus} ${
          isHovered ? styles.footerClientButton__plusHovered : ""
        } ${isPressed ? styles.footerClientButton__plusClicked : ""}  `}
        src={PlusImage}
        alt="plus"
      />
      СТАТИ КЛІЄНТОМ
    </button>
  );
}

export default FooterButton;
