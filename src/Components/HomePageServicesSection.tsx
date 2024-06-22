import * as React from "react";
import styles from "../Styling/homePage.module.css";
import Image from "next/image";
import LinkArrow from "../Assets/Images/HomePageImages/ServiceArrow.svg";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import TransitionsModal from "./HomePageServicesPopUp";
import {
  BRAND,
  COMMUNICATION_STRATEGY,
  DESIGN,
  PRODUCTION,
  PROMOTION,
  SMM,
  SMM_STRATEGY,
} from "@/Interfaces/interfaces";
import { createPortal } from "react-dom";
import Button, {
  ARROW_BUTTON_TYPE,
  PLUS_BUTTON_TYPE,
  VIOLET,
  WHITE,
} from "./Button";
import FormModalPage from "./FormModalPage";

function ServicesSection() {
  const [open, setOpen] = React.useState(false);
  const [modalName, setModalName] = React.useState("");
  const handleOpen = (name: any) => {
    setModalName(name);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    console.log(open);
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "scroll";
    }
  }, [open]);
  const modal =
    open &&
    createPortal(
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        className={styles.modalContainer}
      >
        <TransitionsModal
          open={open}
          modalName={modalName}
          handleClose={() => setOpen(false)}
        />
      </Modal>,
      document.body
    );
  return (
    <section id="services" className={styles.servicesContainer}>
      {modal}
      <div className={styles.servicesContainer__header}>ПОСЛУГИ</div>
      <div
        className={styles.servicesContainer__service}
        onClick={() => handleOpen(COMMUNICATION_STRATEGY)}
      >
        <div className={styles.servicesContainer__serviceTitle}>
          <Image
            alt="arrow"
            src={LinkArrow}
            className={styles.servicesContainer__serviceIcon}
          />
          КОМУНІКАЦІЙНА СТРАТЕГІЯ
        </div>
        <div className={styles.servicesContainer__infoList}>
          <div className={styles.servicesContainer__infoListItem}>
            Стратегія внутрішньої та зовнішньої комунікації бренду
          </div>
        </div>
      </div>
      <div
        className={styles.servicesContainer__service}
        onClick={() => handleOpen(SMM_STRATEGY)}
      >
        <div className={styles.servicesContainer__serviceTitle}>
          <Image
            alt="arrow"
            src={LinkArrow}
            className={styles.servicesContainer__serviceIcon}
          />
          SMM-СТРАТЕГІЯ
        </div>
        <div className={styles.servicesContainer__infoList}>
          <div className={styles.servicesContainer__infoListItem}>
            Стратегія розвитку бренду в соціальних мережах
          </div>
        </div>
      </div>
      <div
        className={styles.servicesContainer__service}
        onClick={() => handleOpen(SMM)}
      >
        <div className={styles.servicesContainer__serviceTitle}>
          <Image
            alt="arrow"
            src={LinkArrow}
            className={styles.servicesContainer__serviceIcon}
          />
          SMM
        </div>
        <div className={styles.servicesContainer__infoList}>
          <div className={styles.servicesContainer__infoListItem}>
            Щомісячний супровід сторінок бренду
          </div>
        </div>
      </div>
      <div
        className={styles.servicesContainer__service}
        onClick={() => handleOpen(BRAND)}
      >
        <div className={styles.servicesContainer__serviceTitle}>
          <Image
            alt="arrow"
            src={LinkArrow}
            className={styles.servicesContainer__serviceIcon}
          />
          БРЕНДИНГ
        </div>
        <div className={styles.servicesContainer__infoList}>
          <div className={styles.servicesContainer__infoListItem}>Неймінг</div>
          <div className={styles.servicesContainer__infoListItem}>Логобук</div>
          <div className={styles.servicesContainer__infoListItem}>Брендбук</div>
        </div>
      </div>
      <div
        className={styles.servicesContainer__service}
        onClick={() => handleOpen(DESIGN)}
      >
        <div className={styles.servicesContainer__serviceTitle}>
          <Image
            alt="arrow"
            src={LinkArrow}
            className={styles.servicesContainer__serviceIcon}
          />
          ВЕБДИЗАЙН
        </div>
        <div className={styles.servicesContainer__infoList}>
          <div className={styles.servicesContainer__infoListItem}>
            UI/UX дизайн веб сайтів
          </div>
          <div className={styles.servicesContainer__infoListItem}>
            Веб-розробка сайтів
          </div>
        </div>
      </div>
      <div
        className={styles.servicesContainer__service}
        onClick={() => handleOpen(PROMOTION)}
      >
        <div className={styles.servicesContainer__serviceTitle}>
          <Image
            alt="arrow"
            src={LinkArrow}
            className={styles.servicesContainer__serviceIcon}
          />
          ПРОМОУШН
        </div>
        <div className={styles.servicesContainer__infoList}>
          <div className={styles.servicesContainer__infoListItem}>
            Співпраця з медіа
          </div>
          <div className={styles.servicesContainer__infoListItem}>
            Співпраця з інфлуенсерами
          </div>
          <div className={styles.servicesContainer__infoListItem}>
            Колаборації
          </div>
          <div className={styles.servicesContainer__infoListItem}>
            Спец-проєкти
          </div>
        </div>
      </div>
      <div
        className={styles.servicesContainer__service}
        onClick={() => handleOpen(PRODUCTION)}
      >
        <div className={styles.servicesContainer__serviceTitle}>
          <Image
            alt="arrow"
            src={LinkArrow}
            className={styles.servicesContainer__serviceIcon}
          />
          ПРОДАКШН
        </div>
        <div className={styles.servicesContainer__infoList}>
          <div className={styles.servicesContainer__infoListItem}>
            Фотозйомка
          </div>
          <div className={styles.servicesContainer__infoListItem}>
            Відеозйомка
          </div>
        </div>
      </div>
      <div className={styles.servicesContainer__buttonContainer}>
        <FormModalPage color={VIOLET} />
      </div>
    </section>
  );
}

export default ServicesSection;
