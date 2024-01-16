import Image, { StaticImageData } from "next/image";
import styles from "../Styling/teamPage.module.css";

interface TeamMemberComponentProps {
  projectNumber: string;
  favoriteProject: string;
  experience: string;
  favoriteBand: string;
  fotoUrl: StaticImageData;
  backgroundUrl: StaticImageData;
  header: string;
  text: string;
}

const TeamMemberComponent: React.FC<TeamMemberComponentProps> = ({
  projectNumber,
  favoriteProject,
  experience,
  favoriteBand,
  fotoUrl,
  backgroundUrl,
  header,
  text,
}) => {

  return (
    <div className={styles.teamMemberContainer}>
      <div className={styles.teamMemberContainer__imageContainer}>
        <Image src={fotoUrl} alt="fotos" fill />
      </div>
      <div className={styles.teamMemberContainer__backgroundContainer}>
        <Image src={backgroundUrl} alt="background" fill />
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
    </div>
  );
};

export default TeamMemberComponent;
