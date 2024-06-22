import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "../../Styling/okko.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Mousewheel,
} from "swiper/modules";
import RoadSign2019 from "../../Assets/Images/OkkoCaseImages/Sign2019.svg";
import RoadSign2020 from "../../Assets/Images/OkkoCaseImages/Sign2020.svg";
import RoadSign2021 from "../../Assets/Images/OkkoCaseImages/Sign2021.svg";
import RoadSign2022 from "../../Assets/Images/OkkoCaseImages/Sign2022.svg";
import RoadSign2023 from "../../Assets/Images/OkkoCaseImages/Sign2023.svg";
import Video2019 from "../../Assets/videos/okko/2019Phone.mp4";
import Video2020 from "../../Assets/videos/okko/2020Phone.mp4";
import Video2021 from "../../Assets/videos/okko/2021Phone.mp4";
import Video2022 from "../../Assets/videos/okko/2022Phone.mp4";
import Video2023 from "../../Assets/videos/okko/2023Phone.mp4";
import MobileFrame from "../../Assets/Images/OkkoCaseImages/mobFrame.svg";
import Truck from "../../Assets/Images/OkkoCaseImages/Truck.webp";
import "swiper/css";
import "swiper/css/pagination";

const FuelTruckSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperHandler = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };
  return (
    <div className={styles.fuelTruckSlider}>
      <div className={styles.fuelTruckSlider__videoContainer}>
        {activeIndex === 0 && (
          <video loop muted autoPlay playsInline>
            <source src={Video2019} type="video/mp4" />
          </video>
        )}
        {activeIndex === 1 && (
          <video loop muted autoPlay playsInline>
            <source src={Video2020} type="video/mp4" />
          </video>
        )}
        {activeIndex === 2 && (
          <video loop muted autoPlay playsInline>
            <source src={Video2021} type="video/mp4" />
          </video>
        )}
        {activeIndex === 3 && (
          <video loop muted autoPlay playsInline>
            <source src={Video2022} type="video/mp4" />
          </video>
        )}
        {activeIndex === 4 && (
          <video loop muted autoPlay playsInline>
            <source src={Video2023} type="video/mp4" />
          </video>
        )}
        <Image src={MobileFrame} alt="" />
      </div>
      <Image className={styles.fuelTruckSlider__truck} src={Truck} alt="" />
      {activeIndex === 0 && (
        <Image
          className={styles.fuelTruckSlider__roadSign}
          src={RoadSign2019}
          alt=""
        />
      )}
      {activeIndex === 1 && (
        <Image
          className={styles.fuelTruckSlider__roadSign}
          src={RoadSign2020}
          alt=""
        />
      )}
      {activeIndex === 2 && (
        <Image
          className={styles.fuelTruckSlider__roadSign}
          src={RoadSign2021}
          alt=""
        />
      )}
      {activeIndex === 3 && (
        <Image
          className={styles.fuelTruckSlider__roadSign}
          src={RoadSign2022}
          alt=""
        />
      )}
      {activeIndex === 4 && (
        <Image
          className={styles.fuelTruckSlider__roadSign}
          src={RoadSign2023}
          alt=""
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
        navigation
        loop={true}
        scrollbar={{ draggable: true }}
        className={styles.fuelTruckSlider__swiper}
        onSlideChange={(swiper: any) => swiperHandler(swiper)}
        mousewheel={true}
      >
        <SwiperSlide
          className={styles.fuelTruckSlider__swiper_slide1}
        ></SwiperSlide>
        <SwiperSlide
          className={styles.fuelTruckSlider__swiper_slide2}
        ></SwiperSlide>
        <SwiperSlide
          className={styles.fuelTruckSlider__swiper_slide3}
        ></SwiperSlide>
        <SwiperSlide
          className={styles.fuelTruckSlider__swiper_slide4}
        ></SwiperSlide>
        <SwiperSlide
          className={styles.fuelTruckSlider__swiper_slide5}
        ></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FuelTruckSlider;
