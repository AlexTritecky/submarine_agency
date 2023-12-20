import CasesSection from "@/Components/CasesSection";
import AboutUsSection from "@/Components/HomePageAboutUs";
import ServicesSection from "@/Components/HomePageServicesSection";
import HomePageSlider from "@/Components/HomePageStartSliderSection";
import MenuBurger from "@/Components/MenuBurgerComponent";
import PartnerSection from "@/Components/PartnerSection";

function HomePage() {

  return (
    <div>
      {/* home
      <Link className={styles.good} href="/portfolio">
        Portfolio
      </Link>
      <Link href="/team">Team</Link> */}
      <MenuBurger />
      <HomePageSlider />
      <AboutUsSection />
      <ServicesSection />
      <CasesSection />
      <PartnerSection />
    </div>
  );
}

export default HomePage;
