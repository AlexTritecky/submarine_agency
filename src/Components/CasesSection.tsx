import styles from "../Styling/homePage.module.css";
import ComeBackButton from "./ComeBackButton";

function CasesSection() {
  return (
    <section className={styles.casesContainer}>
      <div className={styles.casesContainer__title}></div>
      <div className={styles.casesContainer__imageContainer}>
        <div className={styles.casesContainer__image}></div>
        <div className={styles.casesContainer__image}></div>
        <div className={styles.casesContainer__image}></div>
      </div>
      <ComeBackButton />
    </section>
  );
}

export default CasesSection;
