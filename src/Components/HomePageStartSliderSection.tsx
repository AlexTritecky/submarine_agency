import "../Styling/main.css";
import styles from "../Styling/homePage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperDesctopFoto1 from "../Assets/Images/HomePageImages/HomePageSwiperDesctopFoto1.webp";
import SwiperTabletFoto1 from "../Assets/Images/HomePageImages/HomePageSwiperTabletFoto1.webp";
import SwiperMobileFoto1 from "../Assets/Images/HomePageImages/HomePageSwiperMobileFoto1.webp";
import SwiperDesctopFoto2 from "../Assets/Images/HomePageImages/HomePageSwiperDesctopFoto2.webp";
import SwiperTabletFoto2 from "../Assets/Images/HomePageImages/HomePageSwiperTabletFoto2.webp";
import SwiperMobileFoto2 from "../Assets/Images/HomePageImages/HomePageSwiperMobileFoto2.webp";
import SwiperDesctopFoto3 from "../Assets/Images/HomePageImages/HomePageSwiperDesctopFoto3.webp";
import SwiperTabletFoto3 from "../Assets/Images/HomePageImages/HomePageSwiperTabletFoto3.webp";
import SwiperMobileFoto3 from "../Assets/Images/HomePageImages/HomePageSwiperMobileFoto3.webp";
import Logo from "../Assets/Images/HomePageImages/ProjectLogo.svg";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import BecomeClientButton from "./BecomeClientButton";

function HomePageSlider() {

  return (
    <section className={styles.startSectionContainer}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
      >
        <header className={styles.headerContainer}>
          <Image
            className={styles.headerContainer__logo}
            src={Logo}
            alt="logo"
          />
          <nav className={styles.headerContainer__navigation}>
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
          </nav>
        </header>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto1}
            alt="firstSliderImage"
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto1}
            alt="firstSliderImage"
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto1}
            alt="firstSliderImage"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto2}
            alt="firstSliderImage"
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto2}
            alt="firstSliderImage"
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto2}
            alt="firstSliderImage"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto3}
            alt="firstSliderImage"
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto3}
            alt="firstSliderImage"
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto3}
            alt="firstSliderImage"
          />
        </SwiperSlide>
      </Swiper>
      <BecomeClientButton />
    </section>
  );
}

export default HomePageSlider;
