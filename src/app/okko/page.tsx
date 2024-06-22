"use client";
import FooterSection from "@/Components/Footer";
import MenuBurger from "@/Components/MenuBurgerComponent";
import Image from "next/image";
import HeaderLogo from "../../Assets/Images/RecoverUkraineCaseImages/Logo.svg";
import Logo from "../../Assets/Images/OkkoCaseImages/OkkoMainLogo.svg";
import MobileHeaderBackground from "../../Assets/Images/OkkoCaseImages/OkkoMobile.webp";
import { useEffect, useRef, useState } from "react";
import ServiceArrow from "../../Assets/Images/OkkoCaseImages/ServiceArrow.svg";
// import ServiceMobileArrow from "../../Assets/Images/OkkoCaseImages/ServiceArrow.svg";
import RotatingImageCard from "@/Components/OkkoComponents/RotatingImageCard";
import NonStopMan from "../../Assets/Images/OkkoCaseImages/nonStopMan.webp";
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
import "swiper/css";
import "swiper/css/pagination";
import FuelTruckSlider from "@/Components/OkkoComponents/FuelTruckSlider";
import PulsarVideoDesktop from "../../Assets/videos/okko/PulsarVideoDesktop.mp4";
import BlueCircle from "../../Assets/Images/RecoverUkraineCaseImages/BlueCircle.svg";
import VioletCircle from "../../Assets/Images/OkkoCaseImages/VioletCircle.svg";
import Button, { ARROW_BUTTON_TYPE, VIOLET } from "@/Components/Button";
import Loader from "@/Components/Loader";
const OkkoPage = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isLoaderClosed, setIsLoaderClosed] = useState(false);
  const [dynamicNumber, setNumberState] = useState(1);

  useEffect(() => {
    const updateNumber = () => {
      setNumberState((prevNumber) => {
        return prevNumber === 3 ? 1 : prevNumber + 1;
      });
    };
    const intervalId = setTimeout(() => setInterval(updateNumber, 3000), 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    isPageLoaded &&
      setTimeout(() => {
        setIsLoaderClosed(true);
      }, 500);
  }, [isPageLoaded]);
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const divElement = divRef.current;

    if (divElement) {
      const backgroundImageUrl =
        window.getComputedStyle(divElement).backgroundImage;
      const imageUrl = backgroundImageUrl
        .replace(/^url\(['"]?/, "")
        .replace(/['"]?\)$/, "");
      const img: HTMLImageElement = new window.Image();

      img.src = imageUrl;

      img.onload = function () {
        setIsPageLoaded(true);
      };
    }
  }, []);
  const [screenWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 0;
  });
  // const preventSwipeBeyondFourthSlide = (swiper: any) => {
  //   if (swiper.activeIndex === 2 && screenWidth > 1024) {
  //     swiper.allowSlideNext = false;
  //   } else {
  //     swiper.allowSlideNext = true;
  //   }
  // };
  return (
    <>
      {!isLoaderClosed && <Loader isLoaded={isPageLoaded} />}
      <MenuBurger />
      <div ref={divRef} className={styles.okkoHeaderSection}>
        <Image
          className={styles.okkoHeaderSection__headerLogo}
          src={HeaderLogo}
          alt="HeaderLogo"
        />
        <Image
          onLoad={() => setIsPageLoaded(true)}
          src={MobileHeaderBackground}
          alt="MobileHeaderBackground"
          className={styles.okkoHeaderSection__mobileBackgroundFoto}
        />
      </div>
      <div className={styles.okkoStartSection}>
        <Image
          className={styles.okkoStartSection__logo}
          src={Logo}
          alt="logo"
        ></Image>
        <div className={styles.okkoStartSection__text}>
          Компанія ОККО вже давно виросла з місця, де можна просто заправити
          авто, в улюблену локацію для відпочинку на шляху водіїв
        </div>
        <div className={styles.okkoStartSection__fotosContainer}>
          <div className={styles.okkoStartSection__fotosContainer__leftSection}>
            <div
              className={
                styles.okkoStartSection__fotosContainer__leftSection_upper
              }
            >
              <div
                className={
                  styles.okkoStartSection__fotosContainer__leftSection_upper_card
                }
              >
                Тут можна швидко перекусити або ж взяти вечерю додому, придбати
                автоаксесуари та смаколики в дорогу
                <Image src={ServiceArrow} alt="ServiceArrow" />
              </div>
              <div
                className={`
                 ${
                   styles.okkoStartSection__fotosContainer__leftSection_upper_foto
                 }
                 ${
                   dynamicNumber === 1 &&
                   styles.okkoStartSection__fotosContainer__leftSection_upper_foto1
                 }
                ${
                  dynamicNumber === 2 &&
                  styles.okkoStartSection__fotosContainer__leftSection_upper_foto2
                }
                ${
                  dynamicNumber === 3 &&
                  styles.okkoStartSection__fotosContainer__leftSection_upper_foto3
                }
                 `}
              ></div>
            </div>
            <div
              className={
                styles.okkoStartSection__fotosContainer__leftSection_lower
              }
            >
              {" "}
              <div
                className={`
                 ${
                   styles.okkoStartSection__fotosContainer__leftSection_lower_foto
                 }
                 ${
                   dynamicNumber === 1 &&
                   styles.okkoStartSection__fotosContainer__leftSection_lower_foto1
                 }
                ${
                  dynamicNumber === 2 &&
                  styles.okkoStartSection__fotosContainer__leftSection_lower_foto2
                }
                ${
                  dynamicNumber === 3 &&
                  styles.okkoStartSection__fotosContainer__leftSection_lower_foto1
                }
                 `}
              ></div>
              <div
                className={
                  styles.okkoStartSection__fotosContainer__leftSection_lower_card
                }
              >
                Зарядити електрокар та за необхідності підкачати шини
                <Image src={ServiceArrow} alt="ServiceArrow" />
              </div>
            </div>
          </div>
          <div
            className={`${styles.okkoStartSection__fotosContainer__rightSection}
             ${
               dynamicNumber === 1 &&
               styles.okkoStartSection__fotosContainer__rightSection__rightSectionFoto1
             }
             ${
               dynamicNumber === 2 &&
               styles.okkoStartSection__fotosContainer__rightSection__rightSectionFoto2
             }
             ${
               dynamicNumber === 3 &&
               styles.okkoStartSection__fotosContainer__rightSection__rightSectionFoto3
             }
             
             `}
          >
            <div
              className={
                styles.okkoStartSection__fotosContainer__rightSection_text
              }
            >
              Також постійні відвідувачі знають, що на АЗК можна залишити одяг
              на благодійність і, звісно, залити повний бак пального Pulls задля
              “помсти”
            </div>
            <RotatingImageCard />
          </div>
        </div>
      </div>
      <div className={styles.text}>Відколи ми разом? З 2018</div>
      <div className={styles.okkoStereotypesSection}>
        <div className={styles.okkoStereotypesSection__header}>
          Головний виклик таких тривалих ділових стосунків — це динаміка та
          постійний рух вперед в режимі <span>non stop</span>. Як візуально, так
          і комунікаційно
          <Image src={NonStopMan} alt="NonStopMan" />
        </div>
        <div className={styles.okkoStereotypesSection__title}>
          Чого тільки варто{" "}
          <span>СКРЕАТИВИТИ ТИСЯЧНУ ПОДАЧУ УЛЮБЛЕНИХ ХОТДОГІВ</span> так, наче
          робимо це вперше. Та ми впораємося, навіть в 100 000-й раз [адже самі
          їх обожнюємо]
        </div>
        <div className={styles.okkoStereotypesSection__fotoContainer}>
          <div
            className={styles.okkoStereotypesSection__fotoContainer__foto}
          ></div>
        </div>
        <div className={styles.okkoStereotypesSection__footer}>
          Ми з ОККО руйнуємо міф, що АЗК — лише, щоб заправити свою машину
        </div>
      </div>
      <div className={styles.text}>Що цікавого впроваджували?</div>
      <div className={styles.whatTodoSection}>
        <div className={styles.whatTodoSection__text}>
          <span>КОМУНІКАЦІЙНІ СТРАТЕГІЇ</span> — так-так, їх було кілька, адже
          хоч вайб 2018 року і запам'ятався яскравими фото у стрічці, та 100%
          вже неактуальний
        </div>
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
          scrollbar={{ draggable: true }}
          loop={true}
          slidesPerView={screenWidth > 768 ? 2 : 1}
          className={styles.whatTodoSection__swiper}
          spaceBetween={"6.25vw"}
          mousewheel={screenWidth > 768}
        >
          <SwiperSlide
            className={styles.whatTodoSection__swiper_slide1}
          ></SwiperSlide>
          <SwiperSlide
            className={styles.whatTodoSection__swiper_slide2}
          ></SwiperSlide>
          <SwiperSlide
            className={styles.whatTodoSection__swiper_slide3}
          ></SwiperSlide>
          <SwiperSlide
            className={styles.whatTodoSection__swiper_slide4}
          ></SwiperSlide>
          <SwiperSlide
            className={styles.whatTodoSection__swiper_slide5}
          ></SwiperSlide>
        </Swiper>
        <div className={styles.whatTodoSection__text}>
          <span>ТРЕНДОВИЙ КОНТЕНТ</span> — регулярно відслідковуємо тенденції
          ринку, щоб створювати вірусні публікації, які  залітають в топи та
          набирають шалені охоплення
        </div>
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
          slidesPerView={screenWidth > 768 ? 4 : 2}
          className={styles.whatTodoSection__swiper2}
          // onSlideChange={(swiper: any) => preventSwipeBeyondFourthSlide(swiper)}
          // mousewheel={screenWidth > 768}
        >
          <SwiperSlide
            className={styles.whatTodoSection__swiper2_slide1}
          ></SwiperSlide>
          <SwiperSlide
            className={styles.whatTodoSection__swiper2_slide2}
          ></SwiperSlide>
          <SwiperSlide
            className={styles.whatTodoSection__swiper2_slide3}
          ></SwiperSlide>
          <SwiperSlide
            className={styles.whatTodoSection__swiper2_slide4}
          ></SwiperSlide>
          <SwiperSlide
            className={styles.whatTodoSection__swiper2_slide5}
          ></SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.text}>
        Пристебнися, зараз відбудеться SMM-занурення і ти побачиш, як все
        змінилося за цих 5 років
      </div>
      <FuelTruckSlider />
      <div className={styles.okkoStereotypesSection__title2}>
        Пишаємося, що компанія ОККО одна з перших відновила свою роботу після
        початку повномасштабного вторгнення. Та одразу розпочала активні
        кампанії на підтримку українських захисників та захисниць
      </div>
      <div className={styles.okkoPostsSection}>
        <div className={styles.okkoPostsSection__container}>
          <div className={styles.okkoPostsSection__container_left}>
            <div className={styles.okkoPostsSection__container_left_upper}>
              <div
                className={styles.okkoPostsSection__container_left_upper_card1}
              ></div>
              <div
                className={styles.okkoPostsSection__container_left_upper_card2}
              ></div>
            </div>
            <div className={styles.okkoPostsSection__container_left_lower}>
              <div
                className={styles.okkoPostsSection__container_left_lower_card1}
              ></div>
              <div
                className={styles.okkoPostsSection__container_left_lower_card2}
              ></div>
            </div>
          </div>
          <video
            className={styles.okkoPostsSection__container_right}
            loop
            muted
            autoPlay
            playsInline
          >
            <source src={PulsarVideoDesktop} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className={styles.projectDetailsContainer}>
        <div className={styles.projectDetailsContainer_header}>
          Над проєктом працювали:
        </div>
        <div className={styles.projectDetailsContainer_text}>
          <div className={styles.projectDetailsContainer_job}>
            <Image
              src={screenWidth > 1024 ? BlueCircle : VioletCircle}
              alt="BlueCircle"
            />{" "}
            Designers:{" "}
          </div>
          <div className={styles.projectDetailsContainer_name}>
            Beatrice Lan`, Ilona Pelekh, Yuliia Rieznikova
          </div>
        </div>
        <div className={styles.projectDetailsContainer_text}>
          <div className={styles.projectDetailsContainer_job}>
            {" "}
            <Image
              src={screenWidth > 1024 ? BlueCircle : VioletCircle}
              alt="BlueCircle"
            />{" "}
            Content manager:{" "}
          </div>
          <div className={styles.projectDetailsContainer_name}>
            Alina Shapoval
          </div>
        </div>
        <div className={styles.projectDetailsContainer_text}>
          <div className={styles.projectDetailsContainer_job}>
            <Image
              src={screenWidth > 1024 ? BlueCircle : VioletCircle}
              alt="BlueCircle"
            />{" "}
            Stories manager:{" "}
          </div>
          <div className={styles.projectDetailsContainer_name}>
            Marta Hudyma
          </div>
        </div>
        <div className={styles.projectDetailsContainer_text}>
          <div className={styles.projectDetailsContainer_job}>
            {" "}
            <Image
              src={screenWidth > 1024 ? BlueCircle : VioletCircle}
              alt="BlueCircle"
            />{" "}
            Copywriters:{" "}
          </div>
          <div className={styles.projectDetailsContainer_name}>
            Anna Demchuk, Alina Shapoval
          </div>
        </div>
        <div className={styles.projectDetailsContainer_text}>
          <div className={styles.projectDetailsContainer_job}>
            <Image
              src={screenWidth > 1024 ? BlueCircle : VioletCircle}
              alt="BlueCircle"
            />
            Photographer:
          </div>{" "}
          <div className={styles.projectDetailsContainer_name}>
            Sofia Choruk
          </div>
        </div>

        <a href="/portfolio">
          <Button
            type={ARROW_BUTTON_TYPE}
            text="Подивитись всі кейси"
            color={VIOLET}
          />
        </a>
      </div>

      <FooterSection />
    </>
  );
};

export default OkkoPage;
