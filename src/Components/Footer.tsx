import styles from "../Styling/footer.module.css";
import FaceBookHyper from "../Assets/Images/BurgerMenuImages/FacebookHyper.svg";
import InstagramHyper from "../Assets/Images/BurgerMenuImages/InstagramHyper.svg";
import LinkedinHyper from "../Assets/Images/BurgerMenuImages/LinkedinHyper.svg";
import TikTokHyper from "../Assets/Images/BurgerMenuImages/TikTokHyper.svg";
import LinkArrow from "../Assets/Images/BurgerMenuImages/ArrowLink.svg";
import Image from "next/image";
import Button, { PLUS_BUTTON_TYPE, WHITE } from "./Button";

function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className={styles.footerContainer}>
      <div className={styles.footerContainer__stylingElement}></div>
      <div className={styles.footerContainer__sectionOne}>
        <div className={styles.footerContainer__sectionOneHeader}>
          БУДУЄМО БРЕНД-КОМУНІКАЦІЮ У СОЦІАЛЬНИХ МЕРЕЖАХ
        </div>
        <Button type={PLUS_BUTTON_TYPE} text="СТАТИ КЛІЄНТОМ" color={WHITE} />
        <div className={styles.footerContainer__sectionOneFillForm}>
          Не любите заповнювати форми?
        </div>
        <div className={styles.footerContainer__sectionOneWriteUs}>
          Пишіть нам на мейл
        </div>
        <a
          href="mailto:project@submarineagency.com.ua"
          className={styles.footerContainer__sectionOneEmail}
        >
          project@submarineagency.com.ua
        </a>
      </div>
      <div className={styles.footerContainer__sectionTwo}>
        <div className={styles.footerContainer__sectionTwoMediaHypers}>
          <div className={styles.socialMediaLinksContainer__header}>
            Фоловте нас:
          </div>
          <a className={styles.socialMediaLinksContainer__link} href='https://www.youtube.com'>
            
            instagram <Image src={LinkArrow} alt="link" />
          </a>
          <a className={styles.socialMediaLinksContainer__link} href='https://www.youtube.com'>
            linkedin
            <Image src={LinkArrow} alt="link" />
          </a>
          <a className={styles.socialMediaLinksContainer__link} href='https://www.youtube.com'>
            facebook
            <Image src={LinkArrow} alt="link" />
          </a>
          <a className={styles.socialMediaLinksContainer__link} href='https://www.youtube.com'>
            tik tok
            <Image src={LinkArrow} alt="link" />
          </a>
          <a className={styles.socialMediaLinksContainer__mobileLink} href='https://www.youtube.com'>
            <Image src={TikTokHyper} alt="link to tik tok" />
          </a>
          <a className={styles.socialMediaLinksContainer__mobileLink} href='https://www.youtube.com'>
            <Image src={InstagramHyper} alt="link to instagram" />
          </a>
          <a className={styles.socialMediaLinksContainer__mobileLink} href='https://www.youtube.com'>
            <Image src={FaceBookHyper} alt="link to facebook" />
          </a>
          <a className={styles.socialMediaLinksContainer__mobileLink} href='https://www.youtube.com'>
            <Image src={LinkedinHyper} alt="link to linkedin" />
          </a>
        </div>
        <div className={styles.footerContainer__sectionTwoContacts}>
          <div className={styles.footerContainer__sectionTwoHeader}>
            Контакти:
          </div>
          <div className={styles.footerContainer__sectionTwoCity}>
            79011 Україна м.Львів,{" "}
          </div>
          <div className={styles.footerContainer__sectionTwoStreet}>
            вул. Володимира Великого, 18
          </div>
          <div className={styles.footerContainer__sectionTwoNumber}>
            +380672604811
          </div>
          <div className={styles.footerContainer__sectionTwoMail}>
            project@submarineagency.com.ua
          </div>
        </div>
        <div
          className={styles.footerContainer__sectionTwoGoToStart}
          onClick={scrollToTop}
        >
          Повернутись догори <Image src={LinkArrow} alt="link" />
        </div>
      </div>
      <div className={styles.footerContainer__rightsSection}>
        © Submarine Creative 2023. All rights reserved
      </div>
    </section>
  );
}
export default FooterSection;
