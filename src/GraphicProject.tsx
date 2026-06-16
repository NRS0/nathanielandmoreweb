import { Link } from "react-router-dom";
import { Plus, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const projectImages = [
  "https://imglink.cc/cdn/l_sY-HMIdf.jpg",
  "https://imglink.cc/cdn/a8OKke-Sqc.jpg",
  "https://imglink.cc/cdn/QdUjyR6lpb.jpg",
  "https://imglink.cc/cdn/sKippGfZ7F.jpg",
  "https://imglink.cc/cdn/NskvfQj1k4.jpg",
  "https://imglink.cc/cdn/LhWv9Nb9ct.jpg"
];

export default function GraphicProject() {
  return (
    <div id="graphic-project-root" className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col relative">
      {/* Header */}
      <header id="graphic-project-header" className="px-6 py-4 md:p-8 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2 md:gap-4">
          <Link id="graphic-project-back-btn" to="/graphic-design" className="flex items-center gap-2 text-[14px] font-bold tracking-widest uppercase hover:text-[#b7ff00] active:text-[#b7ff00] transition-all p-4 -m-4">
            <ArrowLeft size={20} />
            <span className="hidden md:inline">Back</span>
          </Link>
          <Link id="graphic-project-home-logo" to="/" className="inline-block p-4 -m-4 text-[14px] md:text-sm font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-[#b7ff00] hover:opacity-70 transition-opacity">NATHANIELANDMORE</Link>
        </div>
        
        <h1 id="graphic-project-heading" className="hidden lg:block text-sm font-bold tracking-[0.4em] uppercase">Project</h1>
        
        <div className="flex items-center gap-2 md:gap-4">
          <a 
            id="graphic-project-email-link"
            href="mailto:nathaniel30012@gmail.com" 
            className="hidden sm:block p-2 -m-2 text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-[#b7ff00] hover:opacity-70 transition-opacity"
          >
            nathaniel30012@gmail.com
          </a>
          <a id="graphic-project-plus-link" href="mailto:nathaniel30012@gmail.com" className="cursor-pointer p-4 -m-4 block hover:opacity-70 transition-opacity" aria-label="Send email">
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
      <main id="graphic-project-main" className="flex-grow p-6 md:p-12 lg:p-20 max-w-screen-2xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {projectImages.map((img, index) => (
            <motion.div 
              key={index}
              id={`graphic-project-item-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden"
              style={{ willChange: 'transform, opacity' }}
            >
              <img 
                id={`graphic-project-img-${index}`}
                src={img} 
                alt={`Project Image ${index + 1}`}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer id="graphic-project-footer" className="p-12 border-t border-neutral-100 flex flex-col items-center gap-6 max-w-screen-2xl mx-auto w-full">
        <p className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-40">© Nathaniel Springer</p>
        <div className="flex gap-4 md:gap-8">
          <a id="graphic-project-social-ig" href="https://www.instagram.com/nathanielandmore/" target="_blank" rel="noopener noreferrer" className="p-4 text-[11px] font-bold tracking-widest uppercase hover:text-[#b7ff00] active:text-[#b7ff00] transition-all">Instagram</a>
          <a id="graphic-project-social-li" href="https://www.linkedin.com/in/nathaniel-springer-/" target="_blank" rel="noopener noreferrer" className="p-4 text-[11px] font-bold tracking-widest uppercase hover:text-[#b7ff00] active:text-[#b7ff00] transition-all">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
