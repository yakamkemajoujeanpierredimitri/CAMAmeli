
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBook, faUsers } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Services = () => {
    return (
        <section className="py-12 sm:py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                   <NavLink to="/programmes?formations" className="text-center p-6 sm:p-10 rounded-lg transition-transform duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:shadow-2xl">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                            <FontAwesomeIcon icon={faGraduationCap} className="text-2xl sm:text-3xl text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl mb-1 sm:mb-2 text-gray-800">Trainings</h3>
                        <p className="text-gray-600 text-base">Professional software</p>
                    </NavLink>
                    <NavLink to="/programs?preparation" className="text-center p-6 sm:p-10 rounded-lg transition-transform duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:shadow-2xl">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                            <FontAwesomeIcon icon={faBook} className="text-2xl sm:text-3xl text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl mb-1 sm:mb-2 text-gray-800">Preparation</h3>
                        <p className="text-gray-600 text-base">Contests & exams</p>
                    </NavLink>
                    <NavLink to="/" className="text-center p-6 sm:p-10 rounded-lg transition-transform duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:shadow-2xl">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                            <FontAwesomeIcon icon={faUsers} className="text-2xl sm:text-3xl text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl mb-1 sm:mb-2 text-gray-800">Community</h3>
                        <p className="text-gray-600 text-base">Student network</p>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Services;
