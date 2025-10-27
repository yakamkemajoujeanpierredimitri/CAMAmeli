
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUserGraduate, faBriefcase, faInfinity } from '@fortawesome/free-solid-svg-icons';

const Objectives = () => {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-4">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Our Objectives</span>
                </div>
                <h2 className="text-center text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-gray-800">Our Commitment</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-8 sm:mt-12">
                    <div className="bg-gray-50 rounded-xl p-6 sm:p-10 text-center shadow-md transition-all duration-300 ease-in-out relative overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-2 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-blue-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-5 transition-all duration-300 ease-in-out transform hover:scale-110">
                            <FontAwesomeIcon icon={faStar} className="text-xl sm:text-2xl text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Academic Excellence</h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Maintain the highest training standards</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 sm:p-10 text-center shadow-md transition-all duration-300 ease-in-out relative overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-2 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-blue-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-5 transition-all duration-300 ease-in-out transform hover:scale-110">
                            <FontAwesomeIcon icon={faUserGraduate} className="text-xl sm:text-2xl text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Personal Support</h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Individualized monitoring of each student</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 sm:p-10 text-center shadow-md transition-all duration-300 ease-in-out relative overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-2 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-blue-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-5 transition-all duration-300 ease-in-out transform hover:scale-110">
                            <FontAwesomeIcon icon={faBriefcase} className="text-xl sm:text-2xl text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Professional Integration</h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Preparing our students for the job market</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 sm:p-10 text-center shadow-md transition-all duration-300 ease-in-out relative overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-2 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-blue-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-5 transition-all duration-300 ease-in-out transform hover:scale-110">
                            <FontAwesomeIcon icon={faInfinity} className="text-xl sm:text-2xl text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Continuous Innovation</h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Adapting our programs to technological changes</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Objectives;
