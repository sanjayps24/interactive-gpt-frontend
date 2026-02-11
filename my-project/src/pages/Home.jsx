import React from "react";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl text-center space-y-12">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl">
          What can I help with?
        </h1>

        <div className="relative group mx-auto">
          {/* Glowing effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur opacity-25 group-focus-within:opacity-75 transition duration-1000"></div>

          <div className="relative flex items-center bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl px-6 py-5 shadow-2xl focus-within:ring-2 focus-within:ring-white/50 transition-all">
            <input
              type="text"
              placeholder="Ask anything..."
              className="flex-1 outline-none text-xl text-white placeholder-white/60 bg-transparent font-medium"
            />
            <button className="ml-4 p-3.5 bg-gradient-to-br from-white to-gray-200 text-black rounded-2xl hover:scale-110 active:scale-95 transition-all shadow-[0_10px_20px_-5px_rgba(255,255,255,0.3)] hover:rotate-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          {[
            { name: "Analyze Data", color: "hover:border-emerald-400 hover:text-emerald-200" },
            { name: "Build a Plan", color: "hover:border-amber-400 hover:text-amber-200" },
            { name: "Draft Email", color: "hover:border-rose-400 hover:text-rose-200" },
            { name: "Code Helper", color: "hover:border-indigo-400 hover:text-indigo-200" }
          ].map((item) => (
            <button
              key={item.name}
              className={`px-6 py-2.5 text-sm font-bold backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl text-white/90 transition-all shadow-lg ${item.color}`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <footer className="mt-20">
        <p className="text-xs font-medium text-white/50 text-center max-w-md drop-shadow-md">
          ChatGPT can make mistakes. So, it's your fault if you trust it blindly!😁..
        </p>
      </footer>
    </div>
  );
};

export default Home;