
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUserGraduate, faBriefcase, faInfinity } from '@fortawesome/free-solid-svg-icons';

const Objectives = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-4">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Nos Objectifs</span>
                </div>
                <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">Notre Engagement</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    <div className="bg-gray-50 rounded-xl p-10 text-center shadow-md transition-all duration-300 ease-in-out relative overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-2 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-blue-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 ease-in-out transform hover:scale-110">
                            <FontAwesomeIcon icon={faStar} className="text-2xl text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Excellence Académique</h3>
                        <p className="text-gray-600 text-base leading-relaxed">Maintenir les plus hauts standards de formation</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-10 text-center shadow-md transition-all duration-300 ease-in-out relative overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-2 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-blue-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 ease-in-out transform hover:scale-110">
                            <FontAwesomeIcon icon={faUserGraduate} className="text-2xl text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Accompagnement Personnel</h3>
                        <p className="text-gray-600 text-base leading-relaxed">Suivi individualisé de chaque étudiant</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-10 text-center shadow-md transition-all duration-300 ease-in-out relative overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-2 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-blue-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 ease-in-out transform hover:scale-110">
                            <FontAwesomeIcon icon={faBriefcase} className="text-2xl text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Insertion Professionnelle</h3>
                        <p className="text-gray-600 text-base leading-relaxed">Préparer nos étudiants au marché du travail</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-10 text-center shadow-md transition-all duration-300 ease-in-out relative overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-2 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-blue-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 ease-in-out transform hover:scale-110">
                            <FontAwesomeIcon icon={faInfinity} className="text-2xl text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Innovation Continue</h3>
                        <p className="text-gray-600 text-base leading-relaxed">Adapter nos programmes aux évolutions technologiques</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Objectives;
