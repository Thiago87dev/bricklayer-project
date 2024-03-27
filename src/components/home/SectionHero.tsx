import Image from 'next/image'
import Link from 'next/link'
import pedreiro from "@/assets/img/pedreiro.png";
import vinte from "@/assets/img/vinte.png";
import whats from "@/assets/img/whats.png";
import mais from "@/assets/img/mais.png";

const SectionHero = () => {
  return (
    <section className="bg-colorGreenDark py-12">
        <div className="xl:w-3/5 mx-auto pt-20 px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center mb-8">
              <h1 className="text-colorWhite text-6xl xs:text-7xl sm:text-8xl font-bold">
                D.D.M.N
              </h1>
              <p className="text-colorWhite text-center text-2xl sm:text-4xl">
                Soluções em Construção e Reformas
              </p>
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
            <h2 className="text-colorWhite p-8 text-base md:text-3xl text-center my-4">
              Investir na construção ou reforma de sua casa vai além de simples
              mudanças físicas. É um investimento direto na qualidade de vida e
              no bem-estar de sua família. Não adie mais as transformações
              necessárias - invista no futuro de seu lar e proporcione um
              ambiente que atenda às necessidades e desejos de todos.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col items-center relative rounded-xl px-1 py-6 bg-colorDarkgray">
              <p className="text-colorWhite text-2xl font-bold text-center">
                Precisando reformar
              </p>
              <p className="text-colorGold text-4xl xs:text-6xl font-bold text-center">
                Sua Casa?
              </p>
              <p className="text-colorGold text-4xl xs:text-6xl font-bold text-center opacity-80">
                Sua Casa?
              </p>
              <p className="text-colorGold text-4xl xs:text-6xl font-bold text-center opacity-40">
                Sua Casa?
              </p>
              <p className="text-colorGold text-4xl xs:text-6xl font-bold text-center opacity-10">
                Sua Casa?
              </p>
              <Image
                className="absolute bottom-1 w-36 xs:w-52"
                alt="pedreiro"
                src={pedreiro}
                width={200}
                height={200}
              />
            </div>
            <Link href="/">
              <Image
                className="hover:scale-105 p-8"
                alt="whats"
                src={whats}
                width={400}
                height={400}
              />
            </Link>
          </div>
        </div>
      </section>
  )
}

export default SectionHero