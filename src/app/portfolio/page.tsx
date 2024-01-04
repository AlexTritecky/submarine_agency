"use client";
import CasesSection from "@/Components/CasesSection";
import FooterSection from "@/Components/Footer";
import MenuBurger from "@/Components/MenuBurgerComponent";
import PortfolioPageSlider from "@/Components/PortfolioPageStartSliderSection";

const portfolio = () => {
  return (
    <>
      <MenuBurger />
      <PortfolioPageSlider />
      <CasesSection />
      <FooterSection />
    </>
  );
};

export default portfolio;
