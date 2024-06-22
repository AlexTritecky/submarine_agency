import styles from "../Styling/homePage.module.css";
import { SwiperSlide } from "swiper/react";
import { useState } from "react";
interface CooperationSectionSwiperElementProps {
  number: number;
  header: string;
  text: string;
}

const CooperationSectionSwiperElement: React.FC<
  CooperationSectionSwiperElementProps
> = ({ number, header, text }) => {
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
      <div className={styles.cooperationContainer__sliderItemHeader}>
        {number}.
      </div>
      <div className={styles.cooperationContainer__sliderItemTitle}>
        {header}
      </div>
      <div className={styles.cooperationContainer__sliderItemContent}>
        {text}
      </div>
    </SwiperSlide>
  );
};

export default CooperationSectionSwiperElement;
