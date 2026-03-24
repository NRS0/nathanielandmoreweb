import { Link } from "react-router-dom";
import { Plus, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const graphicDesignImages = [
  {
    url: "https://i.pinimg.com/736x/2c/8e/7e/2c8e7e6e5e5e5e5e5e5e5e5e5e5e5e5e.jpg", // Placeholder
    title: "Minimalist Poster",
    description: "A study in typography and negative space."
  },
  {
    url: "https://i.pinimg.com/736x/8a/b2/c3/8ab2c3d4e5f6a7b8c9d0e1f2a3b4c5d6.jpg", // Placeholder
    title: "Brand Identity",
    description: "Visual identity for a modern architectural firm."
  },
  {
    url: "https://i.pinimg.com/736x/f1/e2/d3/f1e2d3c4b5a697887766554433221100.jpg", // Placeholder
    title: "Editorial Layout",
    description: "Magazine spread design for a cultural publication."
  },
  {
    url: "https://i.pinimg.com/736x/11/22/33/11223344556677889900aabbccddeeff.jpg", // Placeholder
    title: "Digital Interface",
    description: "User experience design for a creative portfolio platform."
  },
  {
    url: "https://i.pinimg.com/736x/aa/bb/cc/aabbccddeeff11223344556677889900.jpg", // Placeholder
    title: "Packaging Design",
    description: "Sustainable packaging concept for a premium tea brand."
  },
  {
    url: "https://i.pinimg.com/736x/00/11/22/00112233445566778899aabbccddeeff.jpg", // Placeholder
    title: "Motion Graphics",
    description: "Stills from an experimental animated short."
  }
];

// Using real high-quality placeholder images from Unsplash/Picsum for better visual appeal
const realImages = [
  "https://framerusercontent.com/images/POfBNZZ9BVjYT4OMgMxVnV04XQM.png?scale-down-to=2048&width=2155&height=2082",
  "https://previews.dropbox.com/p/thumb/AC-560BPbe6KZU1FNElPRWrCOYInKwohjycuxYzYW2NdwjECweNYZMdTT6-AKSABPr9Cckcozjz2QW_egYiYh3FGrOywCMKzwvrGLjFcSKU26296FzAJrQkJIGf_UjzP2DOoRY034yrOpIG1khK8f5VsNSNgkgVe9aB6SmoidPQ5BHKg4d5CpM4S38lbNBMAa8AhPHcQ6Gw-xTfwZIl98b5AvASRGLLjrTXwk_yeLyHufIPP_7Dup4NWa9MTa2da9ZaebegAib6Wx7UnmEr_5sfIRIY65s_a-APV35U1mPESRkhT-4tRbPkv8BbO4_hZKxO_sNOM9hCl2pPUfeR_Bv8l/p.jpeg?is_prewarmed=true",
  "https://previews.dropbox.com/p/thumb/AC_ZDkklW4tmNDvHCvPj4ztLAHEZqDjsmBzJwBhJMgMOTV1vEm2qm84B1rhg4u754o6EDx_rCUkAEb01tPCmKeP17KSius2sUlizMdh9j4DnQU-iEC-p5Hble_5fl_7Il47SzlodNXJvolNxxY8RYfJ9QkZp5k7vvgztwQZ35qMVX2Vs-AIzg4T_l_CQUdVF_fWdZvbbLUdCCQWAq1FmvwNLUmVdh7fNbo_aHxy__tBd7bPkCP64H0rHkPwF4A_q_VCVWB2Xe7gYBUlUelhNU_9kmYD3ifoZNH49vyKJaMIZFQ/p.jpeg",
  "https://previews.dropbox.com/p/thumb/AC-APQoFubsxzpxga5vlHS6HrmbLXSWnYFgshDrrheYA1V3kSjKMzhtbn1hqNqry9qrk25XcjmuHSzPGQ9XfrrCh1XzXBKrEiqc49gkSLT9DUwzJGeh8q7eBjWRLIn8RHMIZrcHWNQpSEyOyat1k5JXJ5-KPbfdcFtEfe2QIXJCUdzSKF6nGcDcQBS1aGjXdIlmgAi-bjK_qHjTYUXQ_iBTuUVvjfGY5N4orWASmdHm2Kcz1mXKUfLHJKkuJgoRgZk1hqRhI0X3iaLZYwIChGmO-tJz6acKylbGW-ejXmN5KjQ/p.jpeg",
  "https://previews.dropbox.com/p/thumb/AC_5pJmlJz2L5GSd9AsyuxuRo-X-z_0w5j-AtE6irzxAK879Ty1bMGe0jTTk9je6k1cvqHU3LN9-jyJ0Pe6XGv15f5fyDDbMWN4CkgstuHyMS7JwN3VTcIIpMLisZzNl2ateOi7gQlE7yuc-qrUoQ448cdhHVPBM_2CiOtIK-qyqJxXpfxcDDfhskfHcS8hgaqWO3Q_Jx1aqLcmim5V6oh9MwBFf1iCyDDuY2Enc2u2qlmfT8HGVuFG5Y-fFywSNFLIo4akw3XnaK-8lHBIXXQGfMvBS3LZjLtElkyGgFZP1Ug/p.jpeg",
  "https://previews.dropbox.com/p/thumb/AC9CkyGk4dx4wZh9HHwkZ9YCPd5QP6puh3K6HdaURDzTKKSo80WkHjJyOnOvBL3p-gHnEs2oWIWHqbnbxILEwat9wIqevKT5xhyk-7_OjrUPPUfDumvJXGcAikX6B8IU8ss2GABArPyLY4NL3ga-ZBhns-C8vye1iBbNcSbp74EK5ReEtYYVJcagxbxQXDd3Xr9UVY92dhZtygnGDfHjFHgE0vw3u82GwzalT6VfDaQuUVZg5Pxekdg69YJpe5PM6prwdxlV_AcEsS6pJJTjmDbs8GvMFNA4kofIpmbNBq2OVA/p.jpeg",
  "https://previews.dropbox.com/p/thumb/AC_PEiYbZxNS2rIfJb9iLTbqnSSur-E325ZNHVusBefY6tsx679pCNOUGtypcnWN3G8Xhf_KzfEv8TtpGmKLDGQmRZZ7nRNZDZTgyK0sMGhsMnxjJX7C7dVn-1ngaq7lXZ9KNV1KaPsX7wNET3jVHRZBJqpJcr0NyAoBV1VPAJIZSmOXQmQxif91FUbr1iTRZX_-l7uKKLly45hq8KiqQioq-LwZPjyMYM_Bloy8bmMtx3EF5Rbzx_Oe9RVkpbygBgMgnxrhM2NHpqw8vF6GPaFIqms7wO1O74v-lmzDFAS4IA/p.png",
  "https://previews.dropbox.com/p/thumb/AC_S6OLjBu035x-lLG0fXsQ4hujdDXrw2Ws0VTQspz0GQzX5UlSSpDah4VHxuWgUqrIsVkoX_aMh9FCLwDg7slnPA8mYZjjt1on1oz6uxNT2IJ5kjJnT99o7HxOIQlYqTUnuI7tYnRBFtm7u-c0cFbYDkeDUmmj2EznqPOxeRZoGG3oUlicZwd7dgimoWmlVKfMGSKA984IuOKrxWhjm_71HqZyqIppxP9-Mu-pTkMc91rWqyu5H30J4M1nLbkhSNHxyZhQE51hiRx_BPzkJK6K0mFlOpUTyT8lXfnx75gMF6A/p.jpeg",
  "https://previews.dropbox.com/p/thumb/AC9lXZe26cDLmJlURLdGBbWjHnL1uhUtqtv4qSQ00_ti-1-M6LQAFqGFA4nB7r-hxySzcbKm8wPD_S_T-Ou_uc0gq5Q8IysR_EjdIGxYufLIHLuHyx30AjeEdzKQdhSwaLCDkydMTbE4ci18muRLK6eTWuImpe2XcXJ7VMGBZTOO9KkWRKvbZR7W34zNrXiGKj1OtYc75yVCdsNfHJdipVh-AsotDDOfyBzBKNYmvNDGQMhkyBFEzXT_Vz-LMsbVkRL4Ony7s5fpM_IxRGxv4cxlRfLZhKGeS0pLB4bYCrEYoDb9LUSpxaSrEBMWQazVQNdET843PwG7SiL_URJAZZoK/p.png?is_prewarmed=true"
];

export default function GraphicDesign() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col relative">
      {/* Header */}
      <header className="px-6 py-4 md:p-8 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/" className="flex items-center gap-2 text-[12px] font-bold tracking-widest uppercase hover:text-[#b7ff00] transition-all p-4 -m-4">
            <ArrowLeft size={18} />
            <span className="hidden md:inline">Back</span>
          </Link>
          <Link to="/" className="inline-block p-2 -m-2 text-[12px] md:text-sm font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-[#b7ff00] hover:opacity-70 transition-opacity">NATHANIELANDMORE</Link>
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
            <Plus size={24} className="md:w-7 md:h-7" strokeWidth={2.5} />
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
              />
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-12 border-t border-neutral-100 flex flex-col items-center gap-6 max-w-screen-2xl mx-auto w-full">
        <p className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-40">© Nathaniel Springer</p>
        <div className="flex gap-4 md:gap-8">
          <a href="https://www.instagram.com/nathanielandmore/" target="_blank" rel="noopener noreferrer" className="p-3 text-[10px] font-bold tracking-widest uppercase hover:text-[#b7ff00] transition-all">Instagram</a>
          <a href="https://www.linkedin.com/in/nathaniel-springer-/" target="_blank" rel="noopener noreferrer" className="p-3 text-[10px] font-bold tracking-widest uppercase hover:text-[#b7ff00] transition-all">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
