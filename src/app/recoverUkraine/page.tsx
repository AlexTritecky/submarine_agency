"use client";
import FooterSection from "@/Components/Footer";
import MenuBurger from "@/Components/MenuBurgerComponent";
import Image from "next/image";
import HeaderLogo from "../../Assets/Images/RecoverUkraineCaseImages/Logo.svg";
import RecoverUkraineLogo from "../../Assets/Images/RecoverUkraineCaseImages/RecoverUkraineLogo.svg";
import styles from "../../Styling/recoverUkraine.module.css";
import BlackArrowIcon from "../../Assets/Images/RecoverUkraineCaseImages/blackCircleArrow.svg";
import LargeArrowIcon from "../../Assets/Images/RecoverUkraineCaseImages/BrandingLargeArrow.svg";
import RecoverVideo from "../../Assets/videos/RecoverDetail.mp4";
import RecoverVideoTablet from "../../Assets/videos/RecoverDetailTablet.mp4";
import ULogo from "../../Assets/Images/RecoverUkraineCaseImages/ULogo.svg";
import HeaderItem from "@/Components/RecoverCase/RecoverCaseHeaderItem";
import Button, { ARROW_BUTTON_TYPE, VIOLET } from "../../Components/Button";
import BlueCircle from "../../Assets/Images/RecoverUkraineCaseImages/BlueCircle.svg";
import MobileHeaderBackground from "../../Assets/Images/RecoverUkraineCaseImages/RecoverUkraineMobile.webp";
import LogoVideo from "../../Assets/videos/LogoVideo.mp4";
import { useEffect, useRef, useState } from "react";
import Loader from "@/Components/Loader";
const SmoothScrollLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = to.substring(1);
    const targetElement = document.getElementById(target);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      console.error("Target element not found:", target);
    }
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

