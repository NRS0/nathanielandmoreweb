import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Music() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-[110]">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-black hover:text-[#b7ff00] transition-colors font-bold tracking-[0.2em] uppercase text-xs md:text-sm"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
        <div className="text-black font-black tracking-[0.4em] uppercase text-xs md:text-sm">
          Music
        </div>
      </div>

      {/* Audio Player Container */}
      <div className="absolute inset-0 flex items-center justify-center z-[120] pointer-events-none px-4">
        <div className="w-full max-w-2xl pointer-events-auto">
          <div className="elfsight-app-8d239f1f-0015-4069-a674-173abbdac444" data-elfsight-app-lazy></div>
        </div>
      </div>

      {/* Three.js Content Background */}
      <div className="flex-1 relative w-full h-full overflow-hidden opacity-50">
        <iframe
          srcDoc={`
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                * { margin: 0; padding: 0; outline: none !important; box-sizing: border-box; }
                html, body, #root { width: 100%; height: 100%; overflow: hidden; background: #fff; }
                canvas { display: block; outline: none !important; }
                #canvas { position: absolute; top: 0; left: 0; }
              </style>

              <script type="importmap">
              {
                "imports": {
                  "three": "https://cdn.jsdelivr.net/npm/three@0.183.2/build/three.module.js",
                  "three/webgpu": "https://cdn.jsdelivr.net/npm/three@0.183.2/build/three.webgpu.js",
                  "three/tsl": "https://cdn.jsdelivr.net/npm/three@0.183.2/build/three.tsl.js",
                  "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.183.2/examples/jsm/"
                }
              }
              </script>

            </head>
            <body>
              <div id="root"></div>
              <script type="module" src="/scene.js"></script>
            </body>
            </html>
          `}
          className="w-full h-full border-none"
          title="Music Animation"
        />
      </div>
    </div>
  );
}
