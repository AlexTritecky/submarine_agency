import styles from "../Styling/homePage.module.css";
const FotoCaseComponent = ({ text }: any) => {
  return (
    <div className={styles.caseFotoContainer}>
      <div className={styles.caseFotoContainer__logo}></div>
      <div className={styles.caseFotoContainer__header}>Качина колаба.</div>
      <div className={styles.caseFotoContainer__text}>Або кейс, що крякає</div>
      <div className={styles.caseFotoContainer__desctopContent}>
        <div className={styles.caseContainer__desctopContentItem}>візуал</div>
        <div className={styles.caseContainer__desctopContentItem}>
          стратегія
        </div>
        <div className={styles.caseContainer__desctopContentItem}>
          smm-супровід
        </div>
      </div>
      <div className={styles.caseContainer__mobileContent}>
        <div className={styles.caseContainer__mobileContentItem}>візуал</div>
        <div className={styles.caseContainer__mobileContentItem}>медіа</div>
        <div className={styles.caseContainer__mobileContentItem}>таргет</div>
        <div className={styles.caseContainer__mobileContentItem}>стратегія</div>
        <div className={styles.caseContainer__mobileContentItem}>
          smm-супровід
        </div>
      </div>
    </div>
  );
};

export default FotoCaseComponent;
