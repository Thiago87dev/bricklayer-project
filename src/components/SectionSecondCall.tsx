import Image from 'next/image'
import casa1 from "@/assets/img/casa1.png";
import casa2 from "@/assets/img/casa2.png";
import casa3 from "@/assets/img/casa3.jpg";

const SectionSecondCall = () => {
  return (
    <section className="bg-colorPrimary py-10">
        <div className="xl:w-3/5 px-8 mx-auto text-colorWhite flex flex-col md:flex-row items-center gap-2">
          <div className="flex flex-col md:flex-row md:w-3/5 gap-2 order-2 md:order-1">
            <div>
              <Image
                className="rounded-lg"
                alt="casa por fora"
                src={casa3}
                width={400}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Image
                className="rounded-lg md:w-48"
                alt="casa por dentro 1"
                src={casa1}
                width={400}
              />
              <Image
                className="rounded-lg md:w-48"
                alt="casa por dentro 2"
                src={casa2}
                width={400}
              />
            </div>
          </div>
          <div className="md:w-2/5 flex flex-col gap-2 order-1 md:order-2">
            <p className="text-sm font-bold">LEMBRE-SE</p>
            <h2 className="text-3xl font-bold">
              Por que escolher a D.D.M.N construções?
            </h2>
            <p className="text-base">
              Nossa equipe especializada tem anos de experiência tanto na
              construção quanto na reforma de casas de alvenaria. Estamos
              comprometidos em fornecer um serviço de excelência em cada projeto
              que assumimos, garantindo qualidade e satisfação em todas as
              etapas do processo.
            </p>
          </div>
        </div>
      </section>
  )
}

export default SectionSecondCall