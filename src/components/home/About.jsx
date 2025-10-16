
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-4">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">À propos de nous</span>
                </div>
                <h2 className="text-center text-4xl font-bold mb-4 text-gray-800">L'excellence au service de votre réussite</h2>
                <p className="text-center max-w-2xl mx-auto mb-16 text-gray-600 text-lg leading-relaxed">
                    Depuis notre création, CAMA s'engage à former une nouvelle génération de 
                    professionnels compétents et innovants dans tous les domaines académiques et techniques.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white p-10 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                            <FontAwesomeIcon icon={faEye} className="text-2xl text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Notre Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Être le centre de référence en Afrique de l'Ouest pour la formation 
                            académique et professionnelle, en offrant des programmes innovants et 
                            adaptés aux besoins du marché. Nous aspirons à créer un écosystème 
                            d'apprentissage qui favorise l'excellence, l'innovation et le développement durable.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                            <FontAwesomeIcon icon={faBullseye} className="text-2xl text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Notre Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Accompagner nos étudiants vers la réussite en proposant des formations 
                            de qualité, un encadrement personnalisé et des opportunités de 
                            développement professionnel. Nous nous engageons à maintenir les plus 
                            hauts standards académiques tout en restant accessibles et innovants.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-10 rounded-lg shadow-lg">
                    <h3 className="text-center text-3xl font-bold mb-8 text-gray-800">Nos Objectifs</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 py-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xl" />
                            <span className="text-gray-600 text-base">Former des professionnels compétents</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xl" />
                            <span className="text-gray-600 text-base">Développer l'innovation pédagogique</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xl" />
                            <span className="text-gray-600 text-base">Créer un réseau professionnel solide</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xl" />
                            <span className="text-gray-600 text-base">Promouvoir l'excellence académique</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
