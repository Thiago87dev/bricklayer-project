import Map from "@/components/Map";
import SectionContact from "@/components/contact/SectionContact";

const page = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <SectionContact />
      <Map />
    </div>
  );
};

export default page;
