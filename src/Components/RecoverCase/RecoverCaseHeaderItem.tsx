import styles from "../../Styling/recoverUkraine.module.css";
import Image from "next/image";
import WhiteArrowIcon from "../../Assets/Images/RecoverUkraineCaseImages/whiteCircleArrow.svg";
import { useState } from "react";

const HeaderItem = ({ text }: any) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      onMouseDown={() => {
        setIsClicked(true);
      }}
      onMouseUp={() => {
        setIsClicked(false);
      }}
      onTouchStart={() => {
        setIsClicked(true);
      }}
      onTouchEnd={() => {
        setIsClicked(false);
      }}
      style={{
        marginBottom: text === "мерч" ? 0 : "",
      }}
      className={`${
        styles.recoverUkraineHeaderInfoSection__rightPart_content_item
      } ${" "}  ${
        isClicked
          ? styles.recoverUkraineHeaderInfoSection__rightPart_content_itemClicked
          : ""
      }`}
    >
      <Image src={WhiteArrowIcon} alt="whiteArrow" /> {text}
    </div>
  );
};

export default HeaderItem;
