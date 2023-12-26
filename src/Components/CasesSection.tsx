import styles from "../Styling/homePage.module.css";
import Button, { ARROW_BUTTON_TYPE, VIOLET } from "./Button";

function CasesSection() {
  return (
    <section className={styles.casesContainer}>
      <div className={styles.casesContainer__title}>КЕЙСИ</div>
      <div className={styles.casesContainer__imageContainer}>
        <div className={styles.casesContainer__image}></div>
        <div className={styles.casesContainer__image}></div>
        <div className={styles.casesContainer__image}></div>
      </div>
      <div className={styles.casesContainer__buttonContainer}>
        <Button
          type={ARROW_BUTTON_TYPE}
          text="Переглянути всі кейси"
          color={VIOLET}
        />
      </div>
    </section>
  );
}

export default CasesSection;
