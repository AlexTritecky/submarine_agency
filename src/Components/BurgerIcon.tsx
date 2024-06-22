import styles from "../Styling/menuBurger.module.css";
import { useCallback, useEffect, useState } from "react";
function Burger({ handleBurgerOpen, rotateBurger, moveBurgerLines }: any) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const handleScroll = useCallback(() => {
    setHasScrolled(
      window.innerWidth > 768 ? window.scrollY > 400 : window.scrollY > 200
    );
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => console.log("dd2d"));
    };
  }, []);
  return (
    <>
      <div
        onClick={handleBurgerOpen}
        className={`${styles.burgerContainer} ${
          rotateBurger ? styles.burgerContainerOpened : ""
        } ${!rotateBurger && hasScrolled ? styles.burgerToRightSide : ""} `}
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
    </>
  );
}

export default Burger;
