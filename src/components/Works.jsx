import React from "react";

import Img01 from "../assets/justica.png";
import Img02 from "../assets/livro-de-direito.png";
import Img03 from "../assets/lei.png";
import Img04 from "../assets/heranca.png";
import Img05 from "../assets/prancheta.png";
import Img06 from "../assets/juiz.png";

const Works = () => {
  return (
    <div id="skills" className="w-full lg:h-full p-2 bg-[#8C1C39]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-start h-full">
        <h2 className="py-8 text-center text-white">Nossas Especialidades</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 shadow-xl hover:scale-105 duration-300 bg-white">
            <div className="flex flex-col justify-center items-center">
              <div className="m-auto">
                <img src={Img01} width="100px" height="100px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl py-4">Direito Civil</h2>
                <p className="text-center py-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore ducimus.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl hover:scale-105 duration-300 bg-white">
            <div className="flex flex-col justify-center items-center">
              <div className="m-auto">
                <img src={Img02} width="100px" height="100px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl py-4">Direito Civil</h2>
                <p className="text-center py-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore ducimus.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl hover:scale-105 duration-300 bg-white">
            <div className="flex flex-col justify-center items-center">
              <div className="m-auto">
                <img src={Img03} width="100px" height="100px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl py-4">Direito Civil</h2>
                <p className="text-center py-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore ducimus.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl hover:scale-105 duration-300 bg-white">
            <div className="flex flex-col justify-center items-center">
              <div className="m-auto">
                <img src={Img04} width="100px" height="100px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl py-4">Direito Civil</h2>
                <p className="text-center py-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore ducimus.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl hover:scale-105 duration-300 bg-white">
            <div className="flex flex-col justify-center items-center">
              <div className="m-auto">
                <img src={Img05} width="100px" height="100px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl py-4">Direito Civil</h2>
                <p className="text-center py-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore ducimus.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl hover:scale-105 duration-300 bg-white">
            <div className="flex flex-col justify-center items-center">
              <div className="m-auto">
                <img src={Img06} width="100px" height="100px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl py-4">Direito Civil</h2>
                <p className="text-center py-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore ducimus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
