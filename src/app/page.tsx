
import Hero from "@/components/SectionHero";
import FirsCall from "@/components/SectionFirsCall";
import SecondCall from "@/components/SectionSecondCall";
import SectionFeedback from "@/components/SectionFeedback";
import SectionContact from "@/components/SectionContact";

export default function Home() {
  return (
    <main>
      <Hero />
      <FirsCall />
      <SectionFeedback />
      <SecondCall />
      <SectionContact/>
    </main>
  );
}
