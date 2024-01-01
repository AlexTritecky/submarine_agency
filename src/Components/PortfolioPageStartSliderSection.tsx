import "../Styling/main.css";
import styles from "../Styling/homePage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
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

function PortfolioPageSlider() {
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
            priority
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto1}
            alt="firstSliderImage"
            priority
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto1}
            alt="firstSliderImage"
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto2}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto2}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto2}
            alt="firstSliderImage"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto3}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto3}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto3}
            alt="firstSliderImage"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto4}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto4}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto4}
            alt="firstSliderImage"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto5}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto5}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto5}
            alt="firstSliderImage"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto6}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto6}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto6}
            alt="firstSliderImage"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto7}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto7}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto7}
            alt="firstSliderImage"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto8}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto8}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto8}
            alt="firstSliderImage"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto9}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto9}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto9}
            alt="firstSliderImage"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto10}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto10}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto10}
            alt="firstSliderImage"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto11}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto11}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto11}
            alt="firstSliderImage"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiperFotoDesctop}
            src={SwiperDesctopFoto12}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto12}
            alt="firstSliderImage"
            priority={false}
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto12}
            alt="firstSliderImage"
            priority={false}
          />
        </SwiperSlide>
      </Swiper>
      <div className={styles.startSectionContainer__button}>
        <FormModalPage color={VIOLET} />
      </div>
    </section>
  );
}

export default PortfolioPageSlider;
