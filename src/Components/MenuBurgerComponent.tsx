import styles from "../Styling/menuBurger.module.css";
import { useState } from "react";
import Image from "next/image";
import Logo from "../Assets/Images/HomePageImages/ProjectLogo.svg";
import LinkArrow from "../Assets/Images/BurgerMenuImages/ArrowLink.svg";
import FaceBookHyper from "../Assets/Images/BurgerMenuImages/FacebookHyper.svg";
import InstagramHyper from "../Assets/Images/BurgerMenuImages/InstagramHyper.svg";
import LinkedinHyper from "../Assets/Images/BurgerMenuImages/LinkedinHyper.svg";
import TikTokHyper from "../Assets/Images/BurgerMenuImages/TikTokHyper.svg";
function MenuBurger() {
  const [rotateBurger, setRotateBurger] = useState(false);
  const [moveBurgerLines, setMoveBurgerLines] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const handleBurgerOpen = () => {
    if (!openMenu && !rotateBurger && !moveBurgerLines) {
      setTimeout(() => {
        setRotateBurger(true);
      }, 250);
      setOpenMenu(true);
      setMoveBurgerLines(true);
    } else {
      setMoveBurgerLines(false);
      setRotateBurger(false);
      setTimeout(() => {
        setOpenMenu(false);
      }, 500);
    }
  };
  return (
    <>
      <div
        onClick={handleBurgerOpen}
        className={`${styles.burgerContainer} ${
          rotateBurger ? styles.burgerContainerOpened : ""
        }`}
      >
        <div
          className={`${styles.burgerContainer__lineOne} ${
            moveBurgerLines ? styles.burgerContainer__lineOneHide : ""
          }`}
        ></div>
        <div
          className={`${styles.burgerContainer__lineTwo} ${
            moveBurgerLines ? styles.burgerContainer__lineTwoMoved : ""
          }`}
        ></div>
        <div
          className={`${styles.burgerContainer__lineThree} ${
            moveBurgerLines ? styles.burgerContainer__lineThreeMoved : ""
          }`}
        ></div>
      </div>
      <div
        className={`${styles.burgerMenuContainer} ${
          !openMenu ? styles.none : ""
        }`}
      >
        <nav
          className={`${styles.navigationContainer} ${
            !rotateBurger ? styles.navigationContainerHide : ""
          }`}
        >
          <div className={styles.navigationContainer__navigationHeader}>
            Навігація
          </div>
          <div className={styles.navigationContainer__navigationItem}>
            <div></div>
            ДOМАШНЯ СТОРІНКА
          </div>
          <div className={styles.navigationContainer__navigationItem}>
            ПРО НАС
          </div>
          <div className={styles.navigationContainer__navigationItem}>
            ПОСЛУГИ
          </div>
          <div className={styles.navigationContainer__navigationItem}>
            ПОРТФОЛІО
          </div>
          <div className={styles.navigationContainer__navigationItem}>
            КЛІЄНТИ
          </div>
          <div className={styles.navigationContainer__navigationItem}>
            СПІВПРАЦЯ
          </div>
          <div className={styles.navigationContainer__navigationItem}>
            КОМАНДА
          </div>
          <div className={styles.navigationContainer__navigationItem}>
            НАПИСАТИ НАМ
          </div>
        </nav>
        <Image
          className={`${styles.burgerMenuLogo} ${
            !rotateBurger ? styles.burgerMenuLogoHide : ""
          }`}
          src={Logo}
          alt="logo"
        />
        <div
          className={`${styles.socialMediaLinksContainer} ${
            !rotateBurger ? styles.socialMediaLinksContainerHide : ""
          }`}
        >
          <div className={styles.socialMediaLinksContainer__header}>
            Фоловте нас:
          </div>
          <a className={styles.socialMediaLinksContainer__link}>
            instagram <Image src={LinkArrow} alt="link" />
          </a>
          <a className={styles.socialMediaLinksContainer__link}>
            linkedin
            <Image src={LinkArrow} alt="link" />
          </a>
          <a className={styles.socialMediaLinksContainer__link}>
            facebook
            <Image src={LinkArrow} alt="link" />
          </a>
          <a className={styles.socialMediaLinksContainer__link}>
            tik tok
            <Image src={LinkArrow} alt="link" />
          </a>
        </div>
        <div
          className={`${styles.socialMediaLinksTabletContainer} ${
            !rotateBurger ? styles.socialMediaLinksTabletContainerHide : ""
          }`}
        >
          
          <a><Image src={TikTokHyper } alt='link to tik tok' /></a>
          <a><Image src={InstagramHyper } alt='link to instagram' /></a>
          <a><Image src={FaceBookHyper} alt='link to facebook' /></a>
          <a><Image src={LinkedinHyper} alt='link to linkedin' /></a>
        </div>
        <div
          className={`${styles.waterMarkContainer} ${
            !rotateBurger ? styles.waterMarkContainerHide : ""
          }`}
        >
          <div>© Submarine Creative 2023.</div>
          <div>All rights reserved</div>
        </div>
        <div
          className={`${styles.burgerMenuContainerRightSide} ${
            moveBurgerLines ? styles.burgerMenuContainerRightSideOpen : ""
          }`}
        ></div>
        <div
          className={`${styles.burgerMenuContainerLeftSide} ${
            moveBurgerLines ? styles.burgerMenuContainerLeftSideOpen : ""
          }`}
        ></div>
      </div>
    </>
  );
}

export default MenuBurger;
