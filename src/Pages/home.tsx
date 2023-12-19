import CasesSection from "@/Components/CasesSection";
import AboutUsSection from "@/Components/HomePageAboutUs";
import ServicesSection from "@/Components/HomePageServicesSection";
import HomePageSlider from "@/Components/HomePageStartSliderSection";
import MenuBurger from "@/Components/MenuBurgerComponent";

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
    </div>
  );
}

export default HomePage;
