import styles from "../Styling/homePage.module.css";

function AboutUsSection() {
  return (
    <section className={styles.aboutUsContainer}>
      <div className={styles.aboutUsContainer__title}>
        <div className={styles.aboutUsContainer__mainTitleText}>ПРО НАС</div>
        <div className={styles.aboutUsContainer__subTitleText}>
          СТВОРЮЄМО ЗВ ` ЯЗКИ <br />
          МІЖ КОМПАНІЯМИ ТА ЛЮДЬМИ
        </div>
        <div className={styles.aboutUsContainer__infoItem1}>
          Ми не чекаємо випадкових вистрілів, які несуться на хайпі чи федах
        </div>
        <div className={styles.aboutUsContainer__infoItem2}>
          У нашому розумінні, бренд-комунікація — це не красивий візуал, чи
          відео у ТІк Ток, яке раптово завірусилось
        </div>
        <div className={styles.aboutUsContainer__infoItem3}>
          Наш підхід — орієнтований <br /> на бізнес-цілі і завжди базується на
          дослідженнях.
          <br /> Перед створенням будь-якого кампейну — ми аналізуємо
          середовище, потреби, контекст у якому існує компанія
        </div>
        <div className={styles.aboutUsContainer__infoItem4}>
          І лише тоді починається креатив
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
