import { FaDiscord, FaGlobe, FaTelegram, FaTwitter } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { motion } from "framer-motion";

const Footer = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const Links = {
    twitter: "https://x.com/Oculus_Bot",
    discord: "https://x.com/Oculus_Bot",
    telegram: "https://t.me/OfficialOculusBot",
    documentation: "https://docs.oculus.bot/oculusbot",
    chart:
      "https://dexscreener.com/ethereum/0x2b62a496f29a8a6d8ead20f20bb76ed65919309f",
  };

  return (
    <footer className="bg-[#2d1b55]/10 text-gray-400 py-12">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div variants={item} className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm">Managed by</p>
              <h1 className="font-[Orbitron] text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#2d1b55]">
                OCULUS
              </h1>
            </div>

            <div className="flex space-x-4">
              <motion.a
                target="_blank"
                whileHover={{ scale: 1.1 }}
                href={Links.twitter}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00f2ff]/20 hover:bg-[#00f2ff]/30 transition-colors"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                target="_blank"
                whileHover={{ scale: 1.1 }}
                href={Links.twitter}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00f2ff]/20 hover:bg-[#00f2ff]/30 transition-colors"
              >
                <FaDiscord />
              </motion.a>
              <motion.a
                target="_blank"
                whileHover={{ scale: 1.1 }}
                href={Links.telegram}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00f2ff]/20 hover:bg-[#00f2ff]/30 transition-colors"
              >
                <FaTelegram />
              </motion.a>
              <motion.a
                target="_blank"
                whileHover={{ scale: 1.1 }}
                href={Links.documentation}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00f2ff]/20 hover:bg-[#00f2ff]/30 transition-colors"
              >
                <IoIosDocument />
              </motion.a>
            </div>

            <p className="text-sm">© 2025 Oculus AI. All rights reserved.</p>
          </motion.div>

          <div></div>

          <motion.div variants={item}>
            <h3 className="text-white font-medium mb-4">Oculus AI</h3>
            <ul className="space-y-3">
              <li>
                <a
                  target="_blank"
                  href={Links.documentation}
                  className="hover:text-[#00f2ff] transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href={Links.chart}
                  className="hover:text-[#00f2ff] transition-colors"
                >
                  Chart
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href={Links.chart}
                  className="hover:text-[#00f2ff] transition-colors"
                >
                  Contract
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-white font-medium mb-4">GET CONNECTED</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-[#00f2ff] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-[#00f2ff] transition-colors"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href={Links.twitter}
                  className="hover:text-[#00f2ff] transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-[#00f2ff] transition-colors"
              >
                <FaGlobe className="w-5 h-5" />
                <span>EN</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
