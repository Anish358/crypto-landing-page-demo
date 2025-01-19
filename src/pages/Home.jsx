import StackedCards from "../components/StackedCards";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className=" min-h-screen bg-black text-white font-[Rajdhani]">
      <Hero />
      <StackedCards />
      <Features />
      <Statistics />
      <Footer />
    </div>
  );
};

export default Home;
