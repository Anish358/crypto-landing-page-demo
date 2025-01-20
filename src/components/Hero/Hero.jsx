import { motion } from "framer-motion";

const CONFIG = {
  artwork: "/hero.png",
  teaser: "/teaser.mp4",
};

const Links = {
  ethereumBot: "https://t.me/OculusEthereum_Bot?start=web",
  solonaBot: "https://t.me/OculusSolana_Bot?start=web",
};

const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative min-h-screen bg-[#2d1b55]/10 flex items-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:block absolute top-0 left-0 w-1/5"
      >
        <img
          src="/corner_hero.png"
          alt="Decorative background"
          className="object-contain"
        />
      </motion.div>

      <div className="container px-4 relative z-10 flex flex-col md:flex-row mx-auto items-center justify-between">
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

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full md:w-[900px] h-[500px] md:h-[900px] md:mr-[-100px]"
        >
          <img
            src={CONFIG.artwork}
            alt="Oculus Character"
            className="w-full h-full object-contain relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
