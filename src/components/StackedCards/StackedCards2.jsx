import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Links = {
  detailsButton: "https://docs.oculus.bot/oculusbot",
};

const cards = [
  {
    id: 1,
    bot: "/oculus-pro.png",
    text: "Pro Bot",
    bgColor: "bg-[#110A2B]",
  },
  {
    id: 2,
    bot: "/oculus-gold.png",
    text: "Gold Bot",
    bgColor: "bg-[#110A2B]",
  },
  {
    id: 3,
    bot: "/oculus-premium.png",
    text: "Premium Bot",
    bgColor: "bg-[#110A2B]",
  },
];

function StackedCards() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const stackAreaRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!stackAreaRef.current) return;

      const distance = window.innerHeight * 0.5;
      const topVal = stackAreaRef.current.getBoundingClientRect().top;
      const index = Math.floor(-1 * (topVal / distance + 1));

      setActiveCardIndex(Math.min(Math.max(index, 0), cards.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={stackAreaRef}
      className="w-full h-[300vh] relative bg-[#2d1b55]/10 flex"
    >
      <div className="h-screen sticky top-0 left-0 basis-1/2 flex items-center justify-center gap-4 flex-col">
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mb-8 md:mb-0"
        >
          <h1 className="font-[Orbitron] text-4xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r text-white">
            OCULUS
          </h1>
          <p className="font-[Share+Tech+Mono] text-xl md:text-2xl text-[#00f2ff] mb-8 tracking-wide">
            AUTONOMOUS RECONNAISSANCE
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            APE THE BEST OF BOTH WORLDS THROUGH AI WITH{" "}
            <span className="text-[#00f2ff]">$OCU</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="relative group bg-[#2d1b55]/80 text-white font-bold py-3 px-8 rounded-lg text-lg tracking-wider backdrop-blur-sm w-full sm:w-auto">
              <span className="relative z-10">
                {" "}
                <a target="_blank" href={Links.ethereumBot}>
                  ETHEREUM BOT{" "}
                </a>
              </span>
              <div className="absolute inset-0 bg-[#00f2ff] opacity-0 group-hover:opacity-20 blur-lg rounded-lg transition-all duration-300"></div>
            </button>
            <button className="relative group bg-[#00f2ff]/20 text-white font-bold py-3 px-8 rounded-lg text-lg tracking-wider backdrop-blur-sm w-full sm:w-auto">
              <span className="relative z-10">
                <a target="_blank" href={Links.solonaBot}>
                  SOLONA BOT{" "}
                </a>
              </span>
              <div className="absolute inset-0 bg-[#00f2ff] opacity-0 group-hover:opacity-20 blur-lg rounded-lg transition-all duration-300"></div>
            </button>
          </div>
        </motion.div>
      </div>

      <div className="h-screen sticky top-0 basis-1/2">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`
              w-[350px] h-[350px] rounded-[25px] mb-2.5 absolute 
              top-[calc(50%-175px)] left-[calc(50%-175px)]
              transition-all duration-700 ease-in-out p-9
              flex justify-between flex-col items-center
              ${index < activeCardIndex ? "opacity-0 translate-y-[-100vh]" : ""}
              ${index > activeCardIndex ? "opacity-0" : "opacity-100"}
            `}
            style={{
              zIndex: cards.length - index,
              pointerEvents: index === activeCardIndex ? "auto" : "none",
            }}
          >
            <div className="font-poppins text-[44px] font-bold leading-[54px] text-white">
              {card.text}
            </div>
            <div className="font-poppins text-xl font-bold text-white">
              <img src={card.bot} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackedCards;
