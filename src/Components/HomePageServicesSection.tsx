import styles from "../Styling/homePage.module.css";
import Image from 'next/image';
import LinkArrow from "../Assets/Images/HomePageImages/ServiceArrow.svg";

function ServicesSection() {
  return (
    <section className={styles.servicesContainer}>
      <div className={styles.servicesContainer__header}>ПОСЛУГИ</div>
      <div className={styles.servicesContainer__service}>
        <div className={styles.servicesContainer__serviceTitle}>
          <Image alt="arrow" src={LinkArrow} className={styles.servicesContainer__serviceIcon} />
          КОМУНІКАЦІЙНА СТРАТЕГІЯ
        </div>
        <div className={styles.servicesContainer__infoList}>
          <div className={styles.servicesContainer__infoListItem}>
            Стратегія внутрішньої та зовнішньої комунікації бренду
          </div>
        </div>
      </div>
      <div className={styles.servicesContainer__service}>
        <div className={styles.servicesContainer__serviceTitle}>
        <Image alt="arrow" src={LinkArrow} className={styles.servicesContainer__serviceIcon} />
          SMM-СТРАТЕГІЯ
        </div>
        <div className={styles.servicesContainer__infoList}>
          <div className={styles.servicesContainer__infoListItem}>
            Стратегія розвитку бренду в соціальних мережах
          </div>
        </div>
      </div>
      <div className={styles.servicesContainer__service}>
        <div className={styles.servicesContainer__serviceTitle}>
        <Image alt="arrow" src={LinkArrow} className={styles.servicesContainer__serviceIcon} />SMM
        </div>
        <div className={styles.servicesContainer__infoList}>
          <div className={styles.servicesContainer__infoListItem}>
            Щомісячний супровід сторінок бренду
          </div>
        </div>
      </div>
      <div className={styles.servicesContainer__service}>
        <div className={styles.servicesContainer__serviceTitle}>
        <Image alt="arrow" src={LinkArrow} className={styles.servicesContainer__serviceIcon} />
          БРЕНДІНГ
        </div>
        <div className={styles.servicesContainer__infoList}>
          <div className={styles.servicesContainer__infoListItem}>Неймінг</div>
          <div className={styles.servicesContainer__infoListItem}>Логобук</div>
          <div className={styles.servicesContainer__infoListItem}>Брендбук</div>
        </div>
      </div>
      <div className={styles.servicesContainer__service}>
        <div className={styles.servicesContainer__serviceTitle}>
        <Image alt="arrow" src={LinkArrow} className={styles.servicesContainer__serviceIcon} />
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
      <div className={styles.servicesContainer__service}>
        <div className={styles.servicesContainer__serviceTitle}>
        <Image alt="arrow" src={LinkArrow} className={styles.servicesContainer__serviceIcon} />
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
            Спец-проекти
          </div>
        </div>
      </div>
      <div className={styles.servicesContainer__service}>
        <div className={styles.servicesContainer__serviceTitle}>
        <Image alt="arrow" src={LinkArrow} className={styles.servicesContainer__serviceIcon} />
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
    </section>
  );
}

export default ServicesSection;
