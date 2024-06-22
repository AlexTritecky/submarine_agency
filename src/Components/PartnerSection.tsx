import styles from "../Styling/homePage.module.css";
import Button, { PLUS_BUTTON_TYPE, VIOLET } from "./Button";
import FormModalPage from "./FormModalPage";

function PartnerSection() {
  return (
    <section id="clients" className={styles.partnerContainer}>
      <div className={styles.partnerContainer__imageContainer}></div>
      <div className={styles.partnerContainer__buttonContainer}>
      {/* <Button type={PLUS_BUTTON_TYPE} text='СТАТИ КЛІЄНТОМ' color={VIOLET} /> */}
      <FormModalPage color={VIOLET} />
      </div>
    </section>
  );
}

export default PartnerSection;
