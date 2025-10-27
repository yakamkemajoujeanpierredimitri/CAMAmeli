
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Activities = () => {
    return (
        <section className="py-12 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-4">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Our Activities</span>
                </div>
                <h2 className="text-center text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">A complete range of training</h2>
                <p className="text-center max-w-2xl mx-auto mb-8 sm:mb-16 text-gray-600 text-base sm:text-lg leading-relaxed">
                    Discover our various activities designed to meet all your learning and professional development needs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center">
                    <div className="activities-image">
                        <img src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Software training" className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-2xl" />
                    </div>
                    
                    <div className="activities-list">
                        <div className="flex gap-4 sm:gap-8 items-start">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <FontAwesomeIcon icon={faDesktop} className="text-2xl sm:text-3xl text-white" />
                            </div>
                            <div className="category-content">
                                <h3 className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-gray-800">Software Training</h3>
                                <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed">Master the most requested professional software in architecture and engineering.</p>
                                
                                <div className="mb-8">
                                    <div className="flex justify-between items-center py-3 sm:py-4 border-b border-gray-200">
                                        <div className="program-info">
                                            <h4 className="text-lg sm:text-xl mb-1 sm:mb-2 text-gray-800">AutoCAD</h4>
                                            <p className="text-gray-600 text-sm">Duration: 6 weeks</p>
                                        </div>
                                        <span className="py-1 px-3 rounded-full text-xs font-semibold bg-green-100 text-green-800">Beginner to Advanced</span>
                                    </div>
                                    
                                    <div className="flex justify-between items-center py-3 sm:py-4 border-b border-gray-200">
                                        <div className="program-info">
                                            <h4 className="text-lg sm:text-xl mb-1 sm:mb-2 text-gray-800">Archicad</h4>
                                            <p className="text-gray-600 text-sm">Duration: 8 weeks</p>
                                        </div>
                                        <span className="py-1 px-3 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">Intermediate</span>
                                    </div>
                                    
                                    <div className="flex justify-between items-center py-3 sm:py-4 border-b border-gray-200">
                                        <div className="program-info">
                                            <h4 className="text-lg sm:text-xl mb-1 sm:mb-2 text-gray-800">Revit</h4>
                                            <p className="text-gray-600 text-sm">Duration: 10 weeks</p>
                                        </div>
                                        <span className="py-1 px-3 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-800">Professional</span>
                                    </div>
                                    
                                    <div className="flex justify-between items-center py-3 sm:py-4">
                                        <div className="program-info">
                                            <h4 className="text-lg sm:text-xl mb-1 sm:mb-2 text-gray-800">SketchUp</h4>
                                            <p className="text-gray-600 text-sm">Duration: 4 weeks</p>
                                        </div>
                                        <span className="py-1 px-3 rounded-full text-xs font-semibold bg-green-100 text-green-800">Beginner</span>
                                    </div>
                                </div>
                           <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                    <NavLink to="/programs" className="py-2 px-6 sm:py-3 sm:px-8 border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out no-underline inline-block text-center bg-gray-800 text-white hover:bg-gray-700 hover:-translate-y-0.5">See the programs</NavLink>
                                    <NavLink to="/contact" className="py-2 px-6 sm:py-3 sm:px-8 rounded-md text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out no-underline inline-block text-center bg-transparent text-gray-800 border-2 border-gray-800 hover:bg-gray-800 hover:text-white hover:-translate-y-0.5">Request info</NavLink>
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
