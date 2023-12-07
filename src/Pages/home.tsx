import Link from "next/link";
import "../Styling/main.css";

import styles from "../Styling/homePage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperDesctopFoto1 from "../Assets/Images/HomePageImages/HomePageSwiperDesctopFoto1.svg";
import SwiperTabletFoto1 from "../Assets/Images/HomePageImages/HomePageSwiperTabletFoto1.svg";
import SwiperDesctopFoto2 from "../Assets/Images/HomePageImages/HomePageSwiperDesctopFoto2.svg";
import SwiperTabletFoto2 from "../Assets/Images/HomePageImages/HomePageSwiperTabletFoto2.svg";
import SwiperDesctopFoto3 from "../Assets/Images/HomePageImages/HomePageSwiperDesctopFoto3.svg";
import SwiperTabletFoto3 from "../Assets/Images/HomePageImages/HomePageSwiperTabletFoto3.svg";
import Logo from "../Assets/Images/HomePageImages/ProjectLogo.svg";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { useEffect, useState } from "react";

function HomePage() {
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
    if (screenWidth > 768) {
      return SwiperDesctopFoto1;
    } else {
      return SwiperTabletFoto1;
    }
  };
  const getSwiperFoto2 = () => {
    if (screenWidth > 768) {
      return SwiperDesctopFoto2;
    } else {
      return SwiperTabletFoto2;
    }
  };
  const getSwiperFoto3 = () => {
    if (screenWidth > 768) {
      return SwiperDesctopFoto3;
    } else {
      return SwiperTabletFoto3;
    }
  };
  return (
    <div className={styles.startSectionContainer}>
      {/* home
      <Link className={styles.good} href="/portfolio">
        Portfolio
      </Link>
      <Link href="/team">Team</Link> */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        onSwiper={(swiper: any) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
        </div>
        <SwiperSlide>
          <Image className={styles.swiperFoto} src={getSwiperFoto1()} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.swiperFoto} src={getSwiperFoto2()} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.swiperFoto} src={getSwiperFoto3()} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomePage;
