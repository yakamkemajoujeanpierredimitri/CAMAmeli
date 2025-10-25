
import React, { useState, useEffect } from 'react';
import { getAllFiles } from '../../service/file.service';

const GalleryContent = () => {
    const [filter, setFilter] = useState('all');
    const [modalImage, setModalImage] = useState(null);
    const [galleryItems, setGalleryItems] = useState([]);

    const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

    const openModal = (image) => {
        setModalImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalImage(null);
        document.body.style.overflow = 'auto';
    };
 const fetchGalleryItems = async () => {
    const res = await getAllFiles();
    if(res.data){
        // include both images and videos in the gallery
        const items = res.data.filter(file => file.format === 'image' || file.format === 'video');
        setGalleryItems(items);
    }
 }
    useEffect(() => {
        fetchGalleryItems();
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl text-center mb-12 text-gray-800 relative">Moments Inoubliables<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div></h2>
                
                <div className="flex justify-center gap-4 mb-10 flex-wrap">
                    <button className={`py-2 px-5 bg-gray-50 border-none rounded-full cursor-pointer font-medium transition-all duration-300 ${filter === 'all' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`} onClick={() => setFilter('all')}>Tout</button>
                    <button className={`py-2 px-5 bg-gray-50 border-none rounded-full cursor-pointer font-medium transition-all duration-300 ${filter === 'formation' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`} onClick={() => setFilter('formation')}>Formations</button>
                    <button className={`py-2 px-5 bg-gray-50 border-none rounded-full cursor-pointer font-medium transition-all duration-300 ${filter === 'event' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`} onClick={() => setFilter('event')}>Événements</button>
                    <button className={`py-2 px-5 bg-gray-50 border-none rounded-full cursor-pointer font-medium transition-all duration-300 ${filter === 'temoignage' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`} onClick={() => setFilter('temoignage')}>Témoignages</button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {filteredItems.map((item, index) => (
                        <div className="relative rounded-lg overflow-hidden shadow-lg h-72 group" key={index} onClick={() => openModal({ src: item.fileurl, format: item.format })}>
                            {item.format === 'video' ? (
                                <div className="w-full h-full bg-black flex items-center justify-center">
                                    <video src={item.fileurl} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" muted playsInline preload="metadata"/>
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="bg-black/50 rounded-full p-3">
                                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <img src={item.fileurl} alt={item.title || ''} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
                            )}

                            <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="text-white text-center p-5">
                                    <h3 className="text-xl font-bold mb-2.5">{item.title}</h3>
                                    <p className="text-gray-300 text-sm">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {modalImage && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/90 z-50 flex items-center justify-center" onClick={closeModal}>
                    <span className="absolute top-5 right-8 text-white text-5xl cursor-pointer">&times;</span>
                    <div className="relative max-w-[90%] max-h-[90%]">
                        {modalImage.format === 'video' ? (
                            <video src={modalImage.src} controls autoPlay className="max-w-full max-h-[80vh] block" />
                        ) : (
                            <img src={modalImage.src} alt="Image agrandie" className="max-w-full max-h-[80vh] block" />
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default GalleryContent;
