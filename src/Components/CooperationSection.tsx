import styles from "../Styling/homePage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperCore from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const swiperStyles = {
  overflow: "visible !important",
};

function YourComponent() {
  return (
    <section className={styles.cooperationContainer}>
      <div className={styles.cooperationContainer__header}>
        НАША З ВАМИ СПІВПРАЦЯ
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
          <SwiperSlide className={styles.cooperationContainer__sliderItem}>
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
          <SwiperSlide className={styles.cooperationContainer__sliderItem}>
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
          <SwiperSlide className={styles.cooperationContainer__sliderItem}>
            <div className={styles.cooperationContainer__sliderItemHeader}>
              3.
            </div>
            <div className={styles.cooperationContainer__sliderItemTitle}>
              ДОГОВІР
            </div>
            <div className={styles.cooperationContainer__sliderItemContent}>
              Після погодження пропозиції ми підписуємо договір про співпрацю та
              надсилаємо першийрахунок
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.cooperationContainer__sliderItem}>
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
    </section>
  );
}

export default YourComponent;
