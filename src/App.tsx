/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Plus, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import GraphicDesign from "./GraphicDesign";
import Photography from "./Photography";
import About from "./About";

const Preloader = React.memo(function Preloader() {
  const [phase, setPhase] = useState<'dipping' | 'circular' | 'converging' | 'scattering'>('dipping');
  const [bgColor, setBgColor] = useState("#FFFFFF");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('circular'), 700);
    const t2 = setTimeout(() => setPhase('converging'), 1300);
    const t3 = setTimeout(() => setPhase('scattering'), 1600);
    
    // Sync background color changes
    const c1 = setTimeout(() => setBgColor("#FF6321"), 600);
    const c2 = setTimeout(() => setBgColor("#b7ff00"), 1200);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      clearTimeout(c1); clearTimeout(c2);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* The Masked Background */}
      <motion.div 
        className="absolute inset-0"
        animate={{ backgroundColor: bgColor }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          clipPath: phase === 'scattering' 
            ? 'circle(0% at 50% 50%)' 
            : 'circle(150% at 50% 50%)',
          transition: 'clip-path 0.8s cubic-bezier(0.65, 0, 0.35, 1)',
          willChange: 'clip-path'
        }}
      />

      <motion.div 
        className="relative flex items-center justify-center z-10"
        animate={phase !== 'dipping' ? { rotate: 360 } : {}}
        transition={phase !== 'dipping' ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
        style={{ willChange: 'transform' }}
      >
        {[0, 1, 2].map((i) => {
          const angle = (i * 120 * Math.PI) / 180;
          const radius = 50;
          const circleX = Math.cos(angle) * radius;
          const circleY = Math.sin(angle) * radius;
          
          const scatterAngle = (i * 120 + 45) * Math.PI / 180;
          const scatterDistance = 1500;
          const scatterX = Math.cos(scatterAngle) * scatterDistance;
          const scatterY = Math.sin(scatterAngle) * scatterDistance;

          let animateProps: any = {};
          let transitionProps: any = {};

          if (phase === 'dipping') {
            animateProps = { x: (i - 1) * 60, y: [0, -40, 0], scale: 1, opacity: 1 };
            transitionProps = { 
              y: { duration: 0.6, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" },
              x: { duration: 0.4 },
              scale: { duration: 0.4 }
            };
          } else if (phase === 'circular') {
            animateProps = { x: circleX, y: circleY, scale: 1, opacity: 1 };
            transitionProps = { duration: 0.4, ease: "backOut" };
          } else if (phase === 'converging') {
            animateProps = { x: 0, y: 0, scale: 1.5, opacity: 1 };
            transitionProps = { duration: 0.3, ease: "anticipate" };
          } else if (phase === 'scattering') {
            animateProps = { x: scatterX, y: scatterY, scale: 0.5, opacity: 0 };
            transitionProps = { duration: 0.8, ease: "circIn" };
          }

          return (
            <motion.div
              key={i}
              animate={animateProps}
              transition={transitionProps}
              className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-black"
              style={{ willChange: 'transform, opacity' }}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
});

const PageTransitionOverlay = React.memo(function PageTransitionOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-[9998] pointer-events-none overflow-hidden flex items-center justify-center"
    >
      <motion.div
        className="absolute inset-0 bg-[#b7ff00]"
        variants={{
          initial: { clipPath: 'circle(150% at 50% 50%)' },
          animate: { clipPath: 'circle(0% at 50% 50%)' },
          exit: { clipPath: 'circle(150% at 50% 50%)' }
        }}
        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        style={{ willChange: 'clip-path' }}
      />
      
      <div className="relative flex items-center justify-center z-10">
        {[0, 1, 2].map((i) => {
          const scatterAngle = (i * 120 + 45) * Math.PI / 180;
          const scatterDistance = 1500;
          const scatterX = Math.cos(scatterAngle) * scatterDistance;
          const scatterY = Math.sin(scatterAngle) * scatterDistance;

          return (
            <motion.div
              key={i}
              className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-black"
              variants={{
                initial: { x: 0, y: 0, scale: 1.5, opacity: 1 },
                animate: { x: scatterX, y: scatterY, scale: 0.5, opacity: 0 },
                exit: { x: 0, y: 0, scale: 1.5, opacity: 1 }
              }}
              transition={{ duration: 0.6, ease: "circInOut" }}
              style={{ willChange: 'transform, opacity' }}
            />
          );
        })}
      </div>
    </motion.div>
  );
});

function TransitionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {children}
      <PageTransitionOverlay />
    </motion.div>
  );
}

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
    "About",
    "Ai Studio"
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
  const photographyHoverImage = "https://i.pinimg.com/736x/37/e5/a9/37e5a93a5f46a47e5060e894df1d98af.jpg";
  const graphicDesignHoverImage = "https://i.pinimg.com/736x/17/29/7a/17297aff063ddfb35504831a5de845b8.jpg";
  const aboutHoverImage = "https://i.pinimg.com/736x/76/8c/0a/768c0aa24b6e60a35f59dd2f88865321.jpg";

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col relative">
      {/* Header */}
      <header className="px-6 py-4 md:p-8 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/" className="inline-block p-4 -m-4 text-[12px] md:text-base font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-[#b7ff00] hover:opacity-70 transition-opacity">NATHANIELANDMORE</Link>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <a 
            href="mailto:nathaniel30012@gmail.com" 
            className="hidden sm:block p-4 -m-4 text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-[#b7ff00] hover:opacity-70 transition-opacity"
          >
            nathaniel30012@gmail.com
          </a>
          <a href="mailto:nathaniel30012@gmail.com" className="cursor-pointer p-4 -m-4 block hover:opacity-70 transition-opacity" aria-label="Send email">
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
      <div className="pt-8 flex justify-center relative z-50">
        <motion.div 
          layout
          initial={false}
          className={`bg-black text-white shadow-2xl border border-white/10 flex flex-col md:flex-row items-center overflow-hidden ${isMenuOpen ? 'rounded-[2rem] md:rounded-full p-1' : 'rounded-full w-14 h-14'}`}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={() => setIsMenuHovered(true)}
              onMouseLeave={() => setIsMenuHovered(false)}
              className="flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity w-14 h-14"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                    {categories.map((category, idx) => {
                      const isExternal = category === "Ai Studio";
                      const url = category === "Graphic Design" ? "/graphic-design" : 
                                  category === "Photography" ? "/photography" : 
                                  category === "About" ? "/about" : 
                                  category === "Ai Studio" ? "https://the-produced.vercel.app/" :
                                  `#${category.toLowerCase().replace(' ', '-')}`;
                      
                      return (
                        <motion.div
                          key={category}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          {isExternal ? (
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-8 py-5 text-[12px] md:text-[11px] font-bold tracking-widest uppercase hover:text-[#fa003f] active:text-[#fa003f] transition-all whitespace-nowrap block"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {category}
                            </a>
                          ) : (
                            <Link
                              to={url}
                              className="px-8 py-5 text-[12px] md:text-[11px] font-bold tracking-widest uppercase hover:text-[#b7ff00] active:text-[#b7ff00] transition-all whitespace-nowrap block"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {category}
                            </Link>
                          )}
                        </motion.div>
                      );
                    })}
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
                          className="px-8 py-5 text-[12px] md:text-[11px] font-bold tracking-widest uppercase hover:text-[#b7ff00] active:text-[#b7ff00] transition-all whitespace-nowrap block"
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
            loading="lazy"
          />
        </Link>
      </main>

      {/* Categories and Social Links at the Bottom - Horizontal Layout */}
      <div className="w-full p-8 md:p-12 pb-16 md:pb-24 max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center gap-12 md:gap-16">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16">
            {categories.map((category) => {
              const isExternal = category === "Ai Studio";
              const url = category === "Graphic Design" ? "/graphic-design" : 
                          category === "Photography" ? "/photography" : 
                          category === "About" ? "/about" : 
                          category === "Ai Studio" ? "https://the-produced.vercel.app/" :
                          `#${category.toLowerCase().replace(' ', '-')}`;
              
              return (
                <div key={category} className="p-1">
                  {isExternal ? (
                    <a 
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 text-sm md:text-base font-bold tracking-[0.4em] hover:text-[#fa003f] transition-all duration-300 uppercase whitespace-nowrap"
                    >
                      {category}
                    </a>
                  ) : (
                    <Link 
                      to={url}
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
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 text-[11px] md:text-xs font-bold tracking-[0.5em] uppercase hover:text-[#b7ff00] active:text-[#b7ff00] transition-all duration-300"
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

function AppRoutes() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only show preloader on initial entry
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<TransitionWrapper><Home /></TransitionWrapper>} />
            <Route path="/graphic-design" element={<TransitionWrapper><GraphicDesign /></TransitionWrapper>} />
            <Route path="/photography" element={<TransitionWrapper><Photography /></TransitionWrapper>} />
            <Route path="/about" element={<TransitionWrapper><About /></TransitionWrapper>} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
