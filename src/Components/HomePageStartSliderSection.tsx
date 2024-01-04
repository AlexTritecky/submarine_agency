"use client";
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

import { VIOLET } from "./Button";
import FormModalPage from "./FormModalPage";
import Image from "../../node_modules/next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function HomePageSlider() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isLoaderClosed, setIsLoaderClosed] = useState(false);
  const [screenWidth, setScreenWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 0;
  });
  return (
    <section className={styles.startSectionContainer}>
      {!isLoaderClosed && <Loader isLoaded={isPageLoaded} />}
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
            <Link
              href="/portfolio"
              className={styles.headerContainer__navigationItem}
            >
              Портфоліо
            </Link>
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
                setIsPageLoaded(true);
                setTimeout(() => {
                  setIsLoaderClosed(true);
                }, 500);
              }
            }}
            priority
          />
          <Image
            className={styles.swiperFotoTablet}
            src={SwiperTabletFoto1}
            onLoad={() => {
              if (screenWidth <= 1024 && screenWidth > 480) {
                setIsPageLoaded(true);
                setTimeout(() => {
                  setIsLoaderClosed(true);
                }, 500);
              }
            }}
            alt="firstSliderImage"
            priority
          />
          <Image
            className={styles.swiperFotoMobile}
            src={SwiperMobileFoto1}
            alt="firstSliderImage"
            onLoad={() => {
              if (screenWidth <= 480) {
                setIsPageLoaded(true);
                setTimeout(() => {
                  setIsLoaderClosed(true);
                }, 500);
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
      </Swiper>
      <div className={styles.startSectionContainer__button}>
        <FormModalPage color={VIOLET} />
      </div>
    </section>
  );
}

export default HomePageSlider;
