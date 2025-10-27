
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-4">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Testimonials</span>
                </div>
                <h2 className="text-center text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">What our students say</h2>
                <p className="text-center max-w-2xl mx-auto mb-8 sm:mb-16 text-gray-600 text-base sm:text-lg leading-relaxed">
                    Discover the experiences of our former students and their journey after graduation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12">
                    {/* Testimonial 1 */}
                    <div className="bg-gray-50 rounded-lg p-6 sm:p-8 shadow-md transition-all duration-300 ease-in-out border border-gray-200 hover:shadow-xl hover:-translate-y-2">
                        <div className="flex items-center mb-3 sm:mb-5">
                            <img src="https://plus.unsplash.com/premium_photo-1741902728732-9abc944e318c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGZlZW1tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="Kouassi Jean" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-2 sm:mr-4 border-4 border-blue-500" />
                            <div className="flex-1">
                                <h4 className="text-base sm:text-lg font-semibold text-gray-800">Kouassi Jean</h4>
                                <p className="text-sm text-blue-500 font-medium">Architect at Sogea Group</p>
                            </div>
                        </div>
                        <div className="relative">
                            <p className="italic text-gray-700 leading-relaxed relative pl-5">
                                <span className="text-5xl sm:text-6xl absolute -top-5 -left-2 text-blue-100 font-serif">"</span>
                                "The AutoCAD and Revit training at CAMA allowed me to acquire solid technical skills.
                                In just 3 months, I was able to master professional software that made the difference
                                in my recruitment. I highly recommend this training!"
                            </p>
                            <div className="text-yellow-400 mt-2 sm:mt-4">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                    </div>
                    
                    {/* Testimonial 2 */}
                    <div className="bg-gray-50 rounded-lg p-6 sm:p-8 shadow-md transition-all duration-300 ease-in-out border border-gray-200 hover:shadow-xl hover:-translate-y-2">
                        <div className="flex items-center mb-3 sm:mb-5">
                            <img src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=744" alt="Adjoua Marie" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-2 sm:mr-4 border-4 border-blue-500" />
                            <div className="flex-1">
                                <h4 className="text-base sm:text-lg font-semibold text-gray-800">Adjoua Marie</h4>
                                <p className="text-sm text-blue-500 font-medium">Engineer at Bolloré Africa Logistics</p>
                            </div>
                        </div>
                        <div className="relative">
                            <p className="italic text-gray-700 leading-relaxed relative pl-5">
                                <span className="text-5xl sm:text-6xl absolute -top-5 -left-2 text-blue-100 font-serif">"</span>
                                "The exam preparation at CAMA helped me get into the Abidjan Polytechnic School.
                                The personalized support and innovative teaching methods were key
                                to my success. Thanks to the entire teaching team!"
                            </p>
                            <div className="text-yellow-400 mt-2 sm:mt-4">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                    </div>
                    
                    {/* Testimonial 3 */}
                    <div className="bg-gray-50 rounded-lg p-6 sm:p-8 shadow-md transition-all duration-300 ease-in-out border border-gray-200 hover:shadow-xl hover:-translate-y-2">
                        <div className="flex items-center mb-3 sm:mb-5">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Koné Amadou" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-2 sm:mr-4 border-4 border-blue-500" />
                            <div className="flex-1">
                                <h4 className="text-base sm:text-lg font-semibold text-gray-800">Koné Amadou</h4>
                                <p className="text-sm text-blue-500 font-medium">3D Designer at Orange CI</p>
                            </div>
                        </div>
                        <div className="relative">
                            <p className="italic text-gray-700 leading-relaxed relative pl-5">
                                <span className="text-5xl sm:text-6xl absolute -top-5 -left-2 text-blue-100 font-serif">"</span>
                                "Thanks to the SketchUp and 3ds Max training at CAMA, I was able to develop my 3D modeling skills.
                                The professionalism of the trainers and the modern equipment made the learning
                                experience enjoyable and very effective. I found a job 2 months after the training!"
                            </p>
                            <div className="text-yellow-400 mt-2 sm:mt-4">
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
