import "../Styling/main.css";
import styles from "../Styling/homePage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Mousewheel,
} from "swiper/modules";
import SwiperDesctopFoto1 from "../Assets/Images/TeamPageImages/TeamPageSwiperDesctopFoto1.webp";
import SwiperTabletFoto1 from "../Assets/Images/TeamPageImages/TeamPageSwiperTabletFoto1.webp";
import SwiperMobileFoto1 from "../Assets/Images/TeamPageImages/TeamPageSwiperMobileFoto1.webp";
import SwiperDesctopFoto2 from "../Assets/Images/TeamPageImages/TeamPageSwiperDesctopFoto2.webp";
import SwiperTabletFoto2 from "../Assets/Images/TeamPageImages/TeamPageSwiperTabletFoto2.webp";
import SwiperMobileFoto2 from "../Assets/Images/TeamPageImages/TeamPageSwiperMobileFoto2.webp";
import SwiperDesctopFoto3 from "../Assets/Images/TeamPageImages/TeamPageSwiperDesctopFoto3.webp";
import SwiperTabletFoto3 from "../Assets/Images/TeamPageImages/TeamPageSwiperTabletFoto3.webp";
import SwiperMobileFoto3 from "../Assets/Images/TeamPageImages/TeamPageSwiperMobileFoto3.webp";
import SwiperDesctopFoto4 from "../Assets/Images/TeamPageImages/TeamPageSwiperDesctopFoto4.webp";
import SwiperTabletFoto4 from "../Assets/Images/TeamPageImages/TeamPageSwiperTabletFoto4.webp";
import SwiperMobileFoto4 from "../Assets/Images/TeamPageImages/TeamPageSwiperMobileFoto4.webp";
import Logo from "../Assets/Images/HomePageImages/ProjectLogo.svg";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { VIOLET } from "./Button";
import FormModalPage from "./FormModalPage";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function TeamPageSlider() {
  const [isPageLoaded, setIsPageLoaded] = useState({
    img1: false,
    img2: false,
    img3: false,
    img4: false,
  });
  const [isLoaderClosed, setIsLoaderClosed] = useState(false);
  const [screenWidth, setScreenWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 0;
  });
  useEffect(() => {
    if (
      isPageLoaded.img1 &&
      isPageLoaded.img2 &&
      isPageLoaded.img3 &&
      isPageLoaded.img4
    ) {
      setTimeout(() => {
        setIsLoaderClosed(true);
      }, 500);
    }
  }, [isPageLoaded]);
  return (
    <section className={styles.startSectionContainer}>
      {!isLoaderClosed && (
        <Loader
          isLoaded={
            isPageLoaded.img1 &&
            isPageLoaded.img2 &&
            isPageLoaded.img3 &&
            isPageLoaded.img4
          }
        />
      )}
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Keyboard,
          Mousewheel,
        ]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        mousewheel={screenWidth > 768}
      >
        <header className={styles.headerContainer}>
          <Image
            className={styles.headerContainer__logo}
            src={Logo}
            alt="logo"
          />
          <nav className={styles.headerContainer__navigation}>
            <a
              href="/#aboutUs"
              className={styles.headerContainer__navigationItem}
            >
              Про нас
            </a>
            <a
              href="/#services"
              className={styles.headerContainer__navigationItem}
            >
              Послуги
            </a>
            <a
              href="/portfolio"
              className={styles.headerContainer__navigationItem}
            >
              Портфоліо
            </a>
            <a
              href="/#clients"
              className={styles.headerContainer__navigationItem}
            >
              Клієнти
            </a>
            <a
              href="/#cooperation"
              className={styles.headerContainer__navigationItem}
            >
              Співпраця
            </a>
          </nav>
        </header>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto1}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth > 1024) {
                setIsPageLoaded((prev) => ({ ...prev, img1: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto1}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 1024 && screenWidth > 480) {
                setIsPageLoaded((prev) => ({ ...prev, img1: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto1}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 480) {
                setIsPageLoaded((prev) => ({ ...prev, img1: true }));
              }
            }}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto2}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth > 1024) {
                setIsPageLoaded((prev) => ({ ...prev, img2: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto2}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 1024 && screenWidth > 480) {
                setIsPageLoaded((prev) => ({ ...prev, img2: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto2}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 480) {
                setIsPageLoaded((prev) => ({ ...prev, img2: true }));
              }
            }}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto3}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth > 1024) {
                setIsPageLoaded((prev) => ({ ...prev, img3: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto3}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 1024 && screenWidth > 480) {
                setIsPageLoaded((prev) => ({ ...prev, img3: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto3}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 480) {
                setIsPageLoaded((prev) => ({ ...prev, img3: true }));
              }
            }}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto4}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth > 1024) {
                setIsPageLoaded((prev) => ({ ...prev, img4: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto4}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 1024 && screenWidth > 480) {
                setIsPageLoaded((prev) => ({ ...prev, img4: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto4}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 480) {
                setIsPageLoaded((prev) => ({ ...prev, img4: true }));
              }
            }}
            priority
          />
        </SwiperSlide>
      </Swiper>
      <div className={styles.startSectionContainer__button}>
        <FormModalPage color={VIOLET} />
      </div>
      <div className={styles.credoContainer}>
        РОЗПОВІДАЄМО ПРО СИЛЬНІ СТОРОНИ КОЖНОГО
      </div>
    </section>
  );
}

export default TeamPageSlider;
