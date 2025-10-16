
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const AboutContent = () => {
    return (
        <>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl text-center mb-12 text-gray-800 relative">Notre Histoire<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div></h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="history-text">
                            <h3 className="text-3xl mb-6 text-gray-800">Fondation et Développement</h3>
                            <p className="text-gray-600 leading-loose mb-5">Le Centre Académique de Formation (CAMA) a été créé en 2019 avec une vision claire : offrir une formation de qualité supérieure aux étudiants et professionnels désireux de se perfectionner dans leurs domaines respectifs.</p>
                            <p className="text-gray-600 leading-loose mb-5">Depuis notre création, nous sommes engagés à former une nouvelle génération de professionnels compétents et innovants dans tous les domaines académiques et techniques. Notre approche pédagogique unique combine théorie et pratique pour garantir une formation complète et professionnalisante.</p>
                            <p className="text-gray-600 leading-loose mb-5">Nous aspirons à créer un écosystème d'apprentissage qui favorise l'excellence, l'innovation et le développement durable, en réponse aux besoins spécifiques du marché du travail en Afrique de l'Ouest.</p>
                        </div>
                        <div className="history-image">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Centre académique CAMA" className="w-full rounded-lg shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl text-center mb-12 text-gray-800 relative">Notre Vision & Mission<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div></h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-lg p-10 shadow-lg transition duration-300 ease-in-out border border-gray-200 hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FontAwesomeIcon icon={faEye} className="text-3xl text-white" />
                            </div>
                            <h3 className="text-2xl mb-5 text-gray-800 text-center">Notre Vision</h3>
                            <p className="text-gray-600 leading-loose text-center">Être le centre de référence en Afrique de l'Ouest pour la formation académique et professionnelle, en offrant des programmes innovants et adaptés aux besoins du marché. Nous aspirons à créer un écosystème d'apprentissage qui favorise l'excellence, l'innovation et le développement durable.</p>
                        </div>
                        
                        <div className="bg-white rounded-lg p-10 shadow-lg transition duration-300 ease-in-out border border-gray-200 hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FontAwesomeIcon icon={faBullseye} className="text-3xl text-white" />
                            </div>
                            <h3 className="text-2xl mb-5 text-gray-800 text-center">Notre Mission</h3>
                            <p className="text-gray-600 leading-loose text-center">Accompagner nos étudiants vers la réussite en proposant des formations de qualité, un encadrement personnalisé et des opportunités de développement professionnel. Nous nous engageons à maintenir les plus hauts standards académiques tout en restant accessibles et innovants.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl text-center mb-12 text-gray-800 relative">Nos Objectifs<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div></h2>
                    
                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg transition duration-300 hover:translate-x-1">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 text-2xl mt-1" />
                                <span className="text-gray-700 text-lg font-medium">Former des professionnels compétents</span>
                            </div>
                            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg transition duration-300 hover:translate-x-1">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 text-2xl mt-1" />
                                <span className="text-gray-700 text-lg font-medium">Développer l'innovation pédagogique</span>
                            </div>
                            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg transition duration-300 hover:translate-x-1">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 text-2xl mt-1" />
                                <span className="text-gray-700 text-lg font-medium">Créer un réseau professionnel solide</span>
                            </div>
                            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg transition duration-300 hover:translate-x-1">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 text-2xl mt-1" />
                                <span className="text-gray-700 text-lg font-medium">Promouvoir l'excellence académique</span>
                            </div>
                            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg transition duration-300 hover:translate-x-1">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 text-2xl mt-1" />
                                <span className="text-gray-700 text-lg font-medium">Assurer une insertion professionnelle rapide</span>
                            </div>
                            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg transition duration-300 hover:translate-x-1">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 text-2xl mt-1" />
                                <span className="text-gray-700 text-lg font-medium">Adapter nos formations aux évolutions du marché</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutContent;
