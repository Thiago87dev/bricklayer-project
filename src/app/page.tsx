
import SectionHero from "@/components/home/SectionHero";
import FirsCall from "@/components/home/SectionFirsCall";
import SecondCall from "@/components/home/SectionSecondCall";
import SectionFeedback from "@/components/home/SectionFeedback";
import SectionContact from "@/components/home/SectionContact";

export default function Home() {
  return (
    <main>
      <SectionHero />
      <FirsCall />
      <SectionFeedback />
      <SecondCall />
      <SectionContact/>
    </main>
  );
}
