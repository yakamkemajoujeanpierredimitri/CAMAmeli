
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Activities = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-4">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Nos Activités</span>
                </div>
                <h2 className="text-center text-4xl font-bold mb-4 text-gray-800">Une gamme complète de formations</h2>
                <p className="text-center max-w-2xl mx-auto mb-16 text-gray-600 text-lg leading-relaxed">
                    Découvrez nos différentes activités conçues pour répondre à tous vos besoins 
                    d'apprentissage et de développement professionnel.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="activities-image">
                        <img src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Formation en logiciels" className="w-full h-96 object-cover rounded-lg shadow-2xl" />
                    </div>
                    
                    <div className="activities-list">
                        <div className="flex gap-8 items-start">
                            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <FontAwesomeIcon icon={faDesktop} className="text-3xl text-white" />
                            </div>
                            <div className="category-content">
                                <h3 className="text-3xl mb-4 text-gray-800">Formations Logicielles</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">Maîtrisez les logiciels professionnels les plus demandés dans l'architecture et l'ingénierie.</p>
                                
                                <div className="mb-8">
                                    <div className="flex justify-between items-center py-4 border-b border-gray-200">
                                        <div className="program-info">
                                            <h4 className="text-xl mb-2 text-gray-800">AutoCAD</h4>
                                            <p className="text-gray-600 text-sm">Durée: 6 semaines</p>
                                        </div>
                                        <span className="py-1 px-3 rounded-full text-xs font-semibold bg-green-100 text-green-800">Débutant à Avancé</span>
                                    </div>
                                    
                                    <div className="flex justify-between items-center py-4 border-b border-gray-200">
                                        <div className="program-info">
                                            <h4 className="text-xl mb-2 text-gray-800">Archicad</h4>
                                            <p className="text-gray-600 text-sm">Durée: 8 semaines</p>
                                        </div>
                                        <span className="py-1 px-3 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">Intermédiaire</span>
                                    </div>
                                    
                                    <div className="flex justify-between items-center py-4 border-b border-gray-200">
                                        <div className="program-info">
                                            <h4 className="text-xl mb-2 text-gray-800">Revit</h4>
                                            <p className="text-gray-600 text-sm">Durée: 10 semaines</p>
                                        </div>
                                        <span className="py-1 px-3 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-800">Professionnel</span>
                                    </div>
                                    
                                    <div className="flex justify-between items-center py-4">
                                        <div className="program-info">
                                            <h4 className="text-xl mb-2 text-gray-800">SketchUp</h4>
                                            <p className="text-gray-600 text-sm">Durée: 4 semaines</p>
                                        </div>
                                        <span className="py-1 px-3 rounded-full text-xs font-semibold bg-green-100 text-green-800">Débutant</span>
                                    </div>
                                </div>
                                
                                <div className="flex gap-4">
                                    <NavLink to="/programmes" className="py-3 px-8 border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out no-underline inline-block text-center bg-gray-800 text-white hover:bg-gray-700 hover:-translate-y-0.5">Voir les programmes</NavLink>
                                    <NavLink to="/contact" className="py-3 px-8 rounded-md text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out no-underline inline-block text-center bg-transparent text-gray-800 border-2 border-gray-800 hover:bg-gray-800 hover:text-white hover:-translate-y-0.5">Demander des infos</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;
