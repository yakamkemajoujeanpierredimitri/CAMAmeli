
import React from 'react';

const Team = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-4">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Our Team</span>
                </div>
                <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">Our Experts</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <div className="text-center p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500">
                            <img src="https://plus.unsplash.com/premium_photo-1741902728732-9abc944e318c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGZlZW1tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="Dr. Marie Kouame" className="w-full h-full object-cover" />
                        </div>
                        <div className="member-info">
                            <h4 className="text-xl font-bold mb-2 text-gray-800">Dr. Marie Kouame</h4>
                            <p className="text-blue-500 font-semibold mb-2">Academic Director</p>
                            <p className="text-gray-600 text-sm">Engineering & Training</p>
                        </div>
                    </div>
                    
                    <div className="text-center p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Ing. Jean Baptiste" className="w-full h-full object-cover" />
                        </div>
                        <div className="member-info">
                            <h4 className="text-xl font-bold mb-2 text-gray-800">Eng. Jean Baptiste</h4>
                            <p className="text-blue-500 font-semibold mb-2">Training Manager</p>
                            <p className="text-gray-600 text-sm">AutoCAD & Revit</p>
                        </div>
                    </div>
                    
                    <div className="text-center p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Prof. Aisha Traoré" className="w-full h-full object-cover" />
                        </div>
                        <div className="member-info">
                            <h4 className="text-xl font-bold mb-2 text-gray-800">Prof. Aisha Traoré</h4>
                            <p className="text-blue-500 font-semibold mb-2">Pedagogical Coordinator</p>
                            <p className="text-gray-600 text-sm">Competition Preparation</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
