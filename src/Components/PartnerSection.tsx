import styles from "../Styling/homePage.module.css";
import BecomeClientButton from "./BecomeClientButton";

function PartnerSection() {
  return <section className={styles.partnerContainer}>
           <div className={styles.partnerContainer__imageContainer}></div>
           <BecomeClientButton />
    </section>;
}

export default PartnerSection;
