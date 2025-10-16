
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faBook, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const ProgrammesGrid = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl text-center mb-12 text-gray-800 relative">Nos Programmes de Formation<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-gray-50 rounded-lg p-8 shadow-lg transition duration-300 ease-in-out border border-gray-200 text-center hover:-translate-y-2 hover:shadow-xl">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon icon={faCube} className="text-3xl text-white" />
                        </div>
                        <h3 className="text-2xl mb-4 text-gray-800">Formations Logicielles</h3>
                        <p className="text-gray-600 leading-relaxed mb-5">Maîtrisez les logiciels professionnels les plus demandés dans l'architecture et l'ingénierie. Nos formations sont dispensées par des experts du domaine et s'adaptent à tous les niveaux.</p>
                        <a href="#logiciels" className="inline-block py-3 px-6 bg-blue-500 text-white no-underline rounded-md font-semibold transition-colors duration-300 hover:bg-blue-700">Détails</a>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-8 shadow-lg transition duration-300 ease-in-out border border-gray-200 text-center hover:-translate-y-2 hover:shadow-xl">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon icon={faBook} className="text-3xl text-white" />
                        </div>
                        <h3 className="text-2xl mb-4 text-gray-800">Préparation aux Concours</h3>
                        <p className="text-gray-600 leading-relaxed mb-5">Préparez-vous efficacement aux concours d'entrée et examens avec nos méthodes éprouvées. Nous offrons des programmes intensifs et personnalisés pour maximiser vos chances de réussite.</p>
                        <a href="#concours" className="inline-block py-3 px-6 bg-blue-500 text-white no-underline rounded-md font-semibold transition-colors duration-300 hover:bg-blue-700">Détails</a>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-8 shadow-lg transition duration-300 ease-in-out border border-gray-200 text-center hover:-translate-y-2 hover:shadow-xl">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon icon={faChalkboardTeacher} className="text-3xl text-white" />
                        </div>
                        <h3 className="text-2xl mb-4 text-gray-800">Conférences & Événements</h3>
                        <p className="text-gray-600 leading-relaxed mb-5">Participez à nos événements pour rester à la pointe des dernières tendances et innovations. Nos conférences sont animées par des professionnels reconnus dans leurs domaines.</p>
                        <a href="#evenements" className="inline-block py-3 px-6 bg-blue-500 text-white no-underline rounded-md font-semibold transition-colors duration-300 hover:bg-blue-700">Détails</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgrammesGrid;
