import styles from "../Styling/menuBurger.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../Assets/Images/HomePageImages/ProjectLogo.svg";
import LinkArrow from "../Assets/Images/BurgerMenuImages/ArrowLink.svg";
import FaceBookHyper from "../Assets/Images/BurgerMenuImages/FacebookHyper.svg";
import InstagramHyper from "../Assets/Images/BurgerMenuImages/InstagramHyper.svg";
import LinkedinHyper from "../Assets/Images/BurgerMenuImages/LinkedinHyper.svg";
import TikTokHyper from "../Assets/Images/BurgerMenuImages/TikTokHyper.svg";
import Burger from "./BurgerIcon";
import Link from "next/link";
import FormModalPage from "./FormModalPage";
function MenuBurger() {
  const [rotateBurger, setRotateBurger] = useState(false);
  const [moveBurgerLines, setMoveBurgerLines] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openMenu]);
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
      <Burger
        handleBurgerOpen={handleBurgerOpen}
        rotateBurger={rotateBurger}
        moveBurgerLines={moveBurgerLines}
      />
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
          <Link
            onClick={handleBurgerOpen}
            href="/"
            className={styles.navigationContainer__navigationItem}
          >
            ДOМАШНЯ СТОРІНКА
          </Link>
          <a
            onClick={handleBurgerOpen}
            href="/#aboutUs"
            className={styles.navigationContainer__navigationItem}
          >
            ПРО НАС
          </a>
          <a
            onClick={handleBurgerOpen}
            href="/#services"
            className={styles.navigationContainer__navigationItem}
          >
            ПОСЛУГИ
          </a>
          {/* <a
            href="/portfolio"
            className={styles.navigationContainer__navigationItem}
          >
            ПОРТФОЛІО
          </a> */}
          <Link
            href="/portfolio"
            className={styles.navigationContainer__navigationItem}
          >
            ПОРТФОЛІО
          </Link>
          <a
            onClick={handleBurgerOpen}
            href="/#clients"
            className={styles.navigationContainer__navigationItem}
          >
            КЛІЄНТИ
          </a>
          <a
            href="/#cooperation"
            onClick={handleBurgerOpen}
            className={styles.navigationContainer__navigationItem}
          >
            СПІВПРАЦЯ
          </a>
          <a
            href="/team"
            className={styles.navigationContainer__navigationItem}
          >
            КОМАНДА
          </a>
          <FormModalPage
            type="link"
            element={
              <div className={styles.navigationContainer__navigationItem}>
                НАПИСАТИ НАМ
              </div>
            }
          />
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
          <a
            className={styles.socialMediaLinksContainer__link}
            target="_blank"
            href="https://www.instagram.com/submarine_agency/?igsh=MXJtd2J0ZWczaHhpcw%3D%3D"
          >
            instagram <Image src={LinkArrow} alt="link" />
          </a>
          <a
            className={styles.socialMediaLinksContainer__link}
            target="_blank"
            href="https://ua.linkedin.com/company/submarine-agency-ua"
          >
            linkedin
            <Image src={LinkArrow} alt="link" />
          </a>
          <a
            className={styles.socialMediaLinksContainer__link}
            target="_blank"
            href="https://m.facebook.com/submarineagency"
          >
            facebook
            <Image src={LinkArrow} alt="link" />
          </a>
          <a
            className={styles.socialMediaLinksContainer__link}
            target="_blank"
            href={`https://www.tiktok.com/@submarineua?_t=8jA67dMjF81&_r=1`}
          >
            tik tok
            <Image src={LinkArrow} alt="link" />
          </a>
        </div>
        <div
          className={`${styles.socialMediaLinksTabletContainer} ${
            !rotateBurger ? styles.socialMediaLinksTabletContainerHide : ""
          }`}
        >
          <a target="_blank" href={`https://www.tiktok.com/@submarineua?_t=8jA67dMjF81&_r=1`}>
            <Image src={TikTokHyper} alt="link to tik tok" />
          </a>
          <a target="_blank" href="https://www.instagram.com/submarine_agency/?igsh=MXJtd2J0ZWczaHhpcw%3D%3D">
            <Image src={InstagramHyper} alt="link to instagram" />
          </a>
          <a target="_blank" href="https://m.facebook.com/submarineagency">
            <Image src={FaceBookHyper} alt="link to facebook" />
          </a>
          <a target="_blank" href="https://ua.linkedin.com/company/submarine-agency-ua">
            <Image src={LinkedinHyper} alt="link to linkedin" />
          </a>
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
