
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-4">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Témoignages</span>
                </div>
                <h2 className="text-center text-4xl font-bold mb-4 text-gray-800">Ce que disent nos étudiants</h2>
                <p className="text-center max-w-2xl mx-auto mb-16 text-gray-600 text-lg leading-relaxed">
                    Découvrez les expériences de nos anciens étudiants et leur parcours après la formation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {/* Testimonial 1 */}
                    <div className="bg-gray-50 rounded-lg p-8 shadow-md transition-all duration-300 ease-in-out border border-gray-200 hover:shadow-xl hover:-translate-y-2">
                        <div className="flex items-center mb-5">
                            <img src="https://plus.unsplash.com/premium_photo-1741902728732-9abc944e318c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGZlZW1tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="Kouassi Jean" className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-blue-500" />
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-gray-800">Kouassi Jean</h4>
                                <p className="text-sm text-blue-500 font-medium">Architecte chez Groupe Sogea</p>
                            </div>
                        </div>
                        <div className="relative">
                            <p className="italic text-gray-700 leading-relaxed relative pl-5">
                                <span className="text-6xl absolute -top-5 -left-2 text-blue-100 font-serif">"</span>
                                "La formation en AutoCAD et Revit à CAMA m'a permis d'acquérir des compétences techniques solides.
                                En seulement 3 mois, j'ai pu maîtriser des logiciels professionnels qui ont fait la différence
                                dans mon recrutement. Je recommande vivement cette formation !"
                            </p>
                            <div className="text-yellow-400 mt-4">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                    </div>
                    
                    {/* Testimonial 2 */}
                    <div className="bg-gray-50 rounded-lg p-8 shadow-md transition-all duration-300 ease-in-out border border-gray-200 hover:shadow-xl hover:-translate-y-2">
                        <div className="flex items-center mb-5">
                            <img src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=744" alt="Adjoua Marie" className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-blue-500" />
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-gray-800">Adjoua Marie</h4>
                                <p className="text-sm text-blue-500 font-medium">Ingénieure chez Bolloré Africa Logistics</p>
                            </div>
                        </div>
                        <div className="relative">
                            <p className="italic text-gray-700 leading-relaxed relative pl-5">
                                <span className="text-6xl absolute -top-5 -left-2 text-blue-100 font-serif">"</span>
                                "La préparation aux concours dispensée à CAMA m'a permis d'intégrer l'École Polytechnique d'Abidjan.
                                L'accompagnement personnalisé et les méthodes pédagogiques innovantes ont été déterminants
                                dans ma réussite. Merci à toute l'équipe pédagogique !"
                            </p>
                            <div className="text-yellow-400 mt-4">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                    </div>
                    
                    {/* Testimonial 3 */}
                    <div className="bg-gray-50 rounded-lg p-8 shadow-md transition-all duration-300 ease-in-out border border-gray-200 hover:shadow-xl hover:-translate-y-2">
                        <div className="flex items-center mb-5">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Koné Amadou" className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-blue-500" />
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-gray-800">Koné Amadou</h4>
                                <p className="text-sm text-blue-500 font-medium">Designer 3D chez Orange CI</p>
                            </div>
                        </div>
                        <div className="relative">
                            <p className="italic text-gray-700 leading-relaxed relative pl-5">
                                <span className="text-6xl absolute -top-5 -left-2 text-blue-100 font-serif">"</span>
                                "Grâce à la formation SketchUp et 3ds Max à CAMA, j'ai pu développer mes compétences en modélisation 3D.
                                Le professionnalisme des formateurs et les équipements modernes ont rendu l'apprentissage
                                agréable et très efficace. J'ai trouvé un emploi 2 mois après la formation !"
                            </p>
                            <div className="text-yellow-400 mt-4">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStarHalfAlt} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
