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
import SwiperCore from "swiper";
import { useState } from "react";
import CooperationSectionSwiperElement from "./CooperationSectionSwiperElement";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const swiperStyles = {
  overflow: "visible !important",
};

function YourComponent() {
  const [isLongPress, setIsLongPress] = useState(false);

  const handleTouchStart = () => {
    console.log("press");
    setIsLongPress(true);
  };

  const handleTouchEnd = () => {
    console.log("release");
    setIsLongPress(false);
  };
  const [screenWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 0;
  });
  return (
    <section id="cooperation" className={styles.cooperationContainer}>
      <div className={styles.cooperationContainer__header}>
        <span className={styles.cooperationContainer__headerTabletHide}>
          НАША З ВАМИ{" "}
        </span>
        СПІВПРАЦЯ
      </div>
      <div className={styles.cooperationContainer__slider}>
        <Swiper
          style={{ ...swiperStyles, overflow: "visible !important" }}
          className={styles.cooperationContainer__swiper}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{
            clickable: true,
            renderBullet: function (index: any) {
              return "";
            },
          }}
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Keyboard,
            Mousewheel,
          ]}
          scrollbar={{ draggable: true }}
          mousewheel={screenWidth > 768}
        >
          <SwiperSlide>
            <CooperationSectionSwiperElement
              number={1}
              header="КОНСУЛЬТАЦІЯ"
              text="15-хвилинний зум-брифінг з нашим стратегом , який оцінить існуючу ситуацію та проблемні зони"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CooperationSectionSwiperElement
              number={2}
              header="ПРОПОЗИЦІЯ"
              text="Ти отримаєш розгорнуту індивідуальну пропозицію по твоєму проєкту"
            />
          </SwiperSlide>

          <SwiperSlide>
            <CooperationSectionSwiperElement
              number={3}
              header="ДОГОВІР"
              text="Після погодження пропозиції ми підписуємо договір про співпрацю та
            надсилаємо перший рахунок"
            />
          </SwiperSlide>

          <SwiperSlide>
            <CooperationSectionSwiperElement
              number={4}
              header="ЗАПУСК"
              text="Тут все тільки починається! Знайомство з менеджером твого проєкту
            та майбутньою командою"
            />
          </SwiperSlide>

          {/* <SwiperSlide className={styles.cooperationContainer__sliderItem}>
            <div className={styles.cooperationContainer__sliderItemHeader}>
              4.
            </div>
            <div className={styles.cooperationContainer__sliderItemTitle}>
              ЗАПУСК
            </div>
            <div className={styles.cooperationContainer__sliderItemContent}>
              Тут все тільки починається! Знайомство з менеджером твого проєкту
              та майбутньою командою
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
      <div className={styles.cooperationContainer__items}>
        <div className={styles.cooperationContainer__sliderDesctopItem}>
          <div className={styles.cooperationContainer__sliderItemHeader}>
            1.
          </div>
          <div className={styles.cooperationContainer__sliderItemTitle}>
            КОНСУЛЬТАЦІЯ
          </div>
          <div className={styles.cooperationContainer__sliderItemContent}>
            15-хвилинний зум-брифінг з нашим стратегом , який оцінить існуючу
            ситуацію та проблемні зони
          </div>
        </div>
        <div className={styles.cooperationContainer__sliderDesctopItem}>
          <div className={styles.cooperationContainer__sliderItemHeader}>
            2.
          </div>
          <div className={styles.cooperationContainer__sliderItemTitle}>
            ПРОПОЗИЦІЯ
          </div>
          <div className={styles.cooperationContainer__sliderItemContent}>
            Ти отримаєш розгорнуту індивідуальну пропозицію по твоєму проєкту
          </div>
        </div>
        <div className={styles.cooperationContainer__sliderDesctopItem}>
          <div className={styles.cooperationContainer__sliderItemHeader}>
            3.
          </div>
          <div className={styles.cooperationContainer__sliderItemTitle}>
            ДОГОВІР
          </div>
          <div className={styles.cooperationContainer__sliderItemContent}>
            Після погодження пропозиції ми підписуємо договір про співпрацю та
            надсилаємо перший рахунок
          </div>
        </div>
        <div className={styles.cooperationContainer__sliderDesctopItem}>
          <div className={styles.cooperationContainer__sliderItemHeader}>
            4.
          </div>
          <div className={styles.cooperationContainer__sliderItemTitle}>
            ЗАПУСК
          </div>
          <div className={styles.cooperationContainer__sliderItemContent}>
            Тут все тільки починається! Знайомство з менеджером твого проєкту та
            майбутньою командою
          </div>
        </div>
      </div>
    </section>
  );
}

export default YourComponent;
