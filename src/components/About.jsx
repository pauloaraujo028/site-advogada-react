import React from "react";
import teste from "../assets/banner.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl font-bold tracking-widest text-[#8C1C39]">
            Sobre
          </p>
          <h2 className="py-4">Quem sou Eu</h2>
          <p className="py-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum animi,
            adipisci repudiandae earum rerum explicabo alias voluptates
            assumenda aliquid in quod, officia porro nesciunt ad accusamus fugit
            aliquam autem dolorum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Porro, ducimus unde praesentium qui minus
            molestiae autem et at. Impedit quos unde distinctio recusandae
            maxime blanditiis debitis ipsum quia maiores non.
          </p>
          <p className="py-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum animi,
            adipisci repudiandae earum rerum explicabo alias voluptates
            assumenda aliquid in quod, officia porro nesciunt ad accusamus fugit
            aliquam autem dolorum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Porro, ducimus unde praesentium qui minus
            molestiae autem et at. Impedit quos unde distinctio recusandae
            maxime blanditiis debitis ipsum quia maiores non.
          </p>
          <p className="py-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum animi,
            adipisci repudiandae earum rerum explicabo alias voluptates
            assumenda aliquid in quod, officia porro nesciunt ad accusamus fugit
            aliquam autem dolorum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Porro, ducimus unde praesentium qui minus
            molestiae autem et at. Impedit quos unde distinctio recusandae
            maxime blanditiis debitis ipsum quia maiores non.
          </p>
        </div>
        <div
          className="w-full h-full m-auto shadow-xl shadow-gray-400 bg-[#8C1C39] rounded-tl-full rounded-br-full 
        flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <img src={teste} className="h-full" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
