/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Plus, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GraphicDesign from "./GraphicDesign";
import Photography from "./Photography";
import About from "./About";

function Home() {
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isLeftImageHovered, setIsLeftImageHovered] = useState(false);
  const [isRightImageHovered, setIsRightImageHovered] = useState(false);
  const [isPhotographyHovered, setIsPhotographyHovered] = useState(false);
  const [isGraphicDesignHovered, setIsGraphicDesignHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const categories = [
    "Graphic Design",
    "Photography",
    "About"
  ];

  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/nathanielandmore/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/nathaniel-springer-/" }
  ];

  const defaultImage = "https://i.pinimg.com/736x/4a/d7/22/4ad722f6bc160675fca73f93362ca163.jpg";
  const menuHoverImage = "https://i.pinimg.com/736x/6f/13/55/6f135539414ccdfacc38d640e22fbb7e.jpg";
  const imageHoverImage = "https://i.pinimg.com/736x/0d/7f/ff/0d7fffb845b4218d2a28ba613a6d2cdf.jpg";
  const leftImageHoverImage = "https://i.pinimg.com/736x/e7/5d/c9/e75dc95913c6476c4395317e76be62c1.jpg";
  const rightImageHoverImage = "https://i.pinimg.com/736x/4c/79/ae/4c79ae3306a41c906b43762ca67182c0.jpg";
  const photographyHoverImage = "https://previews.dropbox.com/p/thumb/AC-qsL-15DrYvb5sJun-YEsGq_M8DBUbycU6x3tMGQJchrTNAzHCf_gTxfVm1TThe47Z-2D_zrM4cV7AwEUONmEeqCes7T12063RscSffsQdp4x2t-GfUcaX4jIhkeynbREABmEh9lyEmkkQ8iylHUHSBRz7_Yp99ljXxaSTWMXn1hJSdmffArQ223FWccRtacpO4GeH-87hg4VDrEeglzQmGUavpukztILI3N8mOVyrWBOot6NT4edVI9k6wyQViFJ0a1uPfe8iurir99QOltoUlNePVHs_Dd46DfOcgaVTQw/p.jpeg";
  const graphicDesignHoverImage = "https://previews.dropbox.com/p/thumb/AC-w32xFK2piT9CUrrWL9Ry3ls6ektp5tFf_FIN3CUh8_NM4cdolDahyh8XMHzGhoJ5hcONhkeCvAP5Kp_rUcLYNDp2LYy04uKpcRVHLjJw_JeOP3qqIw9xpoonSC48ITqPlb7S_MnMualGQQ89yGjoxpyhq4k4GxIMtsExHWYjHoB6_jE3cFRueUtwMxGIPO_1BZmCDSzN9lkXRhJw6MDC-6F__huNyDIoWlRMONQOTR6OfbXZC9dGvwB9DZMS2vQm-G_oB2OT2WyAVKWXQNSVrTKE4jorAPGYkXXScc1mtsg/p.jpeg";
  const aboutHoverImage = "https://previews.dropbox.com/p/thumb/AC8IOlXV5Y97tJu9dVsTEXVgTXkYXBzM9j87yS8TN8_-wRQcVMPD6aneHQyINe3MO14TeEdt_6cY02EXpZ7kHrLUAYX-vb3mSGiGQqz06xFwUnnmM-6_naGFFe8i0oe2n33gAwxbjK05W5gOHVSJPBLyVM4c7fzVFVK5Dm1EJPHtGPLZBVhmnNenC0UYaA8T0s4tjCpUqivEJGSLv2nNyrYBU_eUFk1WMolsNVux5__UxIHVjsYGZP7xPaLcALQr8Debngh1texsrHcDWtio_IN9N9Z252ePwbvgdyxeQjAgUw/p.jpeg";

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col relative">
      {/* Top Left Neon Text */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-50">
        <Link to="/" className="inline-block p-2 -m-2 text-[10px] md:text-base font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-[#b7ff00] hover:opacity-70 transition-opacity">NATHANIELANDMORE</Link>
      </div>

      {/* Upper Right Plus Icon & Email */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-50 flex items-center gap-1 md:gap-2">
        <a 
          href="mailto:nathaniel30012@gmail.com" 
          className="hidden sm:block p-2 -m-2 text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-[#b7ff00] hover:opacity-70 transition-opacity"
        >
          nathaniel30012@gmail.com
        </a>
        <a href="mailto:nathaniel30012@gmail.com" className="cursor-pointer p-2 -m-2 block hover:opacity-70 transition-opacity">
          <Plus size={20} className="md:w-7 md:h-7" strokeWidth={2.5} />
        </a>
      </div>

      {/* Right Side Text - Vertical Marquee */}
      <div className="absolute right-1 top-0 bottom-0 overflow-hidden z-50 w-4 hidden sm:flex flex-col items-center">
        <motion.div 
          animate={{ y: [0, "-50%"] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex flex-col items-center"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="text-[10px] font-bold tracking-[0.4em] uppercase [writing-mode:vertical-rl] rotate-180 py-4">
              Nathanielandmore-
            </div>
          ))}
        </motion.div>
      </div>

      {/* New Image on the Left Side */}
      <div 
        className="absolute left-16 xl:left-24 top-1/2 -translate-y-1/2 -mt-[5.5cm] hidden lg:block"
        onMouseEnter={() => setIsLeftImageHovered(true)}
        onMouseLeave={() => setIsLeftImageHovered(false)}
      >
        <img 
          src="https://i.pinimg.com/736x/eb/38/80/eb3880680ee989ba9000faa4d8e88881.jpg" 
          alt="Side Artwork" 
          className="w-48 xl:w-64 h-auto block transition-all duration-500"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* New Image on the Right Side */}
      <div 
        className="absolute right-24 xl:right-32 top-1/2 -translate-y-1/2 -mt-[5.5cm] hidden lg:block"
        onMouseEnter={() => setIsRightImageHovered(true)}
        onMouseLeave={() => setIsRightImageHovered(false)}
      >
        <img 
          src="https://i.pinimg.com/736x/44/e4/fd/44e4fda3bd2117fe77c6935b1738174d.jpg" 
          alt="Side Portrait" 
          className="w-48 xl:w-64 h-auto block transition-all duration-500"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Menu Area - Morphing Animation */}
      <div className="pt-24 md:pt-8 flex justify-center relative z-50">
        <motion.div 
          layout
          initial={false}
          className={`bg-black text-white shadow-2xl border border-white/10 flex flex-col md:flex-row items-center overflow-hidden ${isMenuOpen ? 'rounded-[2rem] md:rounded-full p-2' : 'rounded-full w-12 h-12'}`}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={() => setIsMenuHovered(true)}
              onMouseLeave={() => setIsMenuHovered(false)}
              className={`flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity ${isMenuOpen ? 'w-10 h-10' : 'w-12 h-12'}`}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={20} />}
            </button>
            
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col md:flex-row items-center overflow-y-auto md:overflow-x-auto scrollbar-hide max-h-[70vh] md:max-h-none"
                >
                  <div className="flex flex-col md:flex-row items-center border-b md:border-b-0 md:border-r border-white/10 pb-2 mb-2 md:pb-0 md:mb-0 md:pr-2 md:mr-2">
                    {categories.map((category, idx) => (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          to={category === "Graphic Design" ? "/graphic-design" : (category === "Photography" ? "/photography" : (category === "About" ? "/about" : `#${category.toLowerCase().replace(' ', '-')}`))}
                          className="px-6 py-4 text-[11px] font-bold tracking-widest uppercase hover:text-[#b7ff00] transition-all whitespace-nowrap block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {category}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex flex-col md:flex-row items-center pr-0 md:pr-4 pb-4 md:pb-0">
                    {socialLinks.map((link, idx) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (categories.length + idx) * 0.05 }}
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-4 text-[11px] font-bold tracking-widest uppercase hover:text-[#b7ff00] transition-all whitespace-nowrap block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <main className="w-full flex justify-center py-12 md:py-20 lg:py-32">
        <Link to="/about" className="w-[60%] sm:w-[50%] md:w-[30%] lg:w-[20%] xl:w-[18%] aspect-[2/3] flex items-center justify-center transition-all duration-500 hover:scale-[1.02]">
          <img 
            src={
              isGraphicDesignHovered ? graphicDesignHoverImage :
              isPhotographyHovered ? photographyHoverImage :
              isAboutHovered ? aboutHoverImage :
              isLeftImageHovered ? leftImageHoverImage : 
              isRightImageHovered ? rightImageHoverImage : 
              (isMenuHovered ? menuHoverImage : (isImageHovered ? imageHoverImage : defaultImage))
            } 
            alt="Featured Artwork"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
            className="w-full h-full object-contain block"
            referrerPolicy="no-referrer"
          />
        </Link>
      </main>

      {/* Categories and Social Links at the Bottom - Horizontal Layout */}
      <div className="w-full p-8 md:p-12 pb-16 md:pb-24 max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center gap-12 md:gap-16">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16">
            {categories.map((category) => (
              <div key={category} className="p-1">
                <Link 
                  to={category === "Graphic Design" ? "/graphic-design" : (category === "Photography" ? "/photography" : (category === "About" ? "/about" : `#${category.toLowerCase().replace(' ', '-')}`))}
                  onMouseEnter={() => {
                    if (category === "Photography") setIsPhotographyHovered(true);
                    if (category === "Graphic Design") setIsGraphicDesignHovered(true);
                    if (category === "About") setIsAboutHovered(true);
                  }}
                  onMouseLeave={() => {
                    if (category === "Photography") setIsPhotographyHovered(false);
                    if (category === "Graphic Design") setIsGraphicDesignHovered(false);
                    if (category === "About") setIsAboutHovered(false);
                  }}
                  className="block p-4 text-sm md:text-base font-bold tracking-[0.4em] hover:text-[#b7ff00] transition-all duration-300 uppercase whitespace-nowrap"
                >
                  {category === "Photography" ? "PHOTOGRAPHY" : category}
                </Link>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase hover:text-[#b7ff00] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
