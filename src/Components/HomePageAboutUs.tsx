import Image from "next/image";
import styles from "../Styling/homePage.module.css";

function AboutUsSection() {
  return (
    <section id="aboutUs" className={styles.aboutUsContainer}>
      <div className={styles.aboutUsContainer__title}>
        <div className={styles.aboutUsContainer__mainTitleText}>ПРО НАС</div>
        <div className={styles.aboutUsContainer__subTitleText}>
          СТВОРЮЄМО ЗВ ` ЯЗКИ <br />
          МІЖ КОМПАНІЯМИ ТА ЛЮДЬМИ
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
