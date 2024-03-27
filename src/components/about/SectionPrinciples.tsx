import Image from "next/image";
import Link from "next/link";
import antesDepois  from '@/assets/img/antes-depois.jpg'

const SectionPrinciples = () => {
  return (
    <section className="py-12 bg-colorGreenDark">
      <div className="xl:w-3/5 mx-auto pt-20 px-8 flex flex-col items-center gap-8">
        <h2 className="text-colorWhite text-7xl font-semibold text-center">Nós somos a D.D.M.N</h2>
        <p className="text-colorWhite text-lg">
          A Empresa D.D.M.N Construções é uma líder de mercado no setor da
          construção, dedicada a oferecer soluções inovadoras e de alta
          qualidade para projetos residenciais, comerciais e industriais. Com
          mais de duas décadas de experiência sólida e um portfólio
          diversificado de empreendimentos bem-sucedidos, a nossa empresa tem
          sido reconhecida pela sua expertise e compromisso com a excelência.
        </p>
        <Image alt="casa por dentro" src={antesDepois} width={600} />
        <Link href="/contact">
          <button className="bg-colorGreen text-colorWhite text-2xl py-2 px-6 hover:scale-105 font-medium rounded-sm">Contato</button>
        </Link>
      </div>
    </section>
  );
};

export default SectionPrinciples;
