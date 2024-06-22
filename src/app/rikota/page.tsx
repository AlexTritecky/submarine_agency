"use client";
import FooterSection from "@/Components/Footer";
import MenuBurger from "@/Components/MenuBurgerComponent";
import Image from "next/image";
import HeaderLogo from "../../Assets/Images/RecoverUkraineCaseImages/Logo.svg";
import styles from "../../Styling/rikota.module.css";
import Button, { ARROW_BUTTON_TYPE, VIOLET } from "../../Components/Button";
import BlueCircle from "../../Assets/Images/RecoverUkraineCaseImages/BlueCircle.svg";
import MobileHeaderBackground from "../../Assets/Images/RikotaCaseImages/RikotaMobile.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ArrowIcon from "../../Assets/Images/RikotaCaseImages/VioletArrowIcon.svg";
import WhiteArrowIcon from "../../Assets/Images/RikotaCaseImages/WhiteArrowIcon.svg";
import SmallTabletIcon from "../../Assets/Images/RikotaCaseImages/SmallTabletIcon.svg";
import SmallMobileIcon from "../../Assets/Images/RikotaCaseImages/SmallMobileIcon.svg";
import { useEffect, useState } from "react";
import Loader from "@/Components/Loader";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Mousewheel,
} from "swiper/modules";

