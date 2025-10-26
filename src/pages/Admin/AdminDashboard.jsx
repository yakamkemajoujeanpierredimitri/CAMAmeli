
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getFileByCategory } from '../../service/file.service';
import { Logout } from '../../service/auth.service';
import { useAuth } from '../../context/authContext';
const AdminDashboard = () => {
    const [eventsCount, setEventsCount] = useState(0);
    const [preparationCount, setPreparationCount] = useState(0);
    const [formationsCount, setFormationsCount] = useState(0);
    const [activeFormationsCount, setActiveFormationsCount] = useState(0);
    const [testimonialsCount, setTestimonialsCount] = useState(0);
    const [testimonialsPending, setTestimonialsPending] = useState(0);
    const [studentsCount, setStudentsCount] = useState(0);
    const { user,dispatch } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {

        const fetchAll = async () => {
            try {
                const [eventsRes, formationsRes, testimonialsRes] = await Promise.all([
                    getFileByCategory('event'),
                    getFileByCategory('formation'),
                    getFileByCategory('temoignage'),
                ]);

                if (!eventsRes.error && Array.isArray(eventsRes.data)) {
                    const events = eventsRes.data;
                    setEventsCount(events.length);
                    const inPrep = events.filter(e => e.status !== 'active' || (e?.eventDetails?.date && new Date(e.eventDetails.date) > new Date())).length;
                    setPreparationCount(inPrep);
                }

                if (!formationsRes.error && Array.isArray(formationsRes.data)) {
                    const forms = formationsRes.data;
                    setFormationsCount(forms.length);
                    const active = forms.filter(f => f.status === 'active').length;
                    setActiveFormationsCount(active);
                }

                if (!testimonialsRes.error && Array.isArray(testimonialsRes.data)) {
                    const t = testimonialsRes.data;
                    setTestimonialsCount(t.length);
                    const pending = t.filter(item => item.status !== 'active').length;
                    setTestimonialsPending(pending);
                }

                // compute students count as sum of apply fields from events and formations
                let studentsTotal = 0;
                if (!eventsRes.error && Array.isArray(eventsRes.data)) {
                    studentsTotal += eventsRes.data.reduce((sum, ev) => sum + (Number(ev?.eventDetails?.apply) || 0), 0);
                }
                if (!formationsRes.error && Array.isArray(formationsRes.data)) {
                    studentsTotal += formationsRes.data.reduce((sum, f) => sum + (Number(f?.eventDetails?.apply) || 0), 0);
                }
                setStudentsCount(studentsTotal);
            } catch (err) {
                console.error('Failed to fetch dashboard counts', err);
            }
        };
        fetchAll();
    }, []);
const logout = async ()=>{
    const res = await Logout();
    if(!res.error){
        window.location.reload();
    }
     dispatch({type:'LOGOUT'});
    if(res.success){
        navigate('/');
    }
}
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 shadow-md relative overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="text-4xl animate-spin-slow mr-3">
                                <i className="bi bi-gear-fill text-white"></i>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-shadow">CAMA Administration</h1>
                                <p className="text-sm opacity-90">Control Panel</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => logout()} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300">
                                <i className="bi bi-box-arrow-right mr-2"></i>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-40">
                <div className="container mx-auto">
                    <ul className="flex justify-center p-2">
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" activeClassName="active bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md rounded-lg" to="/admin">
                                <i className="bi bi-speedometer2 mr-2"></i>
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin/trainings">
                                <i className="bi bi-book mr-2"></i>
                                Trainings
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin/events">
                                <i className="bi bi-calendar-event mr-2"></i>
                                Events
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin/testimonials">
                                <i className="bi bi-chat-quote mr-2"></i>
                                Testimonials
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin/statistics">
                                <i className="bi bi-graph-up mr-2"></i>
                                Statistics
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <div className="container mx-auto">
                    {/* Statistics Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* Formations Card */}
                        <div className="stats-card bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-blue-600 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h6 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Trainings</h6>
                                        <h2 className="text-4xl font-extrabold text-gray-800">{formationsCount}</h2>
                                        <p className="text-sm font-medium text-gray-600 mt-2">
                                            <i className="bi bi-book text-blue-500 mr-1"></i>
                                            {activeFormationsCount} active
                                        </p>
                                    </div>
                                    <div className="text-5xl text-blue-100">
                                        <i className="bi bi-book"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Etudiants Card */}
                        <div className="stats-card bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-green-500 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h6 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Registered Students</h6>
                                        <h2 className="text-4xl font-extrabold text-gray-800">{studentsCount}</h2>
                                        <p className="text-sm font-medium text-gray-600 mt-2">
                                            <i className="bi bi-arrow-up text-green-500 mr-1"></i>
                                            total registrations
                                        </p>
                                    </div>
                                    <div className="text-5xl text-green-100">
                                        <i className="bi bi-people"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Evenements Card */}
                        <div className="stats-card bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-yellow-500 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h6 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Upcoming Events</h6>
                                        <h2 className="text-4xl font-extrabold text-gray-800">{eventsCount}</h2>
                                        <p className="text-sm font-medium text-yellow-600 mt-2">
                                            {preparationCount} in preparation
                                        </p>
                                    </div>
                                    <div className="text-5xl text-yellow-100">
                                        <i className="bi bi-calendar-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Temoignages Card */}
                        <div className="stats-card bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-indigo-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h6 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Testimonials</h6>
                                        <h2 className="text-4xl font-extrabold text-gray-800">{testimonialsCount}</h2>
                                        <p className="text-sm font-medium text-gray-600 mt-2">
                                            <i className="bi bi-clock text-yellow-500 mr-1"></i>
                                            {testimonialsPending} pending
                                        </p>
                                    </div>
                                    <div className="text-5xl text-indigo-100">
                                        <i className="bi bi-chat-quote"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
