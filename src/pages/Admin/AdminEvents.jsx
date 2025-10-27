import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { createFile, getFileByCategory, updateFile } from '../../service/file.service';
import DynamicForm from '../../components/admin/DynamicForm';

const AdminEvents = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'event',
        price: '',
        file: null,
        location: '',
        date: '',
        apply: '',
        categoryEvent: '',
        startTime: '',
        endTime: '',
        status: '',
    });
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [progress, setProgress] = useState(0);

    const resetFormData = () => ({
        title: '',
        description: '',
        category: 'event',
        price: '',
        file: null,
        location: '',
        date: '',
        apply: '',
        categoryEvent: '',
        startTime: '',
        endTime: '',
        status: '',
    });

    const formatDate = (iso) => {
        if (!iso) return '';
        const d = new Date(iso);
        if (Number.isNaN(d.getTime())) return '';
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
    };

    const formatTime = (isoOrTime) => {
        if (!isoOrTime) return '';
        const d = new Date(isoOrTime);
        if (!Number.isNaN(d.getTime())) {
            const hh = String(d.getHours()).padStart(2, '0');
            const mm = String(d.getMinutes()).padStart(2, '0');
            return `${hh}:${mm}`;
        }
        return isoOrTime;
    };

    useEffect(() => {
        const fetchEvents = async () => {
            const result = await getFileByCategory('event');
            if (result.error) {
                console.error(result.error);
            } else {
                setEvents(result.data);
            }
        };
        fetchEvents();
    }, []);

   



    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 sm:p-6 shadow-md relative overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="text-3xl sm:text-4xl animate-spin-slow mr-3">
                                <i className="bi bi-gear-fill text-white"></i>
                            </div>
                            <div>
                                <h1 className="text-xl sm:text-2xl font-bold text-shadow">CAMA Administration</h1>
                                <p className="text-sm opacity-90">Control Panel</p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300">
                                <i className="bi bi-box-arrow-right sm:mr-2"></i>
                                <span className="hidden sm:inline">Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-40">
                <div className="container mx-auto">
                    <ul className="flex flex-wrap justify-center p-2">
                        <li className="nav-item">
                            <NavLink className="nav-link px-3 py-2 sm:px-6 sm:py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300 flex items-center" to="/admin">
                                <i className="bi bi-speedometer2 sm:mr-2"></i>
                                <span className="hidden sm:inline">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-3 py-2 sm:px-6 sm:py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300 flex items-center" to="/admin/trainings">
                                <i className="bi bi-book sm:mr-2"></i>
                                <span className="hidden sm:inline">Trainings</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-3 py-2 sm:px-6 sm:py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300 flex items-center" activeClassName="active bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md rounded-lg" to="/admin/events">
                                <i className="bi bi-calendar-event sm:mr-2"></i>
                                <span className="hidden sm:inline">Events</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-3 py-2 sm:px-6 sm:py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300 flex items-center" to="/admin/testimonials">
                                <i className="bi bi-chat-quote sm:mr-2"></i>
                                <span className="hidden sm:inline">Testimonials</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-3 py-2 sm:px-6 sm:py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300 flex items-center" to="/admin/statistics">
                                <i className="bi bi-graph-up sm:mr-2"></i>
                                <span className="hidden sm:inline">Statistics</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 p-4 sm:p-8">
                <div className="container mx-auto">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Event Management</h2>
                            <p className="text-gray-600 mt-1">Create and manage CAMA conferences, workshops, and events</p>
                        </div>
                        <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto mt-4 sm:mt-0 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-0.5">
                            <i className="bi bi-plus-circle sm:mr-2"></i>
                            <span className="hidden sm:inline">New Event</span>
                        </button>
                    </div>

                    {/* Events Table */}
                    <div className="bg-white rounded-lg shadow-sm">
                        <div className="p-4 sm:p-5 border-b border-gray-200">
                            <h5 className="text-lg font-semibold text-gray-800">
                                <i className="bi bi-table mr-2"></i>
                                List of Events
                            </h5>
                        </div>
                        <div className="p-4 sm:p-5">
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3 px-2 sm:px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                                            <th className="py-3 px-2 sm:px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                            <th className="py-3 px-2 sm:px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                                            <th className="py-3 px-2 sm:px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                            <th className="py-3 px-2 sm:px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                            <th className="py-3 px-2 sm:px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participants</th>
                                            <th className="py-3 px-2 sm:px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="py-3 px-2 sm:px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {events.map(event => (
                                            <tr key={event._id} className="hover:bg-gray-50 transition-colors duration-200">
                                                <td className="py-4 px-2 sm:px-5">
                                                    <div className="font-semibold text-gray-800">{event.filename}</div>
                                                </td>
                                                <td className="py-4 px-2 sm:px-5">
                                                    <span className={`inline-flex items-center bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold`}>
                                                        <i className="bi  mr-1"></i> {event.eventDetails.categoryEvent}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-2 sm:px-5 text-sm text-gray-600">
                                                    <div><i className="bi bi-calendar-date mr-1"></i> {new Date(event.eventDetails.date).toLocaleDateString()}</div>
                                                </td>
                                                <td className="py-4 px-2 sm:px-5 text-sm text-gray-600"><i className="bi bi-geo-alt mr-1"></i> {event.eventDetails.location}</td>
                                                <td className="py-4 px-2 sm:px-5 text-sm font-semibold text-gray-800">{event?.price>0 ? event.price + ' FCFA' : 'Free'}</td>
                                                <td className="py-4 px-2 sm:px-5">
                                                    <div className="text-sm text-gray-600"><i className="bi bi-people mr-1"></i> {event?.eventDetails?.apply === 0 ? 'Unlimited' : event.eventDetails?.apply}</div>
                                                </td>
                                                <td className="py-4 px-2 sm:px-5">
                                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${event.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                        <i className={`bi ${event.status === 'active' ? 'bi-check-circle' : 'bi-clock'} mr-1`}></i> {event.status}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-2 sm:px-5">
                                                    <div className="flex items-center space-x-2">
                                                            <button
                                                                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                                                title="Edit"
                                                                onClick={() => {
                                                                    // populate event into formData
                                                                    const ev = event;
                                                                    const fd = {
                                                                        title: ev.filename || '',
                                                                        category: 'event',
                                                                        description: ev.description || '',
                                                                        categoryEvent: ev?.eventDetails?.categoryEvent || ev?.eventDetails?.categoryEvent || '',
                                                                        price: ev.price || '',
                                                                        file: null,
                                                                        location: ev?.eventDetails?.location || '',
                                                                        date: formatDate(ev?.eventDetails?.date),
                                                                        apply: ev?.eventDetails?.apply || '',
                                                                        startTime: formatTime(ev?.eventDetails?.startTime),
                                                                        endTime: formatTime(ev?.eventDetails?.endTime),
                                                                        status: ev?.status || '',
                                                                    };
                                                                    setFormData(fd);
                                                                    setSelectedEvent(ev);
                                                                    setIsEditing(true);
                                                                    setIsModalOpen(true);
                                                                }}
                                                            >
                                                                <i className="bi bi-pencil text-lg"></i>
                                                            </button>
                                                        <button className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200" title="View details">
                                                            <i className="bi bi-eye text-lg"></i>
                                                        </button>
                                                        <button className="text-red-600 hover:text-red-800 transition-colors duration-200" title="Delete">
                                                            <i className="bi bi-trash text-lg"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
{ isModalOpen && <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>}
            {isModalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">New Event</h3>
                                <div className="mt-2">
                                    <DynamicForm
                                        schema={(function(){
                                            const base = [
                                                { name: 'title', label: 'Title', type: 'text', required: true },
                                                { name: 'description', label: 'Description', type: 'textarea', required: true },
                                                { name: 'price', label: 'Price (FCFA)', type: 'number' },
                                                { name: 'location', label: 'Location', type: 'text', required: true },
                                                { name: 'date', label: 'Date', type: 'date', required: true },
                                                { name: 'startTime', label: 'Start Time', type: 'time' },
                                                { name: 'endTime', label: 'End Time', type: 'time' },
                                                { name: 'apply', label: 'Number of Seats', type: 'number', required: true },
                                                { name: 'status', label: 'Status', type: 'select', options: [
                                                    { value: '', label: 'Select a status' },
                                                    { value: 'active', label: 'Active' },
                                                    { value: 'inactive', label: 'Inactive' },
                                                ]},
                                                { name: 'categoryEvent', label: "Event Category", type: 'select', options: [
                                                    { value: '', label: 'Select a category' },
                                                    { value: 'software', label: 'Software' },
                                                    { value: 'business', label: 'Business' },
                                                    { value: 'concours', label: 'Competition' },
                                                ]}
                                            ];
                                            if (!isEditing) {
                                                const fileField = { name: 'file', label: 'File', type: 'file' };
                                                base.splice(3, 0, fileField); // insert after price
                                            }
                                            return base;
                                        })()}
                                        initialValues={formData}
                                        submitLabel={isEditing ? 'Update' : 'Create'}
                                        onSubmit={async (formDataFd) => {
                                            if (isEditing && selectedEvent) {
                                                const result = await updateFile(selectedEvent._id, formDataFd);
                                                if (result?.error) {
                                                    console.error(result.error);
                                                } else {
                                                    setIsModalOpen(false);
                                                    setIsEditing(false);
                                                    setSelectedEvent(null);
                                                    setFormData(resetFormData());
                                                    const fetchResult = await getFileByCategory('event');
                                                    if (!fetchResult.error) setEvents(fetchResult.data);
                                                }
                                            } else {
                                                const result = await createFile(formDataFd, setProgress);
                                                if (result?.error) {
                                                    console.error(result.error);
                                                    alert(result.error);
                                                } else {
                                                    setIsModalOpen(false);
                                                    const fetchResult = await getFileByCategory('event');
                                                    if (!fetchResult.error) setEvents(fetchResult.data);
                                                }
                                            }
                                        }}
                                    />
                                    {progress > 0 && <div className="w-full bg-gray-200 rounded-full h-2.5"><div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div></div>}
                                    <div className="mt-4 text-right">
                                        <button type="button" onClick={() => setIsModalOpen(false)} className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:text-sm">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminEvents;