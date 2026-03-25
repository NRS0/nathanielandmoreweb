import { Link } from "react-router-dom";
import { Plus, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const realImages = [
  "https://framerusercontent.com/images/POfBNZZ9BVjYT4OMgMxVnV04XQM.png?scale-down-to=2048&width=2155&height=2082",
  "https://i.pinimg.com/736x/f0/a4/12/f0a412c63f5147cf60ae08fd1d452ed9.jpg",
  "https://i.pinimg.com/736x/da/1a/59/da1a599aa21f959af53213d4a51de0fc.jpg",
  "https://i.pinimg.com/736x/c9/94/23/c9942316fdcd913263996395181354cc.jpg",
  "https://i.pinimg.com/736x/76/48/6e/76486e0ad302b8ee302c18b5d195482f.jpg",
  "https://i.pinimg.com/474x/55/e6/62/55e6621b03aef9789f27862036df7178.jpg",
  "https://i.pinimg.com/736x/54/c6/36/54c636b63f0056572a8b049a755b2c83.jpg",
  "https://i.pinimg.com/736x/b4/cd/08/b4cd08e46dd76292154b35d52886219d.jpg",
  "https://i.pinimg.com/736x/e7/ab/58/e7ab58edb8bb8838bdf7325a76ace96a.jpg"
];

export default function GraphicDesign() {
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
        
        <h1 className="hidden lg:block text-sm font-bold tracking-[0.4em] uppercase">Graphic Design</h1>
        
        <div className="flex items-center gap-2 md:gap-4">
          <a 
            href="mailto:nathaniel30012@gmail.com" 
            className="hidden sm:block p-2 -m-2 text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-[#b7ff00] hover:opacity-70 transition-opacity"
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

      {/* Gallery Grid */}
      <main className="flex-grow p-6 md:p-12 lg:p-20 max-w-screen-2xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {realImages.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden"
            >
              <img 
                src={img} 
                alt={`Graphic Design Project ${index + 1}`}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
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
