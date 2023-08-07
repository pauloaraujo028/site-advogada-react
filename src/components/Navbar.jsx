import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import NavLogo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-16 shadow-xl z-[10] bg-[#2c2e33]"
          : "fixed w-full h-20 z-[10]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <a href="/">
          <img src={NavLogo} alt="/" width="200" className="cursor-pointer" />
        </a>
        <div>
          <ul className="hidden md:flex font-bold">
            <a href="/">
              <li className="ml-10 text-sm capitalize hover:border-b text-white">
                Inicio
              </li>
            </a>
            <a href="/#about">
              <li className="ml-10 text-sm capitalize hover:border-b text-white">
                Sobre
              </li>
            </a>
            <a href="/#skills">
              <li className="ml-10 text-sm capitalize hover:border-b text-white">
                Nossas Especialidades
              </li>
            </a>
            <a href="/#contact">
              <li className="ml-10 text-sm capitalize hover:border-b text-white">
                Contato
              </li>
            </a>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <a href="/">
                <img src={NavLogo} width="87" height="70" alt="/" />
              </a>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:text-black dark:bg-white dark:shadow-none "
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-2">
              <p className="w-[85%] md:w-[90%] py-2">
                Vamos construir algo lendário juntos
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <a href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Inicio
                </li>
              </a>
              <a href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Sobre
                </li>
              </a>
              <a href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Habilidades
                </li>
              </a>
              <a href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projetos
                </li>
              </a>
              <a href="/#certificates">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Certificados
                </li>
              </a>
              <a href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contato
                </li>
              </a>
            </ul>
            <div className="pt-8">
              <p className="uppercase tracking-widest text-[#fe140d]">
                Vamos Conversar
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/pauloaraujo028/"
                  target="_blank"
                  rel="noreferrer"
                  title="Veja meu LinkedIn"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-3 
                cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white dark:text-black dark:shadow-none"
                  >
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/pauloaraujo028"
                  target="_blank"
                  rel="noreferrer"
                  title="Veja meu GitHub"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-3 
                cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white dark:text-black dark:shadow-none"
                  >
                    <FaGithub />
                  </div>
                </a>
                <a
                  href="mailto:pauloaraujo.phz@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  title="Entre em contato via e-mail"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-3 
                cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white dark:text-black dark:shadow-none"
                  >
                    <AiOutlineMail />
                  </div>
                </a>
                <a
                  href="https://wa.me/5511934429311"
                  target="_blank"
                  rel="noreferrer"
                  title="Entre em contato via Whatsapp"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-3 
                cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white dark:text-black dark:shadow-none"
                  >
                    <FaWhatsapp />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
