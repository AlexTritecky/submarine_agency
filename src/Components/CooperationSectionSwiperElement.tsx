import styles from "../Styling/homePage.module.css";
import { SwiperSlide } from "swiper/react";
import { useState } from "react";
function CooperationSectionSwiperElement() {
  const [isLongPress, setIsLongPress] = useState(false);

  const handleTouchStart = () => {
    console.log("press");
    setIsLongPress(true);
  };

  const handleTouchEnd = () => {
    console.log("release");
    setIsLongPress(false);
  };
  return (
    <SwiperSlide
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className={`${styles.cooperationContainer__sliderItem} ${
        isLongPress ? styles.cooperationContainer__sliderItemPressed : ""
      }`}
    >
      <div className={styles.cooperationContainer__sliderItemHeader}>4.</div>
      <div className={styles.cooperationContainer__sliderItemTitle}>ЗАПУСК</div>
      <div className={styles.cooperationContainer__sliderItemContent}>
        Тут все тільки починається! Знайомство з менеджером твого проекту та
        майбутньою командою
      </div>
    </SwiperSlide>
  );
}

export default CooperationSectionSwiperElement;
