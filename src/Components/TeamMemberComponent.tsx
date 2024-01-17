import Image, { StaticImageData } from "next/image";
import styles from "../Styling/teamPage.module.css";
import Arrow from "../Assets/Images/TeamPageImages/Members/MemberArrow.svg";
import { useState } from "react";

interface TeamMemberComponentProps {
  projectNumber: string;
  favoriteProject: string;
  experience: string;
  favoriteBand: string;
  additionalClassFoto: string;
  additionalClassBackground: string;
  header: string;
  text: string;
}

const TeamMemberComponent: React.FC<TeamMemberComponentProps> = ({
  projectNumber,
  favoriteProject,
  experience,
  favoriteBand,
  additionalClassFoto,
  additionalClassBackground,
  header,
  text,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <div
      className={styles.teamMemberContainer}
      onMouseDown={() => {
        setIsPressed(true);
      }}
      onMouseUp={() => {
        setIsPressed(false);
      }}
      onTouchStart={() => {
        setIsPressed(true);
      }}
      onTouchEnd={() => {
        setIsPressed(false);
      }}
    >
      <div
        className={`${styles.teamMemberContainer__imageContainer} ${additionalClassFoto}`}
      ></div>
      <div
        className={`${styles.teamMemberContainer__backgroundContainer}
         ${additionalClassBackground}
        ${
          isPressed
            ? styles.teamMemberContainer__backgroundContainerPressed
            : ""
        }`}
      >
        <div
          className={styles.teamMemberContainer__backgroundContainer_content}
        >
          <div
            className={
              styles.teamMemberContainer__backgroundContainer_contentSection
            }
          >
            <div
              className={
                styles.teamMemberContainer__backgroundContainer_contentSectionHeader
              }
            >
              Кількість реалізованих проєктів в Submarine :
            </div>
            <div
              className={
                styles.teamMemberContainer__backgroundContainer_contentSectionText
              }
            >
              {projectNumber}
            </div>
          </div>
          <div
            className={
              styles.teamMemberContainer__backgroundContainer_contentSection
            }
          >
            <div
              className={
                styles.teamMemberContainer__backgroundContainer_contentSectionHeader
              }
            >
              Улюблені проєкти:
            </div>
            <div
              className={
                styles.teamMemberContainer__backgroundContainer_contentSectionText
              }
            >
              {favoriteProject}
            </div>
          </div>
          <div
            className={
              styles.teamMemberContainer__backgroundContainer_contentSection
            }
          >
            <div
              className={
                styles.teamMemberContainer__backgroundContainer_contentSectionHeader
              }
            >
              Досвід:
            </div>
            <div
              className={
                styles.teamMemberContainer__backgroundContainer_contentSectionText
              }
            >
              {experience}
            </div>
          </div>
          <div
            className={
              styles.teamMemberContainer__backgroundContainer_contentSection
            }
          >
            <div
              className={
                styles.teamMemberContainer__backgroundContainer_contentSectionHeader
              }
            >
              Улюблений гурт:
            </div>
            <div
              className={
                styles.teamMemberContainer__backgroundContainer_contentSectionText
              }
            >
              {favoriteBand}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.teamMemberContainer__header}>{header}</div>
      <div className={styles.teamMemberContainer__text}>{text}</div>
      <div
        className={`${styles.teamMemberContainer__arrow} ${
          isPressed ? styles.teamMemberContainer__arrowPressed : ""
        }`}
      >
        <Image src={Arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default TeamMemberComponent;
