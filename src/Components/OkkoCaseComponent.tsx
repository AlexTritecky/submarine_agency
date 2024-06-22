import Image from "next/image";
import styles from "../Styling/okko.module.css";
import Logo from "../Assets/Images/OkkoCaseImages/OkkoSmallLogo.svg";
import Button, { PLUS_BUTTON_TYPE, VIOLET } from "./Button";
const OkkoCase = () => {
  return (
    <div className={styles.okkoCaseContainer}>
      <div className={styles.okkoCaseContainer__logo}>
        <Image src={Logo} alt="logo" />
      </div>

      <div className={styles.okkoCaseContainer__text}>
        Місце зустрічей рідних незнайомців
      </div>
      <div className={styles.okkoCaseContainer__desctopContent}>
        <div className={styles.okkoCaseContainer__desctopContentItem}>smm</div>
        <div className={styles.okkoCaseContainer__desctopContentItem}>
          зйомки
        </div>
        <div className={styles.okkoCaseContainer__desctopContentItem}>
          креатив
        </div>
      </div>і
      <div className={styles.okkoCaseContainer__mobileContent}>
        <div className={styles.okkoCaseContainer__mobileContentItem}>smm</div>
        <div className={styles.okkoCaseContainer__mobileContentItem}>
          зйомки
        </div>
        <div className={styles.okkoCaseContainer__mobileContentItem}>
          креатив
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

export default OkkoCase;
