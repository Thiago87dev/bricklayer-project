import Link from "next/link";
import { SiInstagram, SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <div className="text-colorBlack flex flex-col md:flex-row text-center justify-around items-center p-6 gap-4 bg-colorGold ">
      <div className="flex flex-col items-start order-2 md:order-1">
        <p>Copyright© 2024 D.D.M.N construções</p>
        <p>
          Projetado e codificado por{" "}
          <span className="text-blue-700">
            <Link
              target="_blank"
              href="https://portifolio-five-neon.vercel.app/"
            >
              Thiago Alves
            </Link>
          </span>
        </p>
      </div>
      <p className="flex gap-4 text-2xl order-1 md:order-2">
        <Link
          target="_blank"
          href="https://www.instagram.com/d.d.m.n.construcoes?igsh=c2tnNHZxMXpudG4w"
        >
          <SiInstagram title="Instagram" className="hover:scale-110" />
        </Link>{" "}
        <Link target="_blank" href="https://www.facebook.com/profile.php?id=100094175112687&mibextid=ZbWKwL">
          <SiFacebook title="Facebook" className="hover:scale-110"/>
        </Link>{" "}
      </p>
    </div>
  );
};

export default Footer;
