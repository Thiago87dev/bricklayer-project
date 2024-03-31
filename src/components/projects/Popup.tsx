import Image from "next/image";
import React from "react";
import { FaX } from "react-icons/fa6";


interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PopupProps {
  onClose: () => void;
  imagem: ImageProps;
}

export const Popup = ({ onClose, imagem }: PopupProps) => {
    const handleBgClick = (e: React.MouseEvent<HTMLDivElement>) =>{
        if(e.target === e.currentTarget){
            onClose()
        }
    }
    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50" onClick={handleBgClick}>
          <div className="bg-white p-4 rounded-lg relative shadow-lg max-w-full lg:h-full">
            <button
              className="absolute top-4 right-4 text-4xl text-white hover:text-gray-700"
              onClick={onClose}
            >
              <FaX />
            </button>
            <div className="lg:h-full overflow-auto">
              <Image
                src={imagem.src}
                alt={imagem.alt}
                layout="responsive"
                width={imagem.width}
                height={imagem.height}
                className="w-full"
              />
            </div>
          </div>
        </div>
      );
    };
