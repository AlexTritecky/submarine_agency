import styles from "../Styling/homePage.module.css";
const FotoCaseRecoverUrkraineComponent = ({ text }: any) => {
  return (
    <div className={styles.recoverUkraineCaseContainer}>
      <div className={styles.recoverUkraineCaseContainer__logo}></div>
      {/* <div className={styles.recoverUkraineCaseContainer__header}>
        Качина колаба.
      </div> */}
      <div className={styles.recoverUkraineCaseContainer__text}>
        Відбудова країни, у якій хочеться жити
      </div>
      <div className={styles.recoverUkraineCaseContainer__desctopContent}>
        <div className={styles.caseContainer__desctopContentItem}>лошо</div>
        <div className={styles.caseContainer__desctopContentItem}>
          фонд
        </div>
        <div className={styles.caseContainer__desctopContentItem}>
          брендинг
        </div>
      </div>
      <div className={styles.caseContainer__mobileContent}>
        <div className={styles.caseContainer__mobileContentItem}>фонд</div>
        <div className={styles.caseContainer__mobileContentItem}>брендинг</div>
        <div className={styles.caseContainer__mobileContentItem}>лого</div>
        <div className={styles.caseContainer__mobileContentItem}>мерч</div>
        <div className={styles.caseContainer__mobileContentItem}>
          smm-супровід
        </div>
      </div>
    </div>
  );
};

export default FotoCaseRecoverUrkraineComponent;
