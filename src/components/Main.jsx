import React from "react";
import Banner from "../assets/banner.png";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="absolute w-full h-full flex justify-center items-center">
        <img className="relative w-full h-full" src={Banner} alt="" />
        <div className="absolute">
          <h2 className="py-4 text-white">Muito Mais Do Que Um Escritório.</h2>
          <h1 className="py-2 text-white">Seu Parceiro De Resultados</h1>
          <p className="py-4 max-w-[70%] m-auto text-white">
            Aqui tenho por objetivo oferecer as melhores soluções jurídicas para
            os meus clientes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
