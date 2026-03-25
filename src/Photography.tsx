import { Link } from "react-router-dom";
import { Plus, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const photographyImages = [
  "https://framerusercontent.com/images/T8kWwRMj4185jmpEu9Fq3kFhj0o.jpg?scale-down-to=4096&width=4160&height=6240",
  "https://i.pinimg.com/736x/c9/59/d2/c959d205176f3689fb0c31c97a8154d0.jpg",
  "https://framerusercontent.com/images/JMTUj2KvbJNSYO6rbHDHb0upt7g.jpg?scale-down-to=2048&width=4160&height=5025",
  "https://framerusercontent.com/images/vrQewI18sl2oI1vIzJxVQ2avoE.jpg?scale-down-to=4096&width=4160&height=6240",
  "https://framerusercontent.com/images/SGGDKTsL5MUVZzeWdmN6kADpA.jpg?scale-down-to=4096&width=4160&height=6240",
  "https://i.pinimg.com/474x/b1/ac/78/b1ac781f6715a2be58f7cb2c5a7db022.jpg",
  "https://i.pinimg.com/736x/e5/34/44/e53444fc5deeaa6cfc2439d19822d72d.jpg",
  "https://i.pinimg.com/736x/51/4e/81/514e8144405b432fe0c2f02f2cfd9d34.jpg",
  "https://i.pinimg.com/736x/af/13/3a/af133ad3d2cd61c2a269e9b94198c879.jpg",
  "https://i.pinimg.com/736x/a9/26/7b/a9267ba7ccb74e797fe1fe1d1bbead38.jpg",
  "https://i.pinimg.com/736x/44/0d/e0/440de037830a1df599c01478f6b28f7c.jpg",
  "https://i.pinimg.com/736x/22/b7/cc/22b7cc3eead553e3dea7444fcda681d9.jpg",
  "https://i.pinimg.com/736x/fc/7f/e2/fc7fe22118c203d7b265f5d67e1b992f.jpg",
  "https://i.pinimg.com/736x/2f/bd/f4/2fbdf467e644d0fe459c55c6d66052cd.jpg"
];

export default function Photography() {
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
        
        <h1 className="hidden lg:block text-sm font-bold tracking-[0.4em] uppercase">Photography</h1>
        
        <div className="flex items-center gap-2 md:gap-4">
          <a 
            href="mailto:nathaniel30012@gmail.com" 
            className="hidden sm:block p-2 -m-2 text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-[#b7ff00] hover:opacity-70 transition-opacity"
          >
            nathaniel30012@gmail.com
          </a>
          <a href="mailto:nathaniel30012@gmail.com" className="cursor-pointer p-4 -m-4 block hover:opacity-70 transition-opacity">
            <Plus size={24} className="md:w-7 md:h-7" strokeWidth={2.5} />
          </a>
        </div>
      </header>

      {/* Gallery Grid - 2 columns as requested */}
      <main className="flex-grow p-6 md:p-12 lg:p-20 max-w-screen-2xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {photographyImages.map((img, index) => (
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
                alt={`Photography ${index + 1}`}
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
