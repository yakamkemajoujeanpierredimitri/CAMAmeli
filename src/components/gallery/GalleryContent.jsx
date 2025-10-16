
import React, { useState, useEffect } from 'react';

const GalleryContent = () => {
    const [filter, setFilter] = useState('all');
    const [modalImage, setModalImage] = useState(null);

    const galleryItems = [
        {
            category: "formations",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            alt: "Cours en salle informatique",
            title: "Formation AutoCAD",
            description: "Session de formation en logiciels professionnels"
        },
        {
            category: "etudiants",
            image: "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1634",
            alt: "Étudiants en groupe",
            title: "Étudiants motivés",
            description: "Notre communauté d'apprenants"
        },
        {
            category: "evenements",
            image: "https://images.unsplash.com/photo-1758691736545-5c33b6255dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzU4NzA4OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            alt: "Conférence",
            title: "Conférence Tech",
            description: "Événement professionnel"
        },
        {
            category: "formations",
            image: "https://plus.unsplash.com/premium_photo-1661763874747-405eb7388c58?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
            alt: "Formation en logiciels",
            title: "Formation Revit",
            description: "Modélisation BIM"
        },
        {
            category: "etudiants",
            image: "https://images.unsplash.com/photo-1758582171503-ce7b5c28bb4d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            alt: "Étudiante en cours",
            title: "Travail pratique",
            description: "Apprentissage en situation réelle"
        },
        {
            category: "evenements",
            image: "https://images.unsplash.com/photo-1627556704243-5f0771d90783?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            alt: "Cérémonie de remise de diplômes",
            title: "Diplômation",
            description: "Célébration de la réussite"
        }
    ];

    const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

    const openModal = (image) => {
        setModalImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalImage(null);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
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
                    <button className={`py-2 px-5 bg-gray-50 border-none rounded-full cursor-pointer font-medium transition-all duration-300 ${filter === 'formations' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`} onClick={() => setFilter('formations')}>Formations</button>
                    <button className={`py-2 px-5 bg-gray-50 border-none rounded-full cursor-pointer font-medium transition-all duration-300 ${filter === 'evenements' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`} onClick={() => setFilter('evenements')}>Événements</button>
                    <button className={`py-2 px-5 bg-gray-50 border-none rounded-full cursor-pointer font-medium transition-all duration-300 ${filter === 'etudiants' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`} onClick={() => setFilter('etudiants')}>Étudiants</button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {filteredItems.map((item, index) => (
                        <div className="relative rounded-lg overflow-hidden shadow-lg h-72" key={index} onClick={() => openModal(item.image)}>
                            <img src={item.image} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
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
                        <img src={modalImage} alt="Image agrandie" className="max-w-full max-h-[80vh] block" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default GalleryContent;
