"use client";
import Image from "next/image";
import i1 from "@/assets/img/projects/i1.jpeg";
import i2 from "@/assets/img/projects/i2.jpeg";
import i3 from "@/assets/img/projects/i3.jpeg";
import i5 from "@/assets/img/projects/i5.jpeg";
import i6 from "@/assets/img/projects/i6.jpeg";
import i7 from "@/assets/img/projects/i7.jpeg";
import i8 from "@/assets/img/projects/i8.jpeg";
import i9 from "@/assets/img/projects/i9.jpeg";
import i10 from "@/assets/img/projects/i10.jpeg";
import i11 from "@/assets/img/projects/i11.jpeg";
import i12 from "@/assets/img/projects/i12.jpeg";
import i13 from "@/assets/img/projects/i13.jpeg";
import i14 from "@/assets/img/projects/i14.jpeg";
import i15 from "@/assets/img/projects/i15.jpeg";
import i16 from "@/assets/img/projects/i16.jpeg";
import i17 from "@/assets/img/projects/i17.jpeg";
import i18 from "@/assets/img/projects/i18.jpeg";
import i19 from "@/assets/img/projects/i19.jpeg";
import i20 from "@/assets/img/projects/i20.jpeg";
import { useState } from "react";
import { Popup } from "./Popup";

const imgArray = [
    i1,
    i2,
    i3,
    i5,
    i6,
    i7,
    i8,
    i9,
    i10,
    i11,
    i12,
    i13,
    i14,
    i15,
    i16,
    i17,
    i18,
    i19,
    i20,
  ];
  
  const Projects: React.FC = () => {
    // Crie um array de estados para controlar a abertura/fecamento de cada popup
    const [popupStates, setPopupStates] = useState(Array(imgArray.length).fill(false));
  
    // Função para abrir/fechar um popup específico
    const togglePopup = (index: number) => {
      setPopupStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[index] = !newStates[index];
        return newStates;
      });
    };
  
    return (
      <div className="flex flex-col py-32 w-3/5 mx-auto ">
        <div className="flex flex-col gap-8">
            <h1 className="text-center text-5xl font-bold">Alguns de nossos projetos</h1>
            <p className="text-center">Bem-vindo à nossa galeria de projetos de reforma e construção! Aqui, orgulhosamente apresentamos uma seleção dos projetos realizados pela nossa empresa, destacando nossa experiência e compromisso com a excelência em cada empreendimento.</p>
        </div>
        <div className="flex justify-around flex-wrap ">
          {imgArray.map((imagem, index) => (
            <div className="flex justify-center flex-wrap w-64 py-4 " key={index}>
              <Image
                src={imagem}
                alt="imagem do projeto"
                className="cursor-pointer border-solid border-4 border-colorBlack"
                width={200}
                onClick={() => togglePopup(index)}
              />
              {/* Use o estado correspondente para exibir o popup */}
              {popupStates[index] && (
                <Popup
                  imagem={{ src: imagem.src, alt: "imagem", height: 500, width: 500 }}
                  onClose={() => togglePopup(index)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;