"use client";
import FooterSection from "@/Components/Footer";
import MenuBurger from "@/Components/MenuBurgerComponent";
import PortfolioPageSlider from "../../Components/PortfolioPageStartSliderSection";

const portfolio = () => {
  return (
    <>
      <MenuBurger />
      <PortfolioPageSlider />
      <FooterSection />
    </>
  );
};

export default portfolio;
