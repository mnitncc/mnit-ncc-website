import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Images, MapPin, Tent } from 'lucide-react';
import { campsData } from '../data/camps';

const Camps = () => {
  const [selectedCamp, setSelectedCamp] = React.useState(null);
  const [galleryOpen, setGalleryOpen] = React.useState(false);
  const [lightbox, setLightbox] = React.useState(null);

  return (
    <div className="min-h-screen bg-mnit-tint py-20">

      {/* Header with Lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16">
        <div className="flex items-center gap-4">
           <div className="h-0.5 bg-mnit-blue flex-1 opacity-20"></div>
           <h1 className="text-3xl md:text-5xl font-bold text-gradient-ncc uppercase tracking-widest text-center">
             Camps
           </h1>
           <div className="h-0.5 bg-mnit-blue flex-1 opacity-20"></div>
        </div>
      </div>

      {/* Camps Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {campsData.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-24">
            <Tent className="w-16 h-16 text-mnit-blue/30 mb-6" />
            <h2 className="text-2xl font-bold text-mnit-blue mb-2">Camps Coming Soon</h2>
            <p className="text-gray-500 max-w-md">
              Details of the camps attended by our cadets will be updated here shortly.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {campsData.map((camp) => (
              <motion.div
                key={camp.id}
                layoutId={`camp-card-${camp.id}`}
                onClick={() => { setSelectedCamp(camp); setGalleryOpen(false); }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-gray-50">
                  <img
                    src={camp.image}
                    alt={camp.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

                  {/* Overlay Title on Hover */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="text-white text-center w-full">
                         <p className="font-bold text-lg mb-1">{camp.date.split(',')[0]}</p>
                         <p className="text-xs uppercase tracking-wider">View Details</p>
                     </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                   <h3 className="text-lg font-bold text-mnit-blue line-clamp-1">{camp.title}</h3>
                   <p className="text-sm text-gray-500">{camp.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Camp Details Modal */}
      <AnimatePresence>
        {selectedCamp && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCamp(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              layoutId={`camp-card-${selectedCamp.id}`}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl pointer-events-auto flex flex-col md:flex-row overflow-hidden"
              >
                 {/* Modal Image */}
                 <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                    <img
                      src={selectedCamp.image}
                      alt={selectedCamp.title}
                      className="w-full h-full object-contain bg-gray-100"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-mnit-blue font-bold text-sm shadow-lg">
                           {selectedCamp.date}
                        </span>
                    </div>
                 </div>

                 {/* Modal Content */}
                 <div className="w-full md:w-1/2 p-8 md:p-12 bg-white relative">
                    <button
                        onClick={() => setSelectedCamp(null)}
                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <span className="sr-only">Close</span>
                        <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <h2 className="text-3xl font-bold text-mnit-blue mb-2">{selectedCamp.title}</h2>
                    <div className="flex items-center gap-2 text-mnit-red font-medium mb-8">
                        <MapPin className="w-4 h-4" />
                        {selectedCamp.location}
                    </div>

                    {selectedCamp.gallery && selectedCamp.gallery.length > 1 && (
                      <button
                         type="button"
                         onClick={() => setGalleryOpen(true)}
                         className="w-full flex items-center justify-between gap-3 mb-8 px-5 py-4 rounded-xl border border-mnit-blue/20 bg-mnit-tint hover:bg-mnit-blue/10 transition-colors group/gallery"
                      >
                         <span className="flex items-center gap-3 text-mnit-blue font-bold">
                            <Images className="w-5 h-5" />
                            Photo Gallery
                         </span>
                         <span className="text-sm text-gray-500 group-hover/gallery:text-mnit-blue transition-colors">
                            {selectedCamp.gallery.length} Photos →
                         </span>
                      </button>
                    )}

                    <div className="space-y-4 text-gray-600 leading-relaxed overflow-y-auto max-h-[40vh] pr-2 custom-scrollbar">
                         {selectedCamp.description.map((p, i) => (
                             <p key={i}>{p}</p>
                         ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <button
                            onClick={() => setSelectedCamp(null)}
                            className="w-full py-3 bg-mnit-blue text-white rounded-xl font-bold uppercase tracking-wide hover:bg-blue-900 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Photo Gallery overlay (grid of all camp photos) */}
      <AnimatePresence>
        {galleryOpen && selectedCamp && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setGalleryOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[55]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="fixed inset-0 z-[55] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl pointer-events-auto flex flex-col overflow-hidden">
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-mnit-blue flex items-center gap-3">
                    <Images className="w-5 h-5" />
                    {selectedCamp.title} — Photo Gallery
                  </h2>
                  <button
                    onClick={() => setGalleryOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <span className="sr-only">Close gallery</span>
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
                <div className="overflow-y-auto p-6 custom-scrollbar">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {selectedCamp.gallery.map((src, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setLightbox(src)}
                        className="relative aspect-square overflow-hidden rounded-xl border border-gray-100 group/thumb"
                      >
                        <img
                          src={src}
                          alt={`${selectedCamp.title} photo ${i + 1}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Lightbox for full-size gallery photos */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
          >
            <img
              src={lightbox}
              alt="Camp photo"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Camps;
