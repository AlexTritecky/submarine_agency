"use client";
import CasesSection from "@/Components/CasesSection";
import FooterSection from "@/Components/Footer";
import MenuBurger from "@/Components/MenuBurgerComponent";
import TeamContainer from "@/Components/TeamContainer";
import TeamPageSlider from "@/Components/TeamPageStartSliderSection";

const portfolio = () => {
  return (
    <>
      <MenuBurger />
      <TeamPageSlider />
      <TeamContainer />
      <FooterSection />
    </>
  );
};

export default portfolio;
