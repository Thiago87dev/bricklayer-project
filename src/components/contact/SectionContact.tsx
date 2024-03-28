"use client";
import Link from "next/link";
import ContactForm from "../ContactForm";
import { SiInstagram, SiFacebook } from "react-icons/si";

const SectionContact = () => {
  return (
    <section className="py-12 bg-colorGreenDark">
      <div className="xl:w-3/5 px-8 xl:px-0 mx-auto pt-20 pb-8 flex flex-col md:flex-row items-center  gap-10 md:gap-0">
        <div className="md:w-2/5 text-colorWhite flex flex-col gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold">Entre em Contato</h2>
            <p>E faça um orçamento</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold ">Telefone</h2>
            <p>(21) 99134 - 8429</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold ">Endereço</h2>
            <p>
              R. Natanael Amorim Vieira, 451 - Paranaguamirim, Joinville, SC
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold ">Redes sociais</h2>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link target="_blank" href="https://www.instagram.com/d.d.m.n.construcoes?igsh=c2tnNHZxMXpudG4w">
                <SiInstagram size={40} />
              </Link>
              <Link target="_blank" href="https://www.facebook.com/profile.php?id=100094175112687&mibextid=ZbWKwL">
                <SiFacebook size={40} />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-3/5 flex justify-end xl:justify-center  ">
          <ContactForm
            textLabel="text-colorWhite"
            successTextColor="text-colorBlack"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
