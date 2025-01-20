import React, { useEffect, useRef, useState } from "react";

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
        <h1 className="w-[420px] text-[84px] font-bold leading-[88px] font-poppins">
          What we Offer
        </h1>
        <div className="w-[430px] font-poppins text-sm mt-8">
          <p className="font-semibold text-xl text-gray-400">
            Next-generation bot for automated cross-chain reconnaissance and
            trading that seamlessly bridges both Ethereum and Solana, delivering
            unmatched insights and strategic power
          </p>
          <p className="text-lg md:text-xl text-gray-400 py-6">
            CA: 0xB90dC272EFB78740d9ab15653FADCcf061E2079c
          </p>
          <button className="font-bold text-lg mt-5 px-8 py-4 bg-[#00f2ff]/20 hover:bg-[#00f2ff]/30 text-white rounded-full font-poppins cursor-pointer transition-colors duration-300">
            <a href={Links.detailsButton}>See More Details</a>
          </button>
        </div>
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
