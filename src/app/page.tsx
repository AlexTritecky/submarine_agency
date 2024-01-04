"use client";
import CasesSection from "@/Components/CasesSection";
import YourComponent from "@/Components/CooperationSection";
import FooterSection from "@/Components/Footer";
import AboutUsSection from "@/Components/HomePageAboutUs";
import ServicesSection from "@/Components/HomePageServicesSection";
import HomePageSlider from "@/Components/HomePageStartSliderSection";
import MenuBurger from "@/Components/MenuBurgerComponent";
import PartnerSection from "@/Components/PartnerSection";

function Home({ Component, pageProps }: any) {
  return (
    <>
      <MenuBurger />
      <HomePageSlider />
      <AboutUsSection />
      <ServicesSection />
      <CasesSection />
      <PartnerSection />
      <YourComponent />
      <FooterSection />
    </>
  );
}

export default Home;
