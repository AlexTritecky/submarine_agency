import styles from "../Styling/teamPage.module.css";
import { VIOLET } from "./Button";
import FormModalPage from "./FormModalPage";
import TeamMemberComponent from "./TeamMemberComponent";
// import Member1Foto from "../Assets/Images/TeamPageImages/Members/Member1Desctop.webp";
// import Background1Foto from "../Assets/Images/TeamPageImages/Members/Member1BackgroundDesctop.webp";
// import Member2Foto from "../Assets/Images/TeamPageImages/Members/Member2Desctop.webp";
// import Background2Foto from "../Assets/Images/TeamPageImages/Members/Member2BackgroundDesctop.webp";
// import Member3Foto from "../Assets/Images/TeamPageImages/Members/Member3Desctop.webp";
// import Background3Foto from "../Assets/Images/TeamPageImages/Members/Member3BackgroundDesctop.webp";
// import Member4Foto from "../Assets/Images/TeamPageImages/Members/Member4Desctop.webp";
// import Background4Foto from "../Assets/Images/TeamPageImages/Members/Member4BackgroundDesctop.webp";
// import Member5Foto from "../Assets/Images/TeamPageImages/Members/Member5Desctop.webp";
// import Background5Foto from "../Assets/Images/TeamPageImages/Members/Member5BackgroundDesctop.webp";
// import Member6Foto from "../Assets/Images/TeamPageImages/Members/Member6Desctop.webp";
// import Background6Foto from "../Assets/Images/TeamPageImages/Members/Member6BackgroundDesctop.webp";
// import Member7Foto from "../Assets/Images/TeamPageImages/Members/Member7Desctop.webp";
// import Background7Foto from "../Assets/Images/TeamPageImages/Members/Member7BackgroundDesctop.webp";
// import Member8Foto from "../Assets/Images/TeamPageImages/Members/Member8Desctop.webp";
// import Background8Foto from "../Assets/Images/TeamPageImages/Members/Member8BackgroundDesctop.webp";
// import Member9Foto from "../Assets/Images/TeamPageImages/Members/Member9Desctop.webp";
// import Background9Foto from "../Assets/Images/TeamPageImages/Members/Member9BackgroundDesctop.webp";
// import Member10Foto from "../Assets/Images/TeamPageImages/Members/Member10Desctop.webp";
// import Background10Foto from "../Assets/Images/TeamPageImages/Members/Member10BackgroundDesctop.webp";

const TeamContainer = () => {
  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamContainer__header}>КОМАНДА</div>
      <div className={styles.teamContainer__membersContainer}>
        <TeamMemberComponent
          projectNumber={"200+"}
          favoriteProject={"Звісно, що Submarine"}
          experience={"9 років"}
          favoriteBand={"The Cure"}
          additionalClassFoto={styles.teamMemberContainer__member1}
          additionalClassBackground={styles.teamMemberContainer__background1}
          header={"Юлія"}
          text={"CEO Submarine"}
        />
        <TeamMemberComponent
          projectNumber={"24+"}
          favoriteProject={`Duck's Lake (контент), 
        Гроно (сторіс), Дегустаторка (стратегія) ОККО (сторіс)`}
          experience={"2,5 роки"}
          favoriteBand={"Лівінстон"}
          additionalClassFoto={styles.teamMemberContainer__member2}
          additionalClassBackground={styles.teamMemberContainer__background2}
          header={"Марта"}
          text={`сторіс-менеджер, 
          контент-менеджер, стратег`}
        />
        <TeamMemberComponent
          projectNumber={"10+"}
          favoriteProject={`Barbercompany і Міністерство дверей (менеджер),  Рікота (стратегія`}
          experience={"Копірайтер 5р. Менеджер 1 р."}
          favoriteBand={"Один в каноє"}
          additionalClassFoto={styles.teamMemberContainer__member3}
          additionalClassBackground={styles.teamMemberContainer__background3}
          header={"Юлія"}
          text={`копірайтер, 
          контент-менеджер, стратег`}
        />
        <TeamMemberComponent
          projectNumber={"50+"}
          favoriteProject={`брендінг Sakana, пости 
        Duck's Lake`}
          experience={"5-6 років"}
          favoriteBand={"Alt-J"}
          additionalClassFoto={styles.teamMemberContainer__member4}
          additionalClassBackground={styles.teamMemberContainer__background4}
          header={"Марта-Марія"}
          text={"графічний дизайнер"}
        />
        <TeamMemberComponent
          projectNumber={"15+"}
          favoriteProject={"айдентика Submarine education, сайт Sakana"}
          experience={"~3 роки"}
          favoriteBand={"Lebanon Hanover"}
          additionalClassFoto={styles.teamMemberContainer__member5}
          additionalClassBackground={styles.teamMemberContainer__background5}
          header={"Юлія"}
          text={"дизайнер (графічний, UI/UX)"}
        />
        <TeamMemberComponent
          projectNumber={"5+"}
          favoriteProject={"Barbercompany"}
          experience={"5+"}
          favoriteBand={"Coldplay"}
          additionalClassFoto={styles.teamMemberContainer__member6}
          additionalClassBackground={styles.teamMemberContainer__background6}
          header={"Марка"}
          text={"графічний дизайнер"}
        />
        <TeamMemberComponent
          projectNumber={"10+"}
          favoriteProject={"Міністерство дверей"}
          experience={"1 рік"}
          favoriteBand={"Maneskin"}
          additionalClassFoto={styles.teamMemberContainer__member7}
          additionalClassBackground={styles.teamMemberContainer__background7}
          header={"Валерія"}
          text={"сторіс-мейкер"}
        />
        <TeamMemberComponent
          projectNumber={"6"}
          favoriteProject={"Okko, Solid"}
          experience={"3 років"}
          favoriteBand={"Kiss, Жадан і Собаки"}
          additionalClassFoto={styles.teamMemberContainer__member8}
          additionalClassBackground={styles.teamMemberContainer__background8}
          header={"Анна"}
          text={"Копірайтер"}
        />
        <TeamMemberComponent
          projectNumber={"22+"}
          favoriteProject={"Okko, Grono, не просто підтримка, Enzym"}
          experience={"4 роки"}
          favoriteBand={"Hozier"}
          additionalClassFoto={styles.teamMemberContainer__member9}
          additionalClassBackground={styles.teamMemberContainer__background9}
          header={"Аліна"}
          text={"контент-менеджер, стратег"}
        />
        <TeamMemberComponent
          projectNumber={"3+"}
          favoriteProject={"Найбільше пишаюсь нашою спільною Джирою😊"}
          experience={"4 роки"}
          favoriteBand={"AC/DC"}
          additionalClassFoto={styles.teamMemberContainer__member10}
          additionalClassBackground={styles.teamMemberContainer__background10}
          header={"Катерина"}
          text={"project manager"}
        />
      </div>

      <FormModalPage color={VIOLET} text="Стати частиною команди" />
    </div>
  );
};

export default TeamContainer;
