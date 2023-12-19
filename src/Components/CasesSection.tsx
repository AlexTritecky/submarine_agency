import styles from "../Styling/homePage.module.css";
import ArrowTypeButton from "./ArrowTypeButton";

function CasesSection() {
  return (
    <section className={styles.casesContainer}>
      <div className={styles.casesContainer__title}>КЕЙСИ</div>
      <div className={styles.casesContainer__imageContainer}>
        <div className={styles.casesContainer__image}></div>
        <div className={styles.casesContainer__image}></div>
        <div className={styles.casesContainer__image}></div>
      </div>
      <ArrowTypeButton header={"Переглянути всі кейси"} />
    </section>
  );
}

export default CasesSection;
