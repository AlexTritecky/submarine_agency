"use client";
import { useEffect, useState } from "react";
import styles from "../Styling/button.module.css";
import PlusImage from "../Assets/Images/HomePageImages/PlusElement.svg";
import BluePlusImage from "../Assets/Images/HomePageImages/BluePlus.svg";
import Arrow from "../Assets/Images/HomePageImages/PopUp/ComeBackArrow.svg";
import Image from "../../node_modules/next/image";

export const PLUS_BUTTON_TYPE = "plus button";
export const ARROW_BUTTON_TYPE = "arrow button";
export const WHITE = "#FFFF";
export const VIOLET = "#5566b7";

interface ButtonProps {
  type: typeof PLUS_BUTTON_TYPE | typeof ARROW_BUTTON_TYPE;
  color: typeof WHITE | typeof VIOLET;
  text: string;
  onClick?: () => void;
  caseButton?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  color,
  text,
  onClick,
  caseButton,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          onClick && onClick();
        }}
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
        className={`${styles.button} ${isPressed ? styles.buttonPressed : ""} ${
          color === WHITE ? styles.whiteButton : ""
        }   ${caseButton ? styles.caseButton : ""}`}
        tabIndex={0}
      >
        {type === PLUS_BUTTON_TYPE && (
          <Image
            className={`${styles.button__plus} ${
              isHovered ? styles.button__plusHovered : ""
            } ${isPressed ? styles.button__plusClicked : ""}  `}
            src={color === WHITE ? BluePlusImage : PlusImage}
            alt="plus"
          />
        )}
        {text}
        {type === ARROW_BUTTON_TYPE && (
          <Image className={styles.button__arrow} src={Arrow} alt="arrow" />
        )}
      </button>
    </>
  );
};

export default Button;
