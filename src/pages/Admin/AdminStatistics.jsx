
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Chart from 'chart.js/auto';
import { getAllFiles } from '../../service/file.service';

const AdminStatistics = () => {
    const [stats, setStats] = useState(null);
    const inscriptionsChartRef = useRef(null);
    const formationsChartRef = useRef(null);
    const revenusChartRef = useRef(null);
    const satisfactionChartRef = useRef(null);
    const geographieChartRef = useRef(null);
    const participationChartRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllFiles();
            if (result.error) {
                console.error(result.error);
            } else {
                // Process data for charts
                const formations = result.data.filter(file => file.category === 'formation');
                const events = result.data.filter(file => file.category === 'event');
                const testimonies = result.data.filter(file => file.category === 'temoignage');

                // Example of processing data for one chart
                const popularFormations = formations.reduce((acc, cur) => {
                    acc[cur.filename] = (acc[cur.filename] || 0) + 1;
                    return acc;
                }, {});

                const formationStudents = formations.reduce((acc, cur) => acc + Number(cur.eventDetails?.apply || 0), 0);
                const eventStudents = events.reduce((acc, cur) => acc + Number(cur.eventDetails?.apply || 0), 0);
                setStats({
                    totalStudents: formationStudents + eventStudents,
                    totalRevenue: result.data.reduce((acc, cur) => acc + Number(cur.price || 0), 0),
                    popularFormations,
                    totalFormations: formations.length,
                    totalEvents: events.length,
                    totalTestimonies: testimonies.length,
                    // ... other stats
                });
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (stats) {
            // Initialize charts
            const chartInstances = [];
            if (formationsChartRef.current) {
                const chart = new Chart(formationsChartRef.current, {
                    type: 'doughnut',
                    data: {
                        labels: Object.keys(stats.popularFormations),
                        datasets: [{
                            data: Object.values(stats.popularFormations),
                            backgroundColor: [
                                'rgb(99, 102, 241)',
                                'rgb(16, 185, 129)',
                                'rgb(59, 130, 246)',
                                'rgb(245, 158, 11)',
                                'rgb(139, 92, 246)'
                            ],
                            borderWidth: 0
                        }]
                    }
                });
                chartInstances.push(chart);
            }
            // ... initialize other charts

            return () => {
                chartInstances.forEach(chart => chart.destroy());
            };
        }
    }, [stats]);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
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
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300">
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
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin">
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
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" activeClassName="active bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md rounded-lg" to="/admin/statistics">
                                <i className="bi bi-graph-up mr-2"></i>
                                Statistics
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* ... */}
            {/* Main Content */}
            <main className="flex-1 p-8">
                <div className="container mx-auto">
                    {/* Page Header */}
                    {/* ... */}

                    {/* Key Metrics Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                            <div className="text-4xl text-blue-600 mx-auto mb-3"><i className="bi bi-people"></i></div>
                            <h3 className="text-3xl font-bold text-gray-800">{stats ? stats.totalStudents : 'Loading...'}</h3>
                            <p className="text-gray-500">Total Students (trainings + events)</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                            <div className="text-4xl text-green-600 mx-auto mb-3"><i className="bi bi-cash"></i></div>
                            <h3 className="text-3xl font-bold text-gray-800">{stats ? `${stats.totalRevenue} FCFA` : 'Loading...'}</h3>
                            <p className="text-gray-500">Total Revenue</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                            <div className="text-4xl text-indigo-600 mx-auto mb-3"><i className="bi bi-calendar-event"></i></div>
                            <h3 className="text-3xl font-bold text-gray-800">{stats ? stats.totalEvents : 'Loading...'}</h3>
                            <p className="text-gray-500">Events</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                            <div className="text-4xl text-pink-600 mx-auto mb-3"><i className="bi bi-chat-quote"></i></div>
                            <h3 className="text-3xl font-bold text-gray-800">{stats ? stats.totalTestimonies : 'Loading...'}</h3>
                            <p className="text-gray-500">Testimonials</p>
                        </div>
                    </div>

                    {/* Charts Row 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
                            <h5 className="text-lg font-semibold text-gray-800 mb-4"><i className="bi bi-graph-up mr-2"></i>Monthly Registrations</h5>
                            <canvas ref={inscriptionsChartRef} height="300"></canvas>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h5 className="text-lg font-semibold text-gray-800 mb-4"><i className="bi bi-pie-chart mr-2"></i>Popular Trainings</h5>
                            <canvas ref={formationsChartRef} height="300"></canvas>
                        </div>
                    </div>

                    {/* ... other charts and table ... */}
                </div>
            </main>
        </div>
    );
};

export default AdminStatistics;
