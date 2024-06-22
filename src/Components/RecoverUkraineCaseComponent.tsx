import Image from "next/image";
import styles from "../Styling/homePage.module.css";
import RecoverUkraineLogo from "../Assets/Images/HomePageImages/RecoverUkraineLogo.svg";
import Button, { PLUS_BUTTON_TYPE, VIOLET } from "./Button";
const FotoCaseRecoverUkraineComponent = ({ text }: any) => {
  return (
    <div className={styles.recoverUkraineCaseContainer}>
      <div className={styles.recoverUkraineCaseContainer__logo}>
        <Image src={RecoverUkraineLogo} alt="logo" />
      </div>

      <div className={styles.recoverUkraineCaseContainer__text}>
        Відбудова країни,<br></br> у якій хочеться жити
      </div>
      <div className={styles.recoverUkraineCaseContainer__desctopContent}>
        <div className={styles.recoverUkraineCaseContainer__desctopContentItem}>
          лого
        </div>
        <div className={styles.recoverUkraineCaseContainer__desctopContentItem}>
          фонд
        </div>
        <div className={styles.recoverUkraineCaseContainer__desctopContentItem}>
          брендинг
        </div>
      </div>
      <div className={styles.recoverUkraineCaseContainer__mobileContent}>
        <div className={styles.recoverUkraineCaseContainer__mobileContentItem}>
          фонд
        </div>
        <div className={styles.recoverUkraineCaseContainer__mobileContentItem}>
          брендинг
        </div>
        <div className={styles.recoverUkraineCaseContainer__mobileContentItem}>
          лого
        </div>
        <div className={styles.recoverUkraineCaseContainer__mobileContentItem}>
          мерч
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

export default FotoCaseRecoverUkraineComponent;