const RikotaPage = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isLoaderClosed, setIsLoaderClosed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 2500);
  }, []);
  useEffect(() => {
    isPageLoaded &&
      setTimeout(() => {
        setIsLoaderClosed(true);
      }, 500);
  }, [isPageLoaded]);
  const [screenWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 0;
  });
  return (
    <>
      {!isLoaderClosed && <Loader isLoaded={isPageLoaded} />}
      <MenuBurger />
      <div className={styles.recoverUkraineHeaderSection}>
        <Image
          className={styles.recoverUkraineHeaderSection__headerLogo}
          src={HeaderLogo}
          alt="HeaderLogo"
        />
        <Image
          src={MobileHeaderBackground}
          alt="MobileHeaderBackground"
          onLoad={() => setIsPageLoaded(true)}
          className={styles.recoverUkraineHeaderSection__mobileBackgroundFoto}
        />
      </div>
      <div>
        <div className={styles.rikotaGeneralInfo}>
          <div className={styles.rikotaGeneralInfo__logo}></div>
          <div className={styles.rikotaGeneralInfo__header}>
            Це парасольковий бренд з повним циклом напрямів, пов'язаних із
            здоров'ям та красою усмішки
          </div>
          <div className={styles.rikotaGeneralInfo__text}>
            Є лідером з використання цифрових технологій у стоматології. Rikota
            використовує сучасні рішення і доводить, що лікування зубів може
            бути швидким та безболісним
          </div>
          <div className={styles.rikotaGeneralInfo__image}></div>
        </div>
        <div className={styles.rikotaBrandInfo}>
          <div className={styles.rikotaHeader}>
            RIKOTA - CФОРМОВАНИЙ БРЕНД З ДОСВІДОМ РОБОТИ ПОНАД 33 РОКИ
          </div>
          <div className={styles.rikotaSubHeader}>
            Компанія має лояльну аудиторію та базу постійних клієнтів. Проте
            було відсутнє розуміння, як їх перетворити на амбасадорів бренду:
          </div>
          <div className={styles.rikotaGeneralInfo__header2}>
            <Image src={ArrowIcon} alt="ArrowIcon" /> які етапи взаємодії з
            брендом проходять клієнти
          </div>
          <div className={styles.rikotaGeneralInfo__header2}>
            <Image src={ArrowIcon} alt="ArrowIcon" /> які бар’єри виникають на
            їхньому шляху
          </div>
          <div className={styles.rikotaGeneralInfo__header2}>
            <Image src={ArrowIcon} alt="ArrowIcon" /> які точки контакту варто
            вдосконалити, щоб покращити взаємодію з клієнтами
          </div>
          <div className={styles.rikotaBrandInfo__conclusion}>
            Праця була кропітка, адже треба було придумати щось зовсім нове у їх
            сфері і тому ми…
          </div>
        </div>
        <div className={styles.rikotaResearch}>
          <div className={styles.rikotaHeader}>
            ПРОВЕЛИ RESEARCH МІЖНАРОДНОГО РИНКУ
          </div>
          <div className={styles.rikotaResearch__subHeader}>
            та з’ясували стоматологічні тенденції поточного та наступних років
          </div>
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
          slidesPerView={"auto"}
          spaceBetween={screenWidth > 768 ? 32 : 16}
          className={styles.rikotaResearch__swiper}
          mousewheel={screenWidth > 768}
        >
          <SwiperSlide className={styles.rikotaResearch__swiper_slide1}>
            ЯКІСНЕ <br></br> ДОСЛІДЖЕННЯ
          </SwiperSlide>
          <SwiperSlide
            className={styles.rikotaResearch__swiper_slide2}
          ></SwiperSlide>
          <SwiperSlide
            className={styles.rikotaResearch__swiper_slide3}
          ></SwiperSlide>
          <SwiperSlide
            className={styles.rikotaResearch__swiper_slide4}
          ></SwiperSlide>
        </Swiper>
        <div className={styles.rikotaResearch__swiperTablet}>
          <div className={styles.rikotaResearch__swiperTablet_slide1}>
            ЯКІСНЕ <br></br> ДОСЛІДЖЕННЯ
          </div>
          <div className={styles.rikotaResearch__swiperTablet_slide2}></div>
          <div className={styles.rikotaResearch__swiperTablet_slide3}></div>
          <div className={styles.rikotaResearch__swiperTablet_slide4}></div>
        </div>
        <div className={styles.rikotaDeepAnalisis}>
          <div className={styles.rikotaDeepAnalisis__header}>
            ЗРОБИЛИ ГЛИБИННИЙ АНАЛІЗ АУДИТОРІЇ
          </div>
          <div className={styles.rikotaDeepAnalisis__rikotaSubHeader}>
            за допомогою якого визначили основні драйвери та бар'єри, котрі
            стоять між клінікою та її пацієнтами
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
            slidesPerView={"auto"}
            spaceBetween={screenWidth > 768 ? 32 : 16}
            className={styles.rikotaDeepAnalisis__swiper1}
            mousewheel={screenWidth > 768}
          >
            <SwiperSlide className={styles.rikotaDeepAnalisis__swiper1_slide1}>
              <div>КІЛЬКІСНЕ ДОСЛІДЖЕННЯ</div>
            </SwiperSlide>
            <SwiperSlide className={styles.rikotaDeepAnalisis__swiper1_slide2}>
              <div></div>
            </SwiperSlide>
            <SwiperSlide
              className={styles.rikotaDeepAnalisis__swiper1_slide3}
            ></SwiperSlide>
            <SwiperSlide
              className={styles.rikotaDeepAnalisis__swiper1_slide4}
            ></SwiperSlide>
          </Swiper>
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
            slidesPerView={"auto"}
            spaceBetween={screenWidth > 768 ? 32 : 16}
            className={styles.rikotaDeepAnalisis__swiper2}
            mousewheel={screenWidth > 768}
          >
            <SwiperSlide className={styles.rikotaDeepAnalisis__swiper2_slide1}>
              АНАЛІЗ <br></br>РИНКУ
            </SwiperSlide>
            <SwiperSlide className={styles.rikotaDeepAnalisis__swiper2_slide2}>
              <div></div>
            </SwiperSlide>
            <SwiperSlide
              className={styles.rikotaDeepAnalisis__swiper2_slide3}
            ></SwiperSlide>
            <SwiperSlide
              className={styles.rikotaDeepAnalisis__swiper2_slide4}
            ></SwiperSlide>
          </Swiper>
          <div className={styles.rikotaDeepAnalisis__swiperTablet1}>
            <div className={styles.rikotaDeepAnalisis__swiperTablet1_slide1}>
              КІЛЬКІСНЕ <br></br> ДОСЛІДЖЕННЯ
            </div>
            <div
              className={styles.rikotaDeepAnalisis__swiperTablet1_slide2}
            ></div>
            <div
              className={styles.rikotaDeepAnalisis__swiperTablet1_slide3}
            ></div>
            <div
              className={styles.rikotaDeepAnalisis__swiperTablet1_slide4}
            ></div>
          </div>

          <div className={styles.rikotaDeepAnalisis__swiperTablet2}>
            <div className={styles.rikotaDeepAnalisis__swiperTablet2_slide1}>
              АНАЛІЗ <br></br>РИНКУ
            </div>
            <div
              className={styles.rikotaDeepAnalisis__swiperTablet2_slide2}
            ></div>
            <div
              className={styles.rikotaDeepAnalisis__swiperTablet2_slide3}
            ></div>
            <div
              className={styles.rikotaDeepAnalisis__swiperTablet2_slide4}
            ></div>
          </div>
          <div className={styles.rikotaDeepAnalisis__header}>
            ПРОВЕЛИ БІЛЬШЕ 20 “ЖИВИХ” ОПИТУВАНЬ
          </div>
          <div className={styles.rikotaDeepAnalisis__rikotaSubHeader}>
            Всі розмови після зустрічей були транскрибовані
          </div>
        </div>
        <div className={styles.rikotaCustomerJourney}>
          <div className={styles.rikotaHeader}>
            ОСОБИСТО ПРОЙШЛИ CUSTOMER JOURNEY [ШЛЯХ СПОЖИВАЧА]—
          </div>
          <div className={styles.rikotaResearch__subHeader}>
            стали їхнім таємним клієнтом. Так нам вдалося дослідити процеси
            комунікації зсередини і звернути увагу на вирішальні моменти.
            Зафіксувати найважливіші точки контакту на кожному етапі взаємодії
            клієнта з клінікою та запропонувати унікальні сервісні фішки для
            покращення.
          </div>
          <div className={styles.rikotaCustomerJourney__toothImage}></div>
          <div className={styles.rikotaCustomerJourney__customerSteps}>
            <div className={styles.rikotaCustomerJourney__customerStep}>
              <div
                className={styles.rikotaCustomerJourney__customerStep_header}
              >
                00
              </div>
              <div className={styles.rikotaCustomerJourney__customerStep_text}>
                Потреба в стоматологічних послугах та/чи тригер
              </div>
            </div>

            <div className={styles.rikotaCustomerJourney__customerStep}>
              <div
                className={styles.rikotaCustomerJourney__customerStep_header}
              >
                01
              </div>
              <div className={styles.rikotaCustomerJourney__customerStep_text}>
                Перше повідомлення  в Direct або дзвінок  через сайт - запис
              </div>
            </div>

            <div className={styles.rikotaCustomerJourney__customerStep}>
              <div
                className={styles.rikotaCustomerJourney__customerStep_header}
              >
                02
              </div>
              <div className={styles.rikotaCustomerJourney__customerStep_text}>
                Вчасне нагадування про візит в клініку
              </div>
            </div>

            <div className={styles.rikotaCustomerJourney__customerStep}>
              <div
                className={styles.rikotaCustomerJourney__customerStep_header}
              >
                03
              </div>
              <div className={styles.rikotaCustomerJourney__customerStep_text}>
                Перша зустріч та взаємодія з персоналом
              </div>
            </div>

            <div className={styles.rikotaCustomerJourney__customerStep}>
              <div
                className={styles.rikotaCustomerJourney__customerStep_header}
              >
                04
              </div>
              <div className={styles.rikotaCustomerJourney__customerStep_text}>
                Консультація, надання послуг та формування чіткого плану дій
              </div>
            </div>

            <div className={styles.rikotaCustomerJourney__customerStep}>
              <div
                className={styles.rikotaCustomerJourney__customerStep_header}
              >
                05
              </div>
              <div className={styles.rikotaCustomerJourney__customerStep_text}>
                Підбір догляду за  ротовою порожниною
              </div>
            </div>

            <div className={styles.rikotaCustomerJourney__customerStep}>
              <div
                className={styles.rikotaCustomerJourney__customerStep_header}
              >
                06
              </div>
              <div className={styles.rikotaCustomerJourney__customerStep_text}>
                Упакування «Health пакету» та вихід з клініки
              </div>
            </div>

            <div className={styles.rikotaCustomerJourney__customerStep}>
              <div
                className={styles.rikotaCustomerJourney__customerStep_header}
              >
                07
              </div>
              <div className={styles.rikotaCustomerJourney__customerStep_text}>
                Контакт ведучого  лікаря з пацієнтом в період реабілітації
              </div>
            </div>
          </div>
          <div className={styles.rikotaHeader}>
            ВИЗНАЧИЛИ ЧІТКІ ЦІЛІ ПРОСУВАННЯ:
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
            initialSlide={1}
            scrollbar={{ draggable: true }}
            loop={true}
            slidesPerView={"auto"}
            spaceBetween={screenWidth > 768 ? 32 : 16}
            className={styles.aimsSwiper}
            mousewheel={screenWidth > 768}
          >
            <SwiperSlide className={styles.aimsSwiper__slide}>
              <div className={styles.aimsSwiper_slideHeader}>
                {" "}
                ВПІЗНАВАНІСТЬ
              </div>
              <div className={styles.aimsSwiper_text}>
                <Image src={WhiteArrowIcon} alt="WhiteArrowIcon" />
                key-visual
              </div>
              <div className={styles.aimsSwiper_text}>
                <Image src={WhiteArrowIcon} alt="WhiteArrowIcon" />
                key-message
              </div>
              <div className={styles.aimsSwiper_text}>
                <Image src={WhiteArrowIcon} alt="WhiteArrowIcon" />
                охоплення
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.aimsSwiper__slide}>
              <div className={styles.aimsSwiper_slideHeader}>КОМ`ЮНІТІ</div>
              <div className={styles.aimsSwiper_text}>
                <Image src={WhiteArrowIcon} alt="WhiteArrowIcon" />
                амбасадори
              </div>
              <div className={styles.aimsSwiper_text}>
                <Image src={WhiteArrowIcon} alt="WhiteArrowIcon" />
                обличчя бренду
              </div>
              <div className={styles.aimsSwiper_text}>
                <Image src={WhiteArrowIcon} alt="WhiteArrowIcon" />
                ugс-креатори
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.aimsSwiper__slide}>
              <div className={styles.aimsSwiper_slideHeader}>ОСВІТА</div>
              <div className={styles.aimsSwiper_text}>
                <Image src={WhiteArrowIcon} alt="WhiteArrowIcon" />
                гайди
              </div>
              <div className={styles.aimsSwiper_text}>
                <Image src={WhiteArrowIcon} alt="WhiteArrowIcon" />
                чек-листи
              </div>
              <div className={styles.aimsSwiper_text}>
                <Image src={WhiteArrowIcon} alt="WhiteArrowIcon" />
                відео-уроки
              </div>
            </SwiperSlide>
          </Swiper>{" "}
          <div className={styles.rikotaHeader}>
            РОЗРОБИЛИ SMM GUIDE ПІД TOV КЛІНІКИ
          </div>
          <div className={styles.aimsSwiper__subHeader}>
            та згенерували промоційні ідеї для зовнішнього розвитку бренду
          </div>
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
          slidesPerView={"auto"}
          spaceBetween={screenWidth > 768 ? 32 : 16}
          className={styles.rikotaCustomerJourney__swiper}
          mousewheel={screenWidth > 768}
        >
          <SwiperSlide className={styles.rikotaCustomerJourney__swiper_slide1}>
            SMM-ГАЙД
          </SwiperSlide>
          <SwiperSlide className={styles.rikotaCustomerJourney__swiper_slide2}>
            <div></div>
          </SwiperSlide>
          <SwiperSlide
            className={styles.rikotaCustomerJourney__swiper_slide3}
          ></SwiperSlide>
          <SwiperSlide
            className={styles.rikotaCustomerJourney__swiper_slide4}
          ></SwiperSlide>
        </Swiper>{" "}
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
          slidesPerView={"auto"}
          spaceBetween={screenWidth > 768 ? 32 : 16}
          className={styles.rikotaCustomerJourney__swiper2}
          mousewheel={screenWidth > 768}
        >
          <SwiperSlide className={styles.rikotaCustomerJourney__swiper2_slide1}>
            TOV
          </SwiperSlide>
          <SwiperSlide className={styles.rikotaCustomerJourney__swiper2_slide2}>
            <div></div>
          </SwiperSlide>
          <SwiperSlide
            className={styles.rikotaCustomerJourney__swiper2_slide3}
          ></SwiperSlide>
        </Swiper>
        <div className={styles.rikotaCustomerJourney__swiperTablet}>
          <div className={styles.rikotaCustomerJourney__swiperTablet_slide1}>
            SMM-ГАЙД
          </div>
          <div
            className={styles.rikotaCustomerJourney__swiperTablet_slide2}
          ></div>
          <div
            className={styles.rikotaCustomerJourney__swiperTablet_slide3}
          ></div>
          <div
            className={styles.rikotaCustomerJourney__swiperTablet_slide4}
          ></div>
        </div>
        <div className={styles.rikotaCustomerJourney__swiperTablet}>
          <div className={styles.rikotaCustomerJourney__swiperTablet2_slide1}>
            TOV
          </div>
          <div
            className={styles.rikotaCustomerJourney__swiperTablet2_slide2}
          ></div>
          <div
            className={styles.rikotaCustomerJourney__swiperTablet2_slide3}
          ></div>
        </div>
        <div className={styles.rikotaEndSection}>
          <div className={styles.rikotaEndSection__header}>
            THE END? NOOOOOOOOOOOOOOOOOO
          </div>
          <div className={styles.rikotaEndSection__subheader}>
            Після сформованої комунікаційної стратегії клієнт вирішив одразу
            діяти. Тож ми розробили банерну рекламу з урахуванням оновленого
            позиціонування
          </div>
          <div className={styles.rikotaEndSection__subheader}>
            Звичайно, ми не забули про особливості реклами у медичній сфері та
            правила побудови композиції з відповідним написом{" "}
          </div>
          <div className={styles.rikotaEndSection__text}>
            “САМОЛІКУВАННЯ МОЖЕ БУТИ ШКІДЛИВИМ ДЛЯ ВАШОГО ЗДОРОВ’Я”
          </div>
          <div className={styles.rikotaEndSection__subHeader}>
            Підказка: він займає 30% дизайну
          </div>
        </div>
        <div className={styles.rikotaBanner}></div>
        <div className={styles.message}>
          Весь процес реалізації цього проєкту тривав 2 місяці
        </div>
      </div>
      <div className={styles.projectDetailsContainer}>
        <div className={styles.projectDetailsContainer_header}>
          Над проєктом працювали:
        </div>
        <div className={styles.projectDetailsContainer_text}>
          <div>
            <Image
              src={
                screenWidth > 1024
                  ? BlueCircle
                  : screenWidth > 480
                  ? SmallTabletIcon
                  : SmallMobileIcon
              }
              alt="BlueCircle"
            />{" "}
            Strategist:{" "}
          </div>
          <span>Yuliia Bazanova</span>
        </div>
        <div className={styles.projectDetailsContainer_text}>
          <div>
            {" "}
            <Image
              src={
                screenWidth > 1024
                  ? BlueCircle
                  : screenWidth > 480
                  ? SmallTabletIcon
                  : SmallMobileIcon
              }
              alt="BlueCircle"
            />{" "}
            Designer:{" "}
          </div>
          <span>Yuliia Rieznikova</span>
        </div>
        <a href="/portfolio">
          <Button
            type={ARROW_BUTTON_TYPE}
            text="Переглянути всі кейси"
            color={VIOLET}
          />
        </a>
      </div>
      <FooterSection />
    </>
  );
};

export default RikotaPage;
