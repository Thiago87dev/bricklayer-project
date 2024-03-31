"use client";
import ContactForm from "@/components/ContactForm";
import Projects from "@/components/projects/Projects";

const page = () => {
  return (
    <div>
      <div>
        <Projects />
      </div>
      <div className="w-3/4 mx-auto flex flex-col gap-4 py-8">
        <h2 className="text-center text-3xl font-bold">Entre em contato</h2>
        <ContactForm
          successTextColor="text-colorBlack"
          textLabel="text-colorBlack"
        />
      </div>
    </div>
  );
};

export default page;
