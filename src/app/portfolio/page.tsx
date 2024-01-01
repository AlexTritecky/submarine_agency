"use client";
import FooterSection from "@/Components/Footer";
import MenuBurger from "@/Components/MenuBurgerComponent";
import PortfolioPageSlider from "../../Components/PortfolioPageStartSliderSection";

const portfolio = () => {
  return (
    <>
      <PortfolioPageSlider />
      <MenuBurger/>
      <FooterSection />
    </>
  );
};

export default portfolio;
