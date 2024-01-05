import styles from "../Styling/homePage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperCore from "swiper";
import { useState } from "react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const swiperStyles = {
  overflow: "visible !important",
};

function YourComponent() {
  const [isLongPress, setIsLongPress] = useState("");

  const handleTouchStart = ({ id }: any) => {
    console.log("press");
    setIsLongPress(id);
  };

  const handleTouchEnd = () => {
    console.log("release");
    setIsLongPress("");
  };
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
          style={swiperStyles}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
            renderBullet: function (index: any) {
              return "";
            },
          }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide
            id="1"
            onTouchStart={() => handleTouchStart("1")}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            className={`${styles.cooperationContainer__sliderItem} ${
              isLongPress === "1"
                ? styles.cooperationContainer__sliderItemPressed
                : ""
            }`}
          >
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
          </SwiperSlide>
          <SwiperSlide
            id="2"
            className={`${styles.cooperationContainer__sliderItem} ${
              isLongPress === "2"
                ? styles.cooperationContainer__sliderItemPressed
                : ""
            }`}
          >
            <div className={styles.cooperationContainer__sliderItemHeader}>
              2.
            </div>
            <div className={styles.cooperationContainer__sliderItemTitle}>
              ПРОПОЗИЦІЯ
            </div>
            <div className={styles.cooperationContainer__sliderItemContent}>
              Ти отримаєш розгорнуту індивідуальну пропозицію по твоєму проекту
            </div>
          </SwiperSlide>
          <SwiperSlide
            id="3"
            className={`${styles.cooperationContainer__sliderItem} ${
              isLongPress === "3"
                ? styles.cooperationContainer__sliderItemPressed
                : ""
            }`}
          >
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
          </SwiperSlide>
          <SwiperSlide
            id="4"
            className={`${styles.cooperationContainer__sliderItem} ${
              isLongPress === "4"
                ? styles.cooperationContainer__sliderItemPressed
                : ""
            }`}
          >
            <div className={styles.cooperationContainer__sliderItemHeader}>
              4.
            </div>
            <div className={styles.cooperationContainer__sliderItemTitle}>
              ЗАПУСК
            </div>
            <div className={styles.cooperationContainer__sliderItemContent}>
              Тут все тільки починається! Знайомство з менеджером твого проекту
              та майбутньою командою
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.cooperationContainer__items}>
        <div className={styles.cooperationContainer__sliderItem}>
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
        <div className={styles.cooperationContainer__sliderItem}>
          <div className={styles.cooperationContainer__sliderItemHeader}>
            2.
          </div>
          <div className={styles.cooperationContainer__sliderItemTitle}>
            ПРОПОЗИЦІЯ
          </div>
          <div className={styles.cooperationContainer__sliderItemContent}>
            Ти отримаєш розгорнуту індивідуальну пропозицію по твоєму проекту
          </div>
        </div>
        <div className={styles.cooperationContainer__sliderItem}>
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
        <div className={styles.cooperationContainer__sliderItem}>
          <div className={styles.cooperationContainer__sliderItemHeader}>
            4.
          </div>
          <div className={styles.cooperationContainer__sliderItemTitle}>
            ЗАПУСК
          </div>
          <div className={styles.cooperationContainer__sliderItemContent}>
            Тут все тільки починається! Знайомство з менеджером твого проекту та
            майбутньою командою
          </div>
        </div>
      </div>
    </section>
  );
}

export default YourComponent;
