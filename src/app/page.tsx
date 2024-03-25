import Image from "next/image";
import pedreiro from "@/assets/img/pedreiro.png";
import vinte from "@/assets/img/vinte.png";
import whats from "@/assets/img/whats.png";
import mais from "@/assets/img/mais.png";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-colorPrimary">
        <div className="xl:w-3/5 mx-auto pt-28">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center mb-8">
              <h1 className="text-colorWhite text-6xl xs:text-7xl sm:text-8xl font-bold">D.D.M.N</h1>
              <p className="text-colorWhite text-2xl sm:text-4xl">Soluções em Reformas</p>
            </div>
            <div className="flex flex-col items-center ">
              <div className="flex items-center relative">
                <Image
                  className=" absolute right-36"
                  alt="mais"
                  src={mais}
                  width={100}
                  height={100}
                />
                <Image
                  className=""
                  alt="vinte"
                  src={vinte}
                  width={200}
                  height={200}
                />
              </div>
              <p className="text-colorGold text-3xl font-bold text-center">
                Anos de Experiência
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-colorWhite p-12 text-base md:text-3xl text-center my-4">
              Investir na reforma da sua casa vai muito além de simples
              melhorias físicas. É um investimento direto na qualidade de vida e
              no bem estar de sua família. Não deixe passar mais tempo adiando
              as mudanças necessárias - invista no futuro do seu lar!
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col items-center relative rounded-xl p-6  bg-[#374964]">
              <p className="text-colorWhite text-2xl font-bold text-center">Precisando reformar</p>
              <p className="text-colorGold text-4xl xs:text-6xl font-bold text-center">Sua Casa ?</p>
              <p className="text-colorGold text-4xl xs:text-6xl font-bold text-center opacity-80">Sua Casa ?</p>
              <p className="text-colorGold text-4xl xs:text-6xl font-bold text-center opacity-40">Sua Casa ?</p>
              <p className="text-colorGold text-4xl xs:text-6xl font-bold text-center opacity-10">Sua Casa ?</p>
              <Image className="absolute bottom-1 w-36 xs:w-52" alt="pedreiro" src={pedreiro} width={200} height={200} />
            </div>
            <Link href="/"><Image className="hover:scale-105" alt="whats" src={whats} width={400} height={400} /></Link>
            
          </div>
        </div>
      </section>
    </main>
  );
}
