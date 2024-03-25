import Image from "next/image";
import estrelas from "@/assets/img/estrelas.png";

interface FeedbackProps {
    nome: string
    texto: string
}

const Feedback = ({nome, texto}: FeedbackProps) => {
  return (
    <div className="bg-colorBlack inline-block w-64 xs:w-96 p-6 rounded-2xl ">
      <div className="flex items-center flex-col gap-5">
        <h1 className="text-4xl text-colorWhite font-semibold">Feedback</h1>
        <div className="bg-colorWhite w-60 xs:w-80 h-60 rounded-xl p-3">
          <h2 className="font-bold">{nome}</h2>
          <Image alt="cinco estrelas" src={estrelas} width={90} />
          <p className="text-sm">
            {texto}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
