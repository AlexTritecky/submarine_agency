import styles from "../Styling/footer.module.css";
import FaceBookHyper from "../Assets/Images/BurgerMenuImages/FacebookHyper.svg";
import InstagramHyper from "../Assets/Images/BurgerMenuImages/InstagramHyper.svg";
import LinkedinHyper from "../Assets/Images/BurgerMenuImages/LinkedinHyper.svg";
import TikTokHyper from "../Assets/Images/BurgerMenuImages/TikTokHyper.svg";
import LinkArrow from "../Assets/Images/BurgerMenuImages/ArrowLink.svg";
import Image from "next/image";
import Button, { PLUS_BUTTON_TYPE, WHITE } from "./Button";
import FormModalPage from "./FormModalPage";

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
        <FormModalPage
          color={WHITE}
          text="СТАТИ КЛІЄНТОМ"
          type={PLUS_BUTTON_TYPE}
        />
        {/* <FormModalPage color={WHITE} /> */}
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
          <a
            target="_blank"
            className={styles.socialMediaLinksContainer__link}
            href="https://www.instagram.com/submarine_agency/?igsh=MXJtd2J0ZWczaHhpcw%3D%3D"
          >
            instagram <Image src={LinkArrow} alt="link" />
          </a>
          <a
            target="_blank"
            className={styles.socialMediaLinksContainer__link}
            href="https://www.youtube.com"
          >
            linkedin
            <Image src={LinkArrow} alt="link" />
          </a>
          <a
            target="_blank"
            className={styles.socialMediaLinksContainer__link}
            href="https://m.facebook.com/submarineagency"
          >
            facebook
            <Image src={LinkArrow} alt="link" />
          </a>
          <a
            target="_blank"
            className={styles.socialMediaLinksContainer__link}
            href={`https://www.tiktok.com/@submarineua?_t=8jA67dMjF81&_r=1`}
          >
            tik tok
            <Image src={LinkArrow} alt="link" />
          </a>
          <a
            target="_blank"
            className={styles.socialMediaLinksContainer__mobileLink}
            href={`https://www.tiktok.com/@submarineua?_t=8jA67dMjF81&_r=1`}
          >
            <Image src={TikTokHyper} alt="link to tik tok" />
          </a>
          <a
            target="_blank"
            className={styles.socialMediaLinksContainer__mobileLink}
            href="https://www.instagram.com/submarine_agency/?igsh=MXJtd2J0ZWczaHhpcw%3D%3D"
          >
            <Image src={InstagramHyper} alt="link to instagram" />
          </a>
          <a
            target="_blank"
            className={styles.socialMediaLinksContainer__mobileLink}
            href="https://m.facebook.com/submarineagency"
          >
            <Image src={FaceBookHyper} alt="link to facebook" />
          </a>
          <a
            target="_blank"
            className={styles.socialMediaLinksContainer__mobileLink}
            href="https://ua.linkedin.com/company/submarine-agency-ua"
          >
            <Image src={LinkedinHyper} alt="link to linkedin" />
          </a>
        </div>
        <div className={styles.footerContainer__sectionTwoContacts}>
          <div className={styles.footerContainer__sectionTwoHeader}>
            Контакти:
          </div>
          <div className={styles.footerContainer__sectionTwoCity}>
            79007 Україна м.Львів,
          </div>
          <div className={styles.footerContainer__sectionTwoStreet}>
            вул. Шопена, 10/2
          </div>
          <div className={styles.footerContainer__sectionTwoNumber}>
            +380672604811
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
