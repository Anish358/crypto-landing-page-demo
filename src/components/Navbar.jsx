import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    setActiveSection(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 ease-in-out z-50  ${
        hasScrolled
          ? "bg-[#050309]/10 shadow-lg py-2 backdrop-blur-sm"
          : "bg-[#050309]/10"
      }`}
    >
      <div className="mx-[80px] flex h-16 items-center justify-center gap-10">
        <div
          className={`text-xl font-bold text-[#0F2E2F] transition-transform duration-300 md:text-2xl ${
            hasScrolled ? "scale-120" : "scale-100"
          }`}
        >
          <a
            href="#Hero"
            className="font-[Orbitron] text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#2d1b55] cursor-pointer"
          >
            OCULUS
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden items-center space-x-6 md:flex lg:space-x-10">
          {["Bots", "Features", "Pricing", "Statistics", "Teaser"].map(
            (section) => (
              <a
                onClick={() => scrollToSection(section)}
                key={section}
                className="font-bold text-white hover:text-gray-900 transition-all duration-300 cursor-pointer text-2xl"
              >
                {section}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 animate-fade-in" />
                )}
              </a>
            )
          )}
        </div>

        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full border-t bg-white md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              {["Bots", "Features", "Pricing", "Teaser"].map((section) => (
                <a
                  onClick={() => scrollToSection(section)}
                  key={section}
                  className="font-semibold text-black hover:text-gray-900 transition-all duration-300"
                >
                  {section}
                  {activeSection === section && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 animate-fade-in" />
                  )}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
