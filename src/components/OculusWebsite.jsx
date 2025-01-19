import React from "react";
import {
  Bot,
  Shield,
  Terminal,
  Users,
  Settings,
  Activity,
  MessageCircle,
  Star,
  Heart,
  Command,
} from "lucide-react";

const OculusWebsite = () => {
  return (
    <>
      {/* Font imports */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");
      `}</style>

      <div className="min-h-screen bg-black text-white overflow-hidden font-[Rajdhani]">
        {/* Ambient background glow */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

        {/* Content wrapper */}
        <div className="relative">
          {/* Header/Hero Section */}
          <header className="container mx-auto px-4 py-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Bot className="w-20 h-20 text-blue-500 animate-pulse" />
                <div className="absolute inset-0 w-20 h-20 bg-blue-500 opacity-50 blur-xl rounded-full"></div>
              </div>
            </div>
            <h1 className="font-[Orbitron] text-6xl font-bold mb-4 animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 tracking-wider">
              OCULUS BOT
            </h1>
            <p className="font-[Share+Tech+Mono] text-xl text-blue-200 mb-8 max-w-2xl mx-auto tracking-wide">
              The next generation Discord bot for server management, moderation,
              and entertainment
            </p>
            <button className="relative group bg-blue-600 text-white font-[Orbitron] font-bold py-3 px-8 rounded-lg text-lg tracking-wider">
              <span className="relative z-10">INITIALIZE BOT</span>
              <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 blur-lg rounded-lg transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </button>
          </header>

          {/* Features Grid */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="font-[Orbitron] text-3xl font-bold text-center mb-12 text-blue-300 tracking-wider">
              FEATURES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Shield className="w-8 h-8 text-blue-400" />}
                title="Advanced Moderation"
                description="Powerful tools to keep your server safe and clean with automatic content filtering and user management."
                glowColor="blue"
              />
              <FeatureCard
                icon={<Shield className="w-8 h-8 text-blue-400" />}
                title="Advanced Moderation"
                description="Powerful tools to keep your server safe and clean with automatic content filtering and user management."
                glowColor="blue"
              />
              <FeatureCard
                icon={<Shield className="w-8 h-8 text-blue-400" />}
                title="Advanced Moderation"
                description="Powerful tools to keep your server safe and clean with automatic content filtering and user management."
                glowColor="blue"
              />
              {/* ... other FeatureCard components remain the same ... */}
            </div>
          </section>

          {/* Statistics Section */}
          <section className="py-16 relative">
            <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
            <div className="container mx-auto px-4 relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <StatCard
                  icon={<Command className="w-10 h-10" />}
                  value="500+"
                  label="Commands"
                />
                <StatCard
                  icon={<Users className="w-10 h-10" />}
                  value="1M+"
                  label="Users"
                />
                <StatCard
                  icon={<Star className="w-10 h-10" />}
                  value="50K+"
                  label="Servers"
                />
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="font-[Orbitron] text-3xl font-bold text-center mb-12 text-blue-300 tracking-wider">
              USER FEEDBACK
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                content="Best moderation bot I've ever used. Makes managing my server so much easier!"
                author="ServerMaster123"
              />
              <TestimonialCard
                content="The custom commands feature is amazing. I can create exactly what my community needs."
                author="DiscordPro"
              />
              <TestimonialCard
                content="Clean interface, reliable performance, and great support. Highly recommended!"
                author="CommunityBuilder"
              />
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 relative">
            <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
            <div className="container mx-auto px-4 text-center relative">
              <div className="flex justify-center space-x-6 mb-4">
                <Heart className="w-6 h-6 text-red-400 animate-pulse" />
                <a
                  href="#"
                  className="font-[Share+Tech+Mono] text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Discord
                </a>
                <a
                  href="#"
                  className="font-[Share+Tech+Mono] text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="font-[Share+Tech+Mono] text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Support
                </a>
              </div>
              <p className="font-[Share+Tech+Mono] text-blue-200">
                © 2025 Oculus Bot. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, glowColor }) => {
  const glowColors = {
    blue: "hover:shadow-blue-500/50",
    purple: "hover:shadow-purple-500/50",
    green: "hover:shadow-green-500/50",
    yellow: "hover:shadow-yellow-500/50",
    red: "hover:shadow-red-500/50",
    indigo: "hover:shadow-indigo-500/50",
  };

  return (
    <div
      className={`relative group bg-black border border-gray-800 p-6 rounded-lg 
                    transition-all duration-300 hover:border-blue-500
                    hover:shadow-lg ${glowColors[glowColor]}`}
    >
      <div className="relative z-10">
        <div className="mb-4">{icon}</div>
        <h3 className="font-[Orbitron] text-xl font-bold mb-2 text-blue-300">
          {title}
        </h3>
        <p className="font-[Share+Tech+Mono] text-gray-400">{description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-blue-900 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ icon, value, label }) => (
  <div className="p-6 relative group">
    <div className="relative z-10">
      <div className="flex justify-center mb-4 text-blue-400">{icon}</div>
      <div className="font-[Orbitron] text-4xl font-bold mb-2 text-blue-300">
        {value}
      </div>
      <div className="font-[Share+Tech+Mono] text-blue-200">{label}</div>
    </div>
    <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 blur-xl rounded-full transition-opacity duration-300"></div>
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ content, author }) => (
  <div
    className="relative group bg-black border border-gray-800 p-6 rounded-lg
                  transition-all duration-300 hover:border-blue-500
                  hover:shadow-lg hover:shadow-blue-500/20"
  >
    <div className="relative z-10">
      <p className="font-[Share+Tech+Mono] text-blue-100 mb-4">"{content}"</p>
      <p className="font-[Orbitron] text-blue-400 font-medium">- {author}</p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-black to-blue-900 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
  </div>
);

export default OculusWebsite;
