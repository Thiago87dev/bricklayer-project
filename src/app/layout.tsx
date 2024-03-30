import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SiWhatsapp } from "react-icons/si";
import Link from "next/link";
import Footer from "@/components/Footer";

const rubik = Rubik({subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D.D.M.N Construções",
  description: "Soluções em Construção e Reformas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative  ${rubik.className} tracking-tighter`}>
        <Navbar />
        {children}
        <div className="bg-colorGreen inline-block rounded-full hover:scale-110 text-colorWhite fixed bottom-16 right-8 p-2">
          <Link target="_blank" href="https://wa.me/5521991348429"><SiWhatsapp size={30}  /></Link>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
