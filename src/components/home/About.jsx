
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section className="py-12 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-4">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">About us</span>
                </div>
                <h2 className="text-center text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">Excellence at the service of your success</h2>
                <p className="text-center max-w-2xl mx-auto mb-8 sm:mb-16 text-gray-600 text-base sm:text-lg leading-relaxed">
                    Since our creation, CAMA has been committed to training a new generation of competent and innovative professionals in all academic and technical fields.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-16">
                    <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                            <FontAwesomeIcon icon={faEye} className="text-xl sm:text-2xl text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To be the reference center in West Africa for academic and professional training, offering innovative programs adapted to market needs. We aspire to create a learning ecosystem that promotes excellence, innovation, and sustainable development.
                        </p>
                    </div>
                    <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                            <FontAwesomeIcon icon={faBullseye} className="text-xl sm:text-2xl text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To support our students towards success by offering quality training, personalized supervision, and professional development opportunities. We are committed to maintaining the highest academic standards while remaining accessible and innovative.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg">
                    <h3 className="text-center text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">Our Objectives</h3>
                    <div className="grid md:grid-cols-2 gap-2 sm:gap-4">
                        <div className="flex items-center gap-3 py-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-lg sm:text-xl" />
                            <span className="text-gray-600 text-sm sm:text-base">Train competent professionals</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-lg sm:text-xl" />
                            <span className="text-gray-600 text-sm sm:text-base">Develop pedagogical innovation</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-lg sm:text-xl" />
                            <span className="text-gray-600 text-sm sm:text-base">Create a solid professional network</span>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-lg sm:text-xl" />
                            <span className="text-gray-600 text-sm sm:text-base">Promote academic excellence</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
