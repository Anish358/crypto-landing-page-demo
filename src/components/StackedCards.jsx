import React, { useEffect, useRef, useState } from "react";

const Links = {
  detailsButton: "https://docs.oculus.bot/oculusbot",
};

const cards = [
  {
    id: 1,
    sub: "Profiles",
    content: "Your personalized toolkit",
    bgColor: "bg-[#110A2B]",
  },
  {
    id: 2,
    sub: "Signals",
    content: "Vigilant eye on the Ethereum and Solana mainnets",
    bgColor: "bg-[#110A2B]",
  },
  {
    id: 3,
    sub: "Simulator",
    content: "Simulating Auto Buys is simple",
    bgColor: "bg-[#110A2B]",
  },
  {
    id: 4,
    sub: "Support",
    content: "Now its 24/7 support",
    bgColor: "bg-[#110A2B]",
  },
];

function StackedCards() {
  const [awayCards, setAwayCards] = useState([]);
  const stackAreaRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!stackAreaRef.current) return;

      const distance = window.innerHeight * 0.5;
      const topVal = stackAreaRef.current.getBoundingClientRect().top;
      const index = Math.floor(-1 * (topVal / distance + 1));

      const newAwayCards = cards
        .filter((_, i) => i <= index)
        .map((card) => card.id);

      setAwayCards(newAwayCards);
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
              transition-transform duration-500 ease-in-out p-9
              flex justify-between flex-col origin-bottom-left
              backdrop-blur-sm border border-[#00f2ff]/20
              ${card.bgColor}
            `}
            style={{
              transform: awayCards.includes(card.id)
                ? "translateY(-120vh) rotate(-48deg)"
                : `rotate(${-10 * index}deg)`,
              zIndex: cards.length - index,
            }}
          >
            <div className="font-poppins text-xl font-bold text-white">
              {card.sub}
            </div>
            <div className="font-poppins text-[44px] font-bold leading-[54px] text-white">
              {card.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackedCards;
