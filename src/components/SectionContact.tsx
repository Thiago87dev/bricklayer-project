"use client";
import ContactForm from "./ContactForm";

const SectionContact = () => {
  return (
    <section >
      <div className="flex py-8 flex-col items-center justify-center xl:w-3/5 mx-auto">
        <h2 className="text-5xl font-bold">Faça o seu orçamento conosco</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default SectionContact;