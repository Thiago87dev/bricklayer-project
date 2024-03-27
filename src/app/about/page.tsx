import SectionPrinciples from "@/components/about/SectionPrinciples";
import SectionPrinciplesBox from "@/components/about/SectionPrinciplesBox";
import SectionContact from "@/components/home/SectionContact";

const About = () => {
  return (
    <div>
      <SectionPrinciples/>
      <SectionPrinciplesBox/>
      <SectionContact title="Faça seu orçamento hoje mesmo"/>
    </div>
  );
};

export default About;
