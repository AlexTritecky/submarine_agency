import styles from "../Styling/teamPage.module.css";
import { VIOLET } from "./Button";
import FormModalPage from "./FormModalPage";
import TeamMemberComponent from "./TeamMemberComponent";
import Member1Foto from "../Assets/Images/TeamPageImages/Members/Member1Desctop.webp";
import Background1Foto from "../Assets/Images/TeamPageImages/Members/Member1BackgroundDesctop.webp";
import Member2Foto from "../Assets/Images/TeamPageImages/Members/Member2Desctop.webp";
import Background2Foto from "../Assets/Images/TeamPageImages/Members/Member2BackgroundDesctop.webp";
import Member3Foto from "../Assets/Images/TeamPageImages/Members/Member3Desctop.webp";
import Background3Foto from "../Assets/Images/TeamPageImages/Members/Member3BackgroundDesctop.webp";
import Member4Foto from "../Assets/Images/TeamPageImages/Members/Member4Desctop.webp";
import Background4Foto from "../Assets/Images/TeamPageImages/Members/Member4BackgroundDesctop.webp";
import Member5Foto from "../Assets/Images/TeamPageImages/Members/Member5Desctop.webp";
import Background5Foto from "../Assets/Images/TeamPageImages/Members/Member5BackgroundDesctop.webp";
import Member6Foto from "../Assets/Images/TeamPageImages/Members/Member6Desctop.webp";
import Background6Foto from "../Assets/Images/TeamPageImages/Members/Member6BackgroundDesctop.webp";
import Member7Foto from "../Assets/Images/TeamPageImages/Members/Member7Desctop.webp";
import Background7Foto from "../Assets/Images/TeamPageImages/Members/Member7BackgroundDesctop.webp";
import Member8Foto from "../Assets/Images/TeamPageImages/Members/Member8Desctop.webp";
import Background8Foto from "../Assets/Images/TeamPageImages/Members/Member8BackgroundDesctop.webp";
import Member9Foto from "../Assets/Images/TeamPageImages/Members/Member9Desctop.webp";
import Background9Foto from "../Assets/Images/TeamPageImages/Members/Member9BackgroundDesctop.webp";
import Member10Foto from "../Assets/Images/TeamPageImages/Members/Member10Desctop.webp";
import Background10Foto from "../Assets/Images/TeamPageImages/Members/Member10BackgroundDesctop.webp";

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
          fotoUrl={Member1Foto}
          backgroundUrl={Background1Foto}
          header={"Юлія"}
          text={"CEO Submarine"}
        />
        <TeamMemberComponent
          projectNumber={"24+"}
          favoriteProject={`Duck's Lake (контент), 
        Гроно (сторіс), Дегустаторка (стратегія) ОККО (сторіс)`}
          experience={"2,5 роки"}
          favoriteBand={"Лівінстон"}
          fotoUrl={Member2Foto}
          backgroundUrl={Background2Foto}
          header={"Марта"}
          text={`сторіс-менеджер, 
          контент-менеджер, стратег`}
        />
        <TeamMemberComponent
          projectNumber={"10+"}
          favoriteProject={`Barbercompany і Міністерство дверей (менеджер),  Рікота (стратегія`}
          experience={"Копірайтер 5р. Менеджер 1 р."}
          favoriteBand={"Один в каноє"}
          fotoUrl={Member3Foto}
          backgroundUrl={Background3Foto}
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
          fotoUrl={Member6Foto}
          backgroundUrl={Background6Foto}
          header={"Марта-Марія"}
          text={"графічний дизайнер"}
        />
        <TeamMemberComponent
          projectNumber={"15+"}
          favoriteProject={"айдентика Submarine education, сайт Sakana"}
          experience={"~3 роки"}
          favoriteBand={"Lebanon Hanover"}
          fotoUrl={Member4Foto}
          backgroundUrl={Background4Foto}
          header={"Юлія"}
          text={"дизайнер (графічний, UI/UX)"}
        />
        <TeamMemberComponent
          projectNumber={"5+"}
          favoriteProject={"Barbercompany"}
          experience={"5+"}
          favoriteBand={"Coldplay"}
          fotoUrl={Member8Foto}
          backgroundUrl={Background8Foto}
          header={"Марка"}
          text={"графічний дизайнер"}
        />
        <TeamMemberComponent
          projectNumber={"10+"}
          favoriteProject={"Міністерство дверей"}
          experience={"1 рік"}
          favoriteBand={"Maneskin"}
          fotoUrl={Member5Foto}
          backgroundUrl={Background5Foto}
          header={"Валерія"}
          text={"сторіс-мейкер"}
        />
        <TeamMemberComponent
          projectNumber={"6"}
          favoriteProject={"Okko, Solid"}
          experience={"3 років"}
          favoriteBand={"Kiss, Жадан і Собаки"}
          fotoUrl={Member7Foto}
          backgroundUrl={Background7Foto}
          header={"Анна"}
          text={"Копірайтер"}
        />
        <TeamMemberComponent
          projectNumber={"22+"}
          favoriteProject={"Okko, Grono, не просто підтримка, Enzym"}
          experience={"4 роки"}
          favoriteBand={"Hozier"}
          fotoUrl={Member9Foto}
          backgroundUrl={Background9Foto}
          header={"Аліна"}
          text={"контент-менеджер, стратег"}
        />
        <TeamMemberComponent
          projectNumber={"3+"}
          favoriteProject={"Найбільше пишаюсь нашою спільною Джирою😊"}
          experience={"4 роки"}
          favoriteBand={"AC/DC"}
          fotoUrl={Member10Foto}
          backgroundUrl={Background10Foto}
          header={"Катерина"}
          text={"project manager"}
        />
      </div>

      <FormModalPage color={VIOLET} text="Стати частиною команди" />
    </div>
  );
};

export default TeamContainer;
