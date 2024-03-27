import Image from 'next/image'
import reforma from "@/assets/img/reforma.jpg";

const SectionFirsCall = () => {
  return (
    <section className="py-20 bg-colorSecundary ">
        <div className="xl:w-3/5 px-8  mx-auto flex flex-col md:flex-row justify-between items-center gap-8 ">
          <div className="md:w-2/5">
            <Image
              className="w-[22rem]"
              alt="reforma"
              src={reforma}
              width={300}
              height={300}
            />
          </div>
          <div className="md:w-3/5 flex flex-col gap-2 ">
            <p className="text-sm font-bold">
              SUA SATISFAÇÃO EM PRIMEIRO LUGAR
            </p>
            <h2 className="text-3xl font-bold">
              Você visualiza, idealiza, sonha, e nós tornamos realidade.
            </h2>
            <p className="text-base">
              Construímos lares com planejamento meticuloso e execução precisa,
              liderados por uma equipe de profissionais qualificados, garantindo
              soluções abrangentes para sua nova moradia. Projetos
              personalizados conforme suas necessidades, promovendo conforto e
              segurança para você e sua família, do início ao fim da construção.
            </p>
          </div>
        </div>
      </section>
  )
}

export default SectionFirsCall