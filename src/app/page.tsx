
import SectionHero from "@/components/home/SectionHero";
import FirsCall from "@/components/home/SectionFirsCall";
import SecondCall from "@/components/home/SectionSecondCall";
import SectionFeedback from "@/components/home/SectionFeedback";
import SectionContact from "@/components/home/SectionContact";
import Map from "@/components/Map";

export default function Home() {
  return (
    <main>
      <SectionHero />
      <FirsCall />
      <SectionFeedback />
      <SecondCall />
      <SectionContact title="Faça seu orçamento conosco"/>
      <Map/>
    </main>
  );
}
