import styles from "../Styling/homePage.module.css";
import BecomeClientButton from "./BecomeClientButton";
import Button, { PLUS_BUTTON_TYPE, VIOLET } from "./Button";

function PartnerSection() {
  return (
    <section className={styles.partnerContainer}>
      <div className={styles.partnerContainer__imageContainer}></div>
      <div className={styles.partnerContainer__buttonContainer}>
      <Button type={PLUS_BUTTON_TYPE} text='СТАТИ КЛІЄНТОМ' color={VIOLET} />
      </div>
    </section>
  );
}

export default PartnerSection;
