import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  
  const defaultImage = "https://i.pinimg.com/736x/f8/d6/5e/f8d65e8047729f8be8c2bf2841332a3e.jpg";
  const hoverImage = "https://i.pinimg.com/736x/11/12/a5/1112a5fe571a764082a5ad9efe731c71.jpg";

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col relative">
      {/* Header */}
      <header className="px-6 py-4 md:p-8 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/" className="flex items-center gap-2 text-[14px] font-bold tracking-widest uppercase hover:text-[#b7ff00] active:text-[#b7ff00] transition-all p-4 -m-4">
            <ArrowLeft size={20} />
            <span className="hidden md:inline">Back</span>
          </Link>
          <Link to="/" className="inline-block p-4 -m-4 text-[14px] md:text-sm font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-[#b7ff00] hover:opacity-70 transition-opacity">NATHANIELANDMORE</Link>
        </div>
        
        <h1 className="hidden lg:block text-sm font-bold tracking-[0.4em] uppercase">About</h1>
        
        <div className="flex items-center gap-2 md:gap-4">
          <a 
            href="mailto:nathaniel30012@gmail.com" 
            className="p-2 -m-2 text-[8px] sm:text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-[#b7ff00] hover:opacity-70 transition-opacity"
          >
            nathaniel30012@gmail.com
          </a>
          <a href="mailto:nathaniel30012@gmail.com" className="cursor-pointer p-4 -m-4 block hover:opacity-70 transition-opacity">
            <motion.div
              whileHover={{ rotate: 90 }}
              whileTap={{ rotate: 360 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <Plus size={24} className="md:w-7 md:h-7" strokeWidth={2.5} />
            </motion.div>
          </a>
        </div>
      </header>

      {/* About Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 max-w-screen-xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center"
        >
          <div className="w-[96%] sm:w-[80%] md:w-[64%] lg:w-[48%] max-w-[512px] mb-20">
            <img 
              src={isHovered ? hoverImage : defaultImage} 
              alt="About Image" 
              className="w-full h-auto block transition-all duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>

          <div className="text-center w-full">
            <h3 className="text-[12px] font-bold tracking-[0.5em] uppercase mb-12 opacity-40">Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 text-[13px] font-bold tracking-widest uppercase max-w-2xl mx-auto">
              <span>Art Direction</span>
              <span>Brand Identity</span>
              <span>Editorial Design</span>
              <span>Portrait Photography</span>
              <span>Digital Strategy</span>
              <span>Visual Content</span>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="p-12 border-t border-neutral-100 flex flex-col items-center gap-6 max-w-screen-2xl mx-auto w-full">
        <p className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-40">© Nathaniel Springer</p>
        <div className="flex gap-4 md:gap-8">
          <a href="https://www.instagram.com/nathanielandmore/" target="_blank" rel="noopener noreferrer" className="p-4 text-[11px] font-bold tracking-widest uppercase hover:text-[#b7ff00] active:text-[#b7ff00] transition-all">Instagram</a>
          <a href="https://www.linkedin.com/in/nathaniel-springer-/" target="_blank" rel="noopener noreferrer" className="p-4 text-[11px] font-bold tracking-widest uppercase hover:text-[#b7ff00] active:text-[#b7ff00] transition-all">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
