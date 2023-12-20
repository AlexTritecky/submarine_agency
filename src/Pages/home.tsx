import CasesSection from "@/Components/CasesSection";
import CooperationSection from "@/Components/CooperationSection";
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
      <CooperationSection />
    </div>
  );
}

export default HomePage;
