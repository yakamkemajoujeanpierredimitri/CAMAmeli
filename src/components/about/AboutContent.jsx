
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const AboutContent = () => {
    return (
        <>
                    <section className="py-12 sm:py-20 bg-white">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl sm:text-4xl text-center mb-8 sm:mb-12 text-gray-800 relative">Our History<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div></h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                                <div className="history-text">
                                    <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-6 text-gray-800">Foundation and Development</h3>
                                    <p className="text-gray-600 leading-loose mb-5">The Academic Training Center (CAMA) was established in 2025 with a clear vision: to provide high-quality training for students and professionals looking to advance in their respective fields.</p>
                                    <p className="text-gray-600 leading-loose mb-5">Since our inception, we have been dedicated to cultivating a new generation of skilled and forward-thinking professionals across all academic and technical disciplines. Our unique teaching approach blends theoretical knowledge with practical application to ensure a comprehensive and career-focused education.</p>
                                    <p className="text-gray-600 leading-loose mb-5">We aim to build a learning ecosystem that fosters excellence, innovation, and sustainable growth, tailored to the specific demands of the  African job market.</p>
                                </div>
                                <div className="history-image">
                                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="CAMA Academic Center" className="w-full rounded-lg shadow-xl" />
                                </div>
                            </div>
                        </div>
                    </section>
            <section className="py-12 sm:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl text-center mb-8 sm:mb-12 text-gray-800 relative">Our Vision & Mission<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div></h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-lg p-6 sm:p-10 shadow-lg transition duration-300 ease-in-out border border-gray-200 hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-6">
                                <FontAwesomeIcon icon={faEye} className="text-2xl sm:text-3xl text-white" />
                            </div>
                            <h3 className="text-xl sm:text-2xl mb-3 sm:mb-5 text-gray-800 text-center">Our Vision</h3>
                            <p className="text-gray-600 leading-loose text-center">To be the leading center in Africa for academic and professional training, offering innovative programs tailored to market needs. We aspire to create a learning ecosystem that fosters excellence, innovation, and sustainable development.</p>
                        </div>
                        
                        <div className="bg-white rounded-lg p-6 sm:p-10 shadow-lg transition duration-300 ease-in-out border border-gray-200 hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-6">
                                <FontAwesomeIcon icon={faBullseye} className="text-2xl sm:text-3xl text-white" />
                            </div>
                            <h3 className="text-xl sm:text-2xl mb-3 sm:mb-5 text-gray-800 text-center">Our Mission</h3>
                            <p className="text-gray-600 leading-loose text-center">To guide our students to success by providing quality training, personalized mentorship, and professional development opportunities. We are committed to upholding the highest academic standards while remaining accessible and innovative.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl text-center mb-8 sm:mb-12 text-gray-800 relative">Our Objectives<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div></h2>
                    
                    <div className="mt-8 sm:mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex items-start gap-4 p-4 sm:p-5 bg-gray-50 rounded-lg transition duration-300 hover:translate-x-1">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-xl sm:text-2xl mt-1" />
                                <span className="text-base sm:text-lg text-gray-700 font-medium">Train competent professionals</span>
                            </div>
                            <div className="flex items-start gap-4 p-4 sm:p-5 bg-gray-50 rounded-lg transition duration-300 hover:translate-x-1">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-xl sm:text-2xl mt-1" />
                                <span className="text-base sm:text-lg text-gray-700 font-medium">Develop educational innovation</span>
                            </div>
                            <div className="flex items-start gap-4 p-4 sm:p-5 bg-gray-50 rounded-lg transition duration-300 hover:translate-x-1">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-xl sm:text-2xl mt-1" />
                                <span className="text-base sm:text-lg text-gray-700 font-medium">Build a strong professional network</span>
                            </div>
                            <div className="flex items-start gap-4 p-4 sm:p-5 bg-gray-50 rounded-lg transition duration-300 hover:translate-x-1">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-xl sm:text-2xl mt-1" />
                                <span className="text-base sm:text-lg text-gray-700 font-medium">Promote academic excellence</span>
                            </div>
                            <div className="flex items-start gap-4 p-4 sm:p-5 bg-gray-50 rounded-lg transition duration-300 hover:translate-x-1">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-xl sm:text-2xl mt-1" />
                                <span className="text-base sm:text-lg text-gray-700 font-medium">Ensure rapid professional integration</span>
                            </div>
                            <div className="flex items-start gap-4 p-4 sm:p-5 bg-gray-50 rounded-lg transition duration-300 hover:translate-x-1">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-xl sm:text-2xl mt-1" />
                                <span className="text-base sm:text-lg text-gray-700 font-medium">Adapt our training to market changes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutContent;
