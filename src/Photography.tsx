import { Link } from "react-router-dom";
import { Plus, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const photographyImages = [
  "https://previews.dropbox.com/p/thumb/AC-MGyvA04kbxRQOqZs4sc-04fpp4Dxc4hw_rk9wmSm9HoUaEF2Mfq3UbzgcohTI13pCNV4YhkhRaF3EwwrmzGE6ZA6YumiaTcWqDtG1kmW9zkQftcs5icsed_ZyNTupzXV8TVadN6iMirq6KkESqwbJU1IQjzkyRRPxxAfLxvyN3ylKOgcqcQRsQtWOoOSQvbsY8fInl8K0lTWt6cuEVXLwulTSKMSe0GQwTIKErBv_giLVPd_TUBaFzjbzoU2jT6dSk_tlys6UuywP3sdeonf-FbboMlXmM9-nISl_GmPliw/p.jpeg",
  "https://i.pinimg.com/736x/c9/59/d2/c959d205176f3689fb0c31c97a8154d0.jpg",
  "https://previews.dropbox.com/p/thumb/AC_Y2QaHxWjRw_9VpKsaOlr_dg7-lFW2hZDVjTI_WFJbN8IcELUnenpdI3jtIzFh7n1-V734OMgcftkb5oJ9aJkjuHxi_C2o-TNxZV6rIHQxsiJrpZ6oRG4SLai0AMgAYMFk82S_4NErdFayGozlPP8gPW0W1f3n7U4zPyEw2Wogy0XAkhDkSFoiIpQu1XPhogO7d-FDKPtRgzoOCEi5MSYk_dZgrI0YYayaZ0zVNyxHqji_DUWvGuDa63l5znh14pvLEtsu3iZq5ec0uiW9f78Qvj-PEABR5FedgxxJm5UKLDztO76H4df4V61w9fQIZ-jIRfbI5nyxI2HXz_FCR42Y/p.jpeg?is_prewarmed=true",
  "https://previews.dropbox.com/p/thumb/AC_GEZBrHu8Jm7HD3fqdHnVtUV0xkeSiw_UvqQXw7woO9roJiD6q5dglLOlnv4dZmopZS7QuX_fd0__HRap-VQknd7ZhNxnTgnJ2ZMjFEteOjak4zlyazYfAwtchtJAqylWu1FB9jx7y9535yr5Gikb-bUnTI1UrfWwXKdT2dsf4jp13XkIGZnLkkId0wItMFcUnnif-RQyryaJikyGe0DSEq28bVpd4oSddBUmGk3ltGad_H8NkICI-ULMXYg-oajY6X_ofPUBiY6jy7sGVQ-hdk8dMpigPLX__G1BF5m0G5A/p.jpeg",
  "https://previews.dropbox.com/p/thumb/AC8mwG3ek95ZqN6bA1GRTTRvRxV6U0vPh3qOABSO2Fe8QOuvKJDT_YkeEXI_yfThCW8JAMzMT0Ss99xSgy2mrpdzy2yUlskFZn1zvdkMByxDsaJoZpEf8vtvw6h0lkRkqweBy6x24gpYswM463tEhwhR-RwvLCubLbjK50m-t1Qvms8MLsNF_K_jBVwIFeuCN_B90w57yerWKd_8BY7ftZvzcFMyV2jYIaJPL3rXLEFWfruBzNn_632cPrOzAwCcPqXah9MRjLICZsolbXFdyeM5b_vAkNTjwioOFYTsbCbZ3A/p.jpeg",
  "https://previews.dropbox.com/p/thumb/AC-eioJ0_0cZ1xLRv2Kyd7oJ6jFLoL1hsYSmRsOGdyBnhu0i8dlgMVeA0bFVXwPzpLHvh3WduvpPchy46wRith4YnfyRUdqGJhxI7LicgPz7hZJKj-X0aEKoH8C0_aXOEXus2-ZS8lSEzvwVQKqINMe24WqOT3RYsq-Y10ab21ZbCNfe4dCp1w3YWU3eQibh-_pn_ppab0zsnN3fng4E1HDPwCp0J9NAmOuQEf5xascWheRTOuunWfFtJmtAmWyL2ABW_RUS-OGjVCHr7ocOmZ6uzvTQVz4T8JawYCah69f80A/p.png",
  "https://previews.dropbox.com/p/thumb/AC-u5ecLZSnudgoKZvi-F-Edml0KvMqAhg54Pr6SBCWnyViu7D8nY9fjdpc-XHW7cFRQeBbUChVPqsp6H9TJ-aX0vFg3jTmxOvoGavbpImJw-Xw6xqMQ3kukVw9qN-slqAhiJF8Y3Fp0gUxp1Ao-o0ZoCYlpEsNQRZ5PrXjkL-6q6adE7FUzzWK153Z5rfgcNwQov9i7ksnbI-Ux_qfsazW1l4TP1P_EvGHVrnkIByE0LS36iNHu6LdU3srw0XbUlbvj89k5cqzLlCtluGipR3U4xaP7vkPD7EhgHueb4_aNfA/p.jpeg",
  "https://previews.dropbox.com/p/thumb/AC8rEUsiPZD_HiyMrXHG0hqUSB7t-7PayI70nbznV-g3z6mclQRlcxS1gzKnhUo-Y10g5W3RJbHKBqKyZ9zvMIwFClg_8iwZBm7lpHgcyAYyZutDCkoB2WexwrHZK2ET-3_LbSMcXmRT_PGKlEFWlNQjBjSn-aCKnBdHuRT-p2IsURc9FJQmcEK9qz6tNktj4RE8dzpp3z_oUoFxs3tJWPjfEW8F_Fnxejw8J4l8DvNlVV6k6N5uKodpXhq-FHAPsEFeNKY84R-59gd_3amdk_G-D6k9wS-S-3NQO2pmj-exjw/p.jpeg",
  "https://previews.dropbox.com/p/thumb/AC_-yrNbRxxnzzQToScQ_fNLvFNPnv4DDO91fFM8sQAOgQVgFcPZSkZnZYWpm406S_VGUrEWI6GeTRM25BseKNRcItUMXJO0cxlfXAaGbYQFcrO9ERxMzljlI_KiCtm2Y-1vWxX-IYw1L3Wxat8zYbVDR3RVFgY59kbBEsz04fgMduNHqWjF5Yjbwci_tsrR_Nv0FLsnqPQQxEyXG7MJ3aU7HggyWtrrI34ia67G8L5qTONro1N5DeIEf5jFjklwcHmGFY--2kMxwnFwRCQGLrNtWsyMp-UWF5gIAnJ22XfMSg/p.jpeg",
  "https://previews.dropbox.com/p/thumb/AC_gJKTL1JSPTkh3Exn8CcctmhQxp_Oc6PdtDa5ZCsInvjJAOx5-z-46gxIIFwjD1aHZ1hVJUJGP8WyC1To5Yt-8Q40fzGXwyh_bhZSya8-UjbwQpETpjhsd0Fm8DzLzd03dNYRQzRDoILVa91DCmvegFqW-dgs1U60YgPZcAPpXyNlr1jA1i4cfC0UguFQ6VWVwHO3JxPRGBxGLljgDUqROeBGuafxW2Gmx8sbGfenr1dB1vKjY-NV-mi5vdNsYNqt5C8KH3hLK3jskpapaAoiVbAK8Fam2T12SfbljZTjvdg/p.jpeg"
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
