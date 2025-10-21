
import React from 'react';
import { NavLink } from 'react-router-dom';

const GalleryDescription = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-4xl text-center mb-12 text-gray-800 relative">Notre Communauté en Images<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div></h2>
                    <p className="text-gray-600 text-lg leading-relaxed">Notre galerie témoigne de l'atmosphère dynamique de notre centre académique. Découvrez les moments forts de nos formations, les événements professionnels, les interactions entre étudiants et formateurs, ainsi que les réalisations de nos apprenants. Chaque image raconte une histoire de dévouement, d'apprentissage et de réussite.</p>
                    <p className="text-gray-600 text-lg leading-relaxed">Nous croyons que la photographie capture l'essence de notre mission éducative et le dynamisme de notre communauté. Explorez nos collections pour vivre l'expérience CAMA à travers les yeux de ceux qui la vivent chaque jour.</p>
                    <NavLink to="/contact" className="inline-block py-3 px-6 bg-blue-500 text-white no-underline rounded-md font-semibold transition-colors duration-300 hover:bg-blue-700 mt-5">Visiter notre centre</NavLink>
                </div>
            </div>
        </section>
    );
};

export default GalleryDescription;
