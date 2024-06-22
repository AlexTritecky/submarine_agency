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
import SwiperDesctopFoto1 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperDesctopFoto1.webp";
import SwiperTabletFoto1 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperTabletFoto1.webp";
import SwiperMobileFoto1 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperMobileFoto1.webp";
import SwiperDesctopFoto2 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperDesctopFoto2.webp";
import SwiperTabletFoto2 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperTabletFoto2.webp";
import SwiperMobileFoto2 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperMobileFoto2.webp";
import SwiperDesctopFoto3 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperDesctopFoto3.webp";
import SwiperTabletFoto3 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperTabletFoto3.webp";
import SwiperMobileFoto3 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperMobileFoto3.webp";
import SwiperDesctopFoto4 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperDesctopFoto4.webp";
import SwiperTabletFoto4 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperTabletFoto4.webp";
import SwiperMobileFoto4 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperMobileFoto4.webp";
import SwiperDesctopFoto5 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperDesctopFoto5.webp";
import SwiperTabletFoto5 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperTabletFoto5.webp";
import SwiperMobileFoto5 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperMobileFoto5.webp";
import SwiperDesctopFoto6 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperDesctopFoto6.webp";
import SwiperTabletFoto6 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperTabletFoto6.webp";
import SwiperMobileFoto6 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperMobileFoto6.webp";
import SwiperDesctopFoto7 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperDesctopFoto7.webp";
import SwiperTabletFoto7 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperTabletFoto7.webp";
import SwiperMobileFoto7 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperMobileFoto7.webp";
import SwiperDesctopFoto8 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperDesctopFoto8.webp";
import SwiperTabletFoto8 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperTabletFoto8.webp";
import SwiperMobileFoto8 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperMobileFoto8.webp";
import SwiperDesctopFoto9 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperDesctopFoto9.webp";
import SwiperTabletFoto9 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperTabletFoto9.webp";
import SwiperMobileFoto9 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperMobileFoto9.webp";
import SwiperDesctopFoto10 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperDesctopFoto10.webp";
import SwiperTabletFoto10 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperTabletFoto10.webp";
import SwiperMobileFoto10 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperMobileFoto10.webp";
import SwiperDesctopFoto11 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperDesctopFoto11.webp";
import SwiperTabletFoto11 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperTabletFoto11.webp";
import SwiperMobileFoto11 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperMobileFoto11.webp";
import SwiperDesctopFoto12 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperDesctopFoto12.webp";
import SwiperTabletFoto12 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperTabletFoto12.webp";
import SwiperMobileFoto12 from "../Assets/Images/PortfolioPageImages/PortfolioPageSwiperMobileFoto12.webp";
import Logo from "../Assets/Images/HomePageImages/ProjectLogo.svg";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { VIOLET } from "./Button";
import FormModalPage from "./FormModalPage";
import Loader from "./Loader";
import { useEffect, useState } from "react";

function PortfolioPageSlider() {
  const [isPageLoaded, setIsPageLoaded] = useState({
    img1: false,
    img2: false,
    img3: false,
    img4: false,
    img5: false,
    img6: false,
    img7: false,
    img8: false,
    img9: false,
    img10: false,
    img11: false,
    img12: false,
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
      isPageLoaded.img4 &&
      isPageLoaded.img5 &&
      isPageLoaded.img6 &&
      isPageLoaded.img7 &&
      isPageLoaded.img8 &&
      isPageLoaded.img9 &&
      isPageLoaded.img10 &&
      isPageLoaded.img11 &&
      isPageLoaded.img12
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
            isPageLoaded.img4 &&
            isPageLoaded.img5 &&
            isPageLoaded.img6 &&
            isPageLoaded.img7 &&
            isPageLoaded.img8 &&
            isPageLoaded.img9 &&
            isPageLoaded.img10 &&
            isPageLoaded.img11 &&
            isPageLoaded.img12
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
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto5}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth > 1024) {
                setIsPageLoaded((prev) => ({ ...prev, img5: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto5}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 1024 && screenWidth > 480) {
                setIsPageLoaded((prev) => ({ ...prev, img5: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto5}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 480) {
                setIsPageLoaded((prev) => ({ ...prev, img5: true }));
              }
            }}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto6}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth > 1024) {
                setIsPageLoaded((prev) => ({ ...prev, img6: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto6}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 1024 && screenWidth > 480) {
                setIsPageLoaded((prev) => ({ ...prev, img6: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto6}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 480) {
                setIsPageLoaded((prev) => ({ ...prev, img6: true }));
              }
            }}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto7}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth > 1024) {
                setIsPageLoaded((prev) => ({ ...prev, img7: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto7}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 1024 && screenWidth > 480) {
                setIsPageLoaded((prev) => ({ ...prev, img7: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto7}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 480) {
                setIsPageLoaded((prev) => ({ ...prev, img7: true }));
              }
            }}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto8}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth > 1024) {
                setIsPageLoaded((prev) => ({ ...prev, img8: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto8}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 1024 && screenWidth > 480) {
                setIsPageLoaded((prev) => ({ ...prev, img8: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto8}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 480) {
                setIsPageLoaded((prev) => ({ ...prev, img8: true }));
              }
            }}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto9}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth > 1024) {
                setIsPageLoaded((prev) => ({ ...prev, img9: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto9}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 1024 && screenWidth > 480) {
                setIsPageLoaded((prev) => ({ ...prev, img9: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto9}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 480) {
                setIsPageLoaded((prev) => ({ ...prev, img9: true }));
              }
            }}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto10}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth > 1024) {
                setIsPageLoaded((prev) => ({ ...prev, img10: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto10}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 1024 && screenWidth > 480) {
                setIsPageLoaded((prev) => ({ ...prev, img10: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto10}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 480) {
                setIsPageLoaded((prev) => ({ ...prev, img10: true }));
              }
            }}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto11}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth > 1024) {
                setIsPageLoaded((prev) => ({ ...prev, img11: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto11}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 1024 && screenWidth > 480) {
                setIsPageLoaded((prev) => ({ ...prev, img11: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto11}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 480) {
                setIsPageLoaded((prev) => ({ ...prev, img11: true }));
              }
            }}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto12}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth > 1024) {
                setIsPageLoaded((prev) => ({ ...prev, img12: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto12}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 1024 && screenWidth > 480) {
                setIsPageLoaded((prev) => ({ ...prev, img12: true }));
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto12}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 480) {
                setIsPageLoaded((prev) => ({ ...prev, img12: true }));
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
        КОЖЕН КЕЙС - ЦЕ НАША СПІЛЬНА ІСТОРІЯ
      </div>
    </section>
  );
}

export default PortfolioPageSlider;
