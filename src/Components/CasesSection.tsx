import styles from "../Styling/homePage.module.css";
import Button, { ARROW_BUTTON_TYPE, VIOLET } from "./Button";
import CaseComponent from "./CaseComponent";
import FotoCaseComponent from "./FotoCaseComponent";
import FotoCaseRecoverUkraineComponent from "./RecoverUkraineCaseComponent";
import Link from "next/link";
import FotoCaseRikota from "./FotoCaseRikota";
import OkkoCase from "./OkkoCaseComponent";

function CasesSection({ page }: any) {
  return (
    <section className={styles.casesContainer}>
      <div className={styles.casesContainer__title}>КЕЙСИ</div>
      <div className={styles.casesContainer__imageContainer}>
        <a
          href="/recoverUkraine"
          className={styles.navigationContainer__navigationItem}
        >
          <FotoCaseRecoverUkraineComponent />
        </a>
        <a
          href="/rikota"
          className={styles.navigationContainer__navigationItem}
        >
          <FotoCaseRikota />
        </a>
        <a href="/okko" className={styles.navigationContainer__navigationItem}>
          <OkkoCase />
        </a>
        {page === "portfolio" && <CaseComponent text="Скоро буде" />}
        {page === "portfolio" && (
          <CaseComponent
            text="А поки що ознайомтесь
            з кейсами вище"
          />
        )}
        {page === "portfolio" && (
          <CaseComponent
            text="Ми вже працюємо 
             над новими кейсами"
          />
        )}
      </div>
      <div className={styles.casesContainer__buttonContainer}>
        {page === "portfolio" ? (
          <a href="/">
            <Button
              type={ARROW_BUTTON_TYPE}
              text="Повернутись на головну"
              color={VIOLET}
            />
            ˝
          </a>
        ) : (
          <a href="/portfolio">
            <Button
              type={ARROW_BUTTON_TYPE}
              text="Переглянути всі кейси"
              color={VIOLET}
            />
          </a>
        )}
      </div>
    </section>
  );
}

export default CasesSection;
