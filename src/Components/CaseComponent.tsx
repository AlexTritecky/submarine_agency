import styles from "../Styling/homePage.module.css";
const CaseComponent = ({ text }: any) => {
  return (
    <div className={styles.caseContainer}>
      <div className={styles.caseContainer__text}>{text}</div>
      <div className={styles.caseContainer__desctopContent}>
        <div className={styles.caseContainer__desctopContentItem}>ще</div>
        <div className={styles.caseContainer__desctopContentItem}>зовсім</div>
        <div className={styles.caseContainer__desctopContentItem}>трошки</div>
        <div className={styles.caseContainer__desctopContentItem}>правда</div>
      </div>
      <div className={styles.caseContainer__mobileContent}>
        <div className={styles.caseContainer__mobileContentItem}>ми</div>
        <div className={styles.caseContainer__mobileContentItem}>вже</div>
        <div className={styles.caseContainer__mobileContentItem}>готуємо</div>
        <div className={styles.caseContainer__mobileContentItem}>наступні</div>
        <div className={styles.caseContainer__mobileContentItem}>круті кейси</div>
      </div>
    </div>
  );
};

export default CaseComponent;
