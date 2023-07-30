import React from "react";
import "./Hero.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["HERMOSA", "ELEGANTE", "GALLARDA"],
      typeSpeed: 160,
      backSpeed: 30,
      loopCount: 2,
      loop: true,
      cursorChar: ".",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="BG bgphone w-screen bg-cover">
      <div className="overlay w-screen flex flex-col items-center">
        <div className="h-[50%] flex flex-col justify-center text-white">
          <h1 className="text-6xl ">Make-UP</h1>
          <h2 className="text-3xl ">
            El arte <br /> de hacerte <br />{" "}
            <span className="text-[#ffdc73]" ref={el}>
              {" "}
            </span>
          </h2>
        </div>
        <div className="flex">
          <span className="one w-[8px] h-[35px] rounded-md bg-gray-100 m-[6px]"></span>
          <span className="two w-[8px] h-[35px] rounded-md bg-gray-100 m-[6px]"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
