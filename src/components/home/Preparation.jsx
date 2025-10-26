
import React from 'react';
import { NavLink } from 'react-router-dom';

const Preparation = () => {
    return (
        <section className="py-16 px-[8%]">
            <div className="flex flex-wrap gap-10 max-w-7xl items-center w-full">
                <div className="flex-1 min-w-[300px]">
                    <div className="flex items-center gap-4 mb-5">
                        <div className="bg-gray-100 rounded-full p-3 text-2xl">📘</div>
                        <h2 className="text-3xl font-bold">Competition Preparation</h2>
                    </div>
                    <p className="text-gray-600 mb-8 max-w-md">
                        Prepare effectively for entrance exams and examinations with our proven methods.
                    </p>

                    <div className="flex flex-col gap-4 mb-9">
                        <div className="flex justify-between items-center bg-gray-50 rounded-xl p-5 shadow-sm transition-transform duration-200 ease-in-out hover:-translate-y-1">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Grandes Écoles competitions</h3>
                                <p className="text-gray-600 text-sm">Duration: 12 months</p>
                            </div>
                            <span className="text-sm py-1.5 px-3 rounded-full font-medium bg-orange-500 text-white">Intensive</span>
                        </div>

                        <div className="flex justify-between items-center bg-gray-50 rounded-xl p-5 shadow-sm transition-transform duration-200 ease-in-out hover:-translate-y-1">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">State exams</h3>
                                <p className="text-gray-600 text-sm">Duration: 6 months</p>
                            </div>
                            <span className="text-sm py-1.5 px-3 rounded-full font-medium bg-blue-500 text-white">Standard</span>
                        </div>

                        <div className="flex justify-between items-center bg-gray-50 rounded-xl p-5 shadow-sm transition-transform duration-200 ease-in-out hover:-translate-y-1">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">International competitions</h3>
                                <p className="text-gray-600 text-sm">Duration: 8 months</p>
                            </div>
                            <span className="text-sm py-1.5 px-3 rounded-full font-medium bg-green-500 text-white">Expert</span>
                        </div>

                        <div className="flex justify-between items-center bg-gray-50 rounded-xl p-5 shadow-sm transition-transform duration-200 ease-in-out hover:-translate-y-1">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Aptitude tests</h3>
                                <p className="text-gray-600 text-sm">Duration: 3 months</p>
                            </div>
                            <span className="text-sm py-1.5 px-3 rounded-full font-medium bg-purple-500 text-white">Preparatory</span>
                        </div>
                    </div>

                    <div className="flex gap-4 flex-wrap">
                        <NavLink to="/programs" className="border-none cursor-pointer rounded-lg font-medium py-2.5 px-4 transition-all duration-300 ease-in-out bg-black text-white hover:bg-gray-800">See the programs</NavLink>
                        <NavLink to="/contact" className="border-none cursor-pointer rounded-lg font-medium py-2.5 px-4 transition-all duration-300 ease-in-out bg-gray-100 text-black hover:bg-gray-200">Request info</NavLink>
                    </div>
                </div>

                <div className="flex-1 min-w-[300px] flex justify-center">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Classroom course" className="w-full max-w-lg rounded-2xl object-cover shadow-lg" />
                </div>
            </div>
        </section>
    );
};

export default Preparation;