const recoverUkraine = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isLoaderClosed, setIsLoaderClosed] = useState(false);

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
      const backgroundImageUrl = window.getComputedStyle(divElement).backgroundImage;
      const imageUrl = backgroundImageUrl.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
      const img: HTMLImageElement  =new window.Image()

      img.src = imageUrl;

      img.onload = function() {
        setIsPageLoaded(true);
      };
    }
  }, []);
  return (
    <>
      {!isLoaderClosed && <Loader isLoaded={isPageLoaded} />}
      <MenuBurger />
      <div ref={divRef} className={styles.recoverUkraineHeaderSection}>
        <Image
          className={styles.recoverUkraineHeaderSection__headerLogo}
          src={HeaderLogo}
          alt="HeaderLogo"
        />
        <Image
          src={MobileHeaderBackground}
          alt=" MobileHeaderBackground"
          onLoad={() => setIsPageLoaded(true)}
          className={styles.recoverUkraineHeaderSection__mobileBackgroundFoto}
        />
      </div>
      <div className={styles.recoverUkraineHeaderInfoSection}>
        <div className={styles.recoverUkraineHeaderInfoSection__leftPart}>
          <Image
            className={styles.recoverUkraineHeaderInfoSection__leftPart__logo}
            src={RecoverUkraineLogo}
            alt="logo"
          />

          <div
            className={styles.recoverUkraineHeaderInfoSection__leftPart__text}
          >
            Допомога важливим <br></br> з важливим
          </div>
        </div>
        <div className={styles.recoverUkraineHeaderInfoSection__rightPart}>
          <div
            className={styles.recoverUkraineHeaderInfoSection__rightPart_header}
          >
            <Image src={BlackArrowIcon} alt="blackArrow" /> 2023
          </div>
          <div
            className={
              styles.recoverUkraineHeaderInfoSection__rightPart_content
            }
          >
            <div
              className={
                styles.recoverUkraineHeaderInfoSection__rightPart_content_image
              }
            ></div>
            <SmoothScrollLink to="#branding">
              <HeaderItem text="брендинг" />
            </SmoothScrollLink>
            <SmoothScrollLink to="#logo">
              <HeaderItem text="лого" />
            </SmoothScrollLink>
            <SmoothScrollLink to="#graphics">
              <HeaderItem text="графічні елементи" />
            </SmoothScrollLink>
            <SmoothScrollLink to="#merch">
              <HeaderItem text="мерч" />
            </SmoothScrollLink>
          </div>
        </div>
      </div>
      <div id="branding" className={styles.brandingSection}>
        <div className={styles.brandingSection__header}>БРЕНДИНГ</div>
        <div className={styles.brandingSection__content}>
          <div className={styles.brandingSection__content_main}>
            <div
              className={styles.brandingSection__content_main_imageContainer}
            >
              <Image src={ULogo} alt="ulogo" />
            </div>
            <div className={styles.brandingSection__content_main_textContainer}>
              <div
                className={
                  styles.brandingSection__content_main_textContainer_header
                }
              >
                Recover Ukraine — неприбутковий міжнародний гуманітарний фонд,
                <br></br>
                який співпрацює з місцевими громадами, бізнесом та
                адміністративними органами <br></br> для відновлення України. 
              </div>
              <div
                className={
                  styles.brandingSection__content_main_textContainer_text
                }
              >
                &#8226; Фундатори фонду українські підприємці, які прагнуть
                залучити до інвестування програм іноземних підприємців та їх
                бізнеси.
              </div>
              <div
                className={
                  styles.brandingSection__content_main_textContainer_text
                }
              >
                &#8226; Фонд розподіляє кошти між численними організаціями та
                проєктами
              </div>
            </div>
            <div
              className={styles.brandingSection__content_main_arrowContainer}
            >
              <Image src={LargeArrowIcon} alt="arrow" />
            </div>
          </div>
          <div className={styles.brandingSection__content_title}>
            Чому фонду знадобився брендинг?
          </div>
          <div className={styles.brandingSection__content_text}>
            Бо це база, основа і грунт.
          </div>
          <div className={styles.brandingSection__content_title}>
            Чому для його розробки звернулися до нас?
          </div>
          <div className={styles.brandingSection__content_text}>
            Тому що у команди фонду важлива місія. А для вдалого залучення
            інвесторів їм був потрібен глибоко продуманий і впізнаваний
            брендинг, який відображає цінності.
          </div>
        </div>
      </div>
      <div className={styles.directionsText}>
        Напрямки діяльності — різноманітні, тому і виникла потреба створити
        систему, яка об'єднуватиме місію організації в єдине ціле
      </div>
      <div className={styles.brevityText}>
        Лаконічність, натхненна українським прапором
      </div>

      <div id="logo" className={styles.variantsText}>
        Передбачили 3 допустимих варіантів використання
      </div>

      <div className={styles.recoveryProcessContainer}>
        <video
          className={styles.recoveryProcessContainer__logoVideo}
          loop
          muted
          autoPlay
          playsInline
        >
          <source
            onLoad={() => {
              console.log("load1");
            }}
            src={LogoVideo}
            type="video/mp4"
          />
        </video>
        <div className={styles.recoveryProcessContainer__infoContainer}>
          <div
            className={styles.recoveryProcessContainer__infoContainer_header}
          >
            Трішки цифр з процесу,<br></br> щоб ви не потонули в словах
          </div>
          <div
            className={
              styles.recoveryProcessContainer__infoContainer_graphicContainer
            }
          >
            <div
              className={
                styles.recoveryProcessContainer__infoContainer_graphicContainer_graphic
              }
            ></div>

            <div
              className={
                styles.recoveryProcessContainer__infoContainer_graphicContainer_graphicInfo1
              }
            >
              <div
                className={
                  styles.recoveryProcessContainer__infoContainer_graphicContainer_graphicInfo1_header
                }
                id="graphics"
              >
                50+
              </div>

              <div
                className={
                  styles.recoveryProcessContainer__infoContainer_graphicContainer_graphicInfo1_text
                }
              >
                проаналізованих міжнародних фондів
              </div>
              <div
                className={
                  styles.recoveryProcessContainer__infoContainer_graphicContainer_graphicInfo1_line
                }
              ></div>
            </div>
            <div
              className={
                styles.recoveryProcessContainer__infoContainer_graphicContainer_graphicInfo2
              }
            >
              <div
                className={
                  styles.recoveryProcessContainer__infoContainer_graphicContainer_graphicInfo2_header
                }
              >
                4
              </div>

              <div
                className={
                  styles.recoveryProcessContainer__infoContainer_graphicContainer_graphicInfo2_text
                }
              >
                проведених брейншторми
              </div>
              <div
                className={
                  styles.recoveryProcessContainer__infoContainer_graphicContainer_graphicInfo2_line
                }
              ></div>
            </div>
            <div
              className={
                styles.recoveryProcessContainer__infoContainer_graphicContainer_graphicInfo3
              }
            >
              <div
                className={
                  styles.recoveryProcessContainer__infoContainer_graphicContainer_graphicInfo3_header
                }
              >
                5
              </div>

              <div
                className={
                  styles.recoveryProcessContainer__infoContainer_graphicContainer_graphicInfo3_text
                }
              >
                створених концепцій
              </div>
              <div
                className={
                  styles.recoveryProcessContainer__infoContainer_graphicContainer_graphicInfo3_line
                }
              ></div>
            </div>
            <div
              className={
                styles.recoveryProcessContainer__infoContainer_graphicContainer_graphicInfo4
              }
            >
              <div
                className={
                  styles.recoveryProcessContainer__infoContainer_graphicContainer_graphicInfo4_header
                }
              >
                5
              </div>

              <div
                className={
                  styles.recoveryProcessContainer__infoContainer_graphicContainer_graphicInfo4_text
                }
              >
                розроблених варіантів графічних елементів
              </div>
              <div
                className={
                  styles.recoveryProcessContainer__infoContainer_graphicContainer_graphicInfo4_line
                }
              ></div>
            </div>
          </div>
        </div>{" "}
        <video
          className={styles.recoveryProcessContainer__recoverDetailVideo}
          loop
          muted
          autoPlay
          playsInline
        >
          <source
            onLoad={() => {
              console.log("load1");
            }}
            src={RecoverVideo}
            type="video/mp4"
          />
        </video>
        <video
          className={styles.recoveryProcessContainer__recoverDetailVideoTablet}
          loop
          muted
          autoPlay
          playsInline
        >
          <source
            onLoad={() => {
              console.log("load1");
            }}
            src={RecoverVideoTablet}
            type="video/mp4"
          />
        </video>
        <div id="merch" className={styles.detailsText}>
          Кожна деталь мерчу продумана відповідно до концепції, тому його точно
          юзатимуть, а не покладуть на полицю відпочивати
        </div>
        <div className={styles.recoveryMockupsContainer}>
          <div
            className={styles.recoveryMockupsContainer__recoveryMockup1}
          ></div>
          <div
            className={styles.recoveryMockupsContainer__recoveryMockup2}
          ></div>
          <div
            className={styles.recoveryMockupsContainer__recoveryMockup3}
          ></div>
          <div
            className={styles.recoveryMockupsContainer__recoveryMockup4}
          ></div>
          <div
            className={styles.recoveryMockupsContainer__recoveryMockup5}
          ></div>
          <div
            className={styles.recoveryMockupsContainer__recoveryMockup6}
          ></div>
          <div
            className={styles.recoveryMockupsContainer__recoveryMockup7}
          ></div>
          <div
            className={styles.recoveryMockupsContainer__recoveryMockup8}
          ></div>
          <div
            className={styles.recoveryMockupsContainer__recoveryMockup9}
          ></div>
        </div>
        <div className={styles.projectDetailsContainer}>
          <div className={styles.projectDetailsContainer_header}>
            Над проєктом працювали:
          </div>
          <div className={styles.projectDetailsContainer_text}>
            <Image src={BlueCircle} alt="BlueCircle" /> Head designer:{" "}
            <span>Marta Vozna</span>
          </div>
          <div className={styles.projectDetailsContainer_text}>
            <Image src={BlueCircle} alt="BlueCircle" /> Art direction:{" "}
            <span>Julia Bundz</span>
          </div>
          <a href="/portfolio">
            <Button
              type={ARROW_BUTTON_TYPE}
              text="Переглянути всі кейси"
              color={VIOLET}
            />
          </a>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default recoverUkraine;
