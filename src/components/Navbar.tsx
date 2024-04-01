"use client";

import Link from "next/link";
import { Alegreya } from "next/font/google";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import logo from "@/assets/img/logo.png";
import Image from "next/image";

const alegreya = Alegreya({ subsets: ["latin"] });

const navigation = [
  { title: "Inicio", href: "/" },
  { title: "Projetos", href: "/projects" },
  { title: "Sobre", href: "/about" },
  { title: "Contato", href: "/contact" },
];

const Navbar = () => {
  const [active, setActive] = useState(false);

  function toggleMenu() {
    setActive(!active);
  }

  function clomeMenu() {
    setActive(false);
  }

  return (
    <div className={`${alegreya.className} fixed w-full z-20`}>
      <nav className="flex justify-between items-center bg-colorGold">
        <div className="flex items-center justify-between w-3/5 mx-auto">
          <Link
            href="/"
            className="hidden md:flex gap-2 items-center py-2 text-colorBlack hover:scale-105 cursor-pointer"
          >
            <p className="text-4xl font-semibold relative group overflow-hidden">
              <Image
                className="rounded-full"
                alt="logo"
                width={70}
                src={logo}
              />
            </p>
          </Link>
          <div className="hidden md:flex justify-end gap-8 p-5 text-colorBlack ">
            {navigation.map((item) => (
              <Link
                className="text-sm uppercase font-semibold relative group overflow-hidden"
                key={item.title}
                href={item.href}
              >
                {item.title}
                <span className="w-full h-[3px] bg-colorWhite absolute inline-block left-0 bottom-0 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-200" />
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className="md:hidden flex justify-between p-4 items-center bg-colorGold">
        {!active ? (
          <div className="flex justify-between w-full items-center h-16 ">
            <div>
              <Link
                href="/"
                className=" flex gap-2 items-center p-5 text-colorBlack hover:text-colorSecundary cursor-pointer"
              >
                <p className="text-4xl font-semibold relative group overflow-hidden">
                  <Image
                    className="rounded-full"
                    alt="logo"
                    width={70}
                    src={logo}
                  />
                </p>
              </Link>
            </div>
            <IoMenu
              className="text-4xl cursor-pointer text-colorBlack"
              onClick={toggleMenu}
            />
          </div>
        ) : (
          <div className="flex flex-col w-full justify-center ">
            <div className="flex justify-between items-center h-16">
              <p className="text-4xl ml-5 text-colorBlack font-semibold relative group overflow-hidden">
                <Image
                  className="rounded-full"
                  alt="logo"
                  width={70}
                  src={logo}
                />
              </p>
              <IoClose
                className="text-4xl cursor-pointer text-colorBlack"
                onClick={toggleMenu}
              />
            </div>

            <div className="bg-opacity-90 z-20 flex flex-col h-96 justify-around items-center rounded-lg">
              {navigation.map((item) => (
                <Link
                  onClick={clomeMenu}
                  className="text-lg uppercase text-colorBlack font-semibold flex flex-col "
                  key={item.title}
                  href={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
