import "../Styling/main.css";
import styles from "../Styling/homePage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperDesctopFoto1 from "../Assets/Images/HomePageImages/HomePageSwiperDesctopFoto1.png";
import SwiperTabletFoto1 from "../Assets/Images/HomePageImages/HomePageSwiperTabletFoto1.png";
import SwiperMobileFoto1 from "../Assets/Images/HomePageImages/HomePageSwiperMobileFoto1.png";
import SwiperDesctopFoto2 from "../Assets/Images/HomePageImages/HomePageSwiperDesctopFoto2.png";
import SwiperTabletFoto2 from "../Assets/Images/HomePageImages/HomePageSwiperTabletFoto2.png";
import SwiperMobileFoto2 from "../Assets/Images/HomePageImages/HomePageSwiperMobileFoto2.png";
import SwiperDesctopFoto3 from "../Assets/Images/HomePageImages/HomePageSwiperDesctopFoto3.png";
import SwiperTabletFoto3 from "../Assets/Images/HomePageImages/HomePageSwiperTabletFoto3.png";
import SwiperMobileFoto3 from "../Assets/Images/HomePageImages/HomePageSwiperMobileFoto3.png";
import Logo from "../Assets/Images/HomePageImages/ProjectLogo.svg";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { useEffect, useState } from "react";
import BecomeClientButton from "./BecomeClientButton";
import MenuBurger from "./MenuBurgerComponent";

function HomePageSlider() {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const getSwiperFoto1 = () => {
    if (screenWidth > 1024) {
      return SwiperDesctopFoto1;
    } else if (screenWidth <= 1024 && screenWidth > 480) {
      return SwiperTabletFoto1;
    } else {
      return SwiperMobileFoto1;
    }
  };
  const getSwiperFoto2 = () => {
    if (screenWidth > 1024) {
      return SwiperDesctopFoto2;
    } else if (screenWidth <= 1024 && screenWidth > 480) {
      return SwiperTabletFoto2;
    } else {
      return SwiperMobileFoto2;
    }
  };
  const getSwiperFoto3 = () => {
    if (screenWidth > 1024) {
      return SwiperDesctopFoto3;
    } else if (screenWidth <= 1024 && screenWidth > 480) {
      return SwiperTabletFoto3;
    } else {
      return SwiperMobileFoto3;
    }
  };

  return (
    <div className={styles.startSectionContainer}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
      >
        <div className={styles.headerContainer}>
          <Image
            className={styles.headerContainer__logo}
            src={Logo}
            alt="ssd"
          />
          <div className={styles.headerContainer__navigation}>
            <div className={styles.headerContainer__navigationItem}>
              Про нас
            </div>
            <div className={styles.headerContainer__navigationItem}>
              Послуги
            </div>
            <div className={styles.headerContainer__navigationItem}>
              Портфоліо
            </div>
            <div className={styles.headerContainer__navigationItem}>
              Клієнти
            </div>
            <div className={styles.headerContainer__navigationItem}>
              Співпраця
            </div>
          </div>
              <MenuBurger />
        </div>
        <SwiperSlide>
          <Image
            className={styles.swiperFoto}
            src={getSwiperFoto1()}
            alt="firstSliderImage"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFoto}
            src={getSwiperFoto2()}
            alt="secondSliderImage"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFoto}
            src={getSwiperFoto3()}
            alt="thirdSliderImage"
          />
        </SwiperSlide>
      </Swiper>
      <BecomeClientButton />
    </div>
  );
}

export default HomePageSlider;
