import styles from "../Styling/homePage.module.css";
import { useState } from "react";
function MenuBurger() {
  const [rotateBurger, setRotateBurger] = useState(false);
  const [moveBurgerLines, setMoveBurgerLines] = useState(false);
  const handleBurger = () => {
    if (!rotateBurger && !moveBurgerLines) {
      setTimeout(() => {
        setRotateBurger(true);
      }, 500);
      setMoveBurgerLines(true);
    } else {
      setMoveBurgerLines(false);
      setRotateBurger(false);
    }
  };
  return (
    <div
      onClick={handleBurger}
      className={`${styles.burgerContainer} ${
        rotateBurger ? styles.burgerContainerOpened : ""
      }`}
    >
      <div
        className={`${styles.burgerContainer__lineOne} ${
          moveBurgerLines ? styles.burgerContainer__lineOneHide : ""
        }`}
      ></div>
      <div
        className={`${styles.burgerContainer__lineTwo} ${
          moveBurgerLines ? styles.burgerContainer__lineTwoMoved : ""
        }`}
      ></div>
      <div
        className={`${styles.burgerContainer__lineThree} ${
          moveBurgerLines ? styles.burgerContainer__lineThreeMoved : ""
        }`}
      ></div>
    </div>
  );
}

export default MenuBurger;
