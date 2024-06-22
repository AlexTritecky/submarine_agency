import styles from "../Styling/homePage.module.css";
import FotoCaseRikotaLogo from "../Assets/Images/RikotaCaseImages/FotoCaseRikotaLogo.svg";
import Image from "next/image";
import Button, { PLUS_BUTTON_TYPE, VIOLET } from "./Button";
const FotoCaseRikota = () => {
  return (
    <div className={styles.caseRikota}>
      <Image
        className={styles.caseRikota__logo}
        src={FotoCaseRikotaLogo}
        alt="logo"
      />
      <div className={styles.caseRikota__header}>
        Безкомпромісна турбота про вашу усмішку
      </div>
      <div className={styles.caseRikota__desctopContent}>
        <div
          className={`${styles.caseRikota__desctopContentItem} ${styles.caseRikota__item1}`}
        >
          комунікаційна стратегія
        </div>
        <div
          className={`${styles.caseRikota__desctopContentItem} ${styles.caseRikota__item2}`}
        >
          customer journey
        </div>
        <div
          className={`${styles.caseRikota__desctopContentItem} ${styles.caseRikota__item3}`}
        >
          банерна реклами
        </div>
      </div>
      <Button
        onClick={() => {}}
        text={"Переглянути"}
        color={VIOLET}
        caseButton={true}
        type={PLUS_BUTTON_TYPE}
      />
    </div>
  );
};

export default FotoCaseRikota;
