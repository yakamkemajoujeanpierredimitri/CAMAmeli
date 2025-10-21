import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { createFile, getFileByCategory, updateFile } from '../../service/file.service';
import DynamicForm from '../../components/admin/DynamicForm';

const AdminEvenements = () => {
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        const result = await createFile(data, setProgress);
        if (result.error) {
            // Handle error
            console.error(result.error);
        } else {
            // Handle success
            console.log(result.data);
            setIsModalOpen(false);
            // Refresh the list of events
            const fetchResult = await getFileByCategory('event');
            if (!fetchResult.error) {
                setEvents(fetchResult.data);
            }
        }
    };

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
                                <h1 className="text-2xl font-bold text-shadow">Administration CAMA</h1>
                                <p className="text-sm opacity-90">Panneau de contrôle</p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300">
                                <i className="bi bi-box-arrow-right mr-2"></i>
                                Déconnexion
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 ">
                <div className="container mx-auto">
                    <ul className="flex justify-center p-2">
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin">
                                <i className="bi bi-speedometer2 mr-2"></i>
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin/formations">
                                <i className="bi bi-book mr-2"></i>
                                Formations
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" activeClassName="active bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md rounded-lg" to="/admin/evenements">
                                <i className="bi bi-calendar-event mr-2"></i>
                                Événements
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin/temoignages">
                                <i className="bi bi-chat-quote mr-2"></i>
                                Témoignages
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-6 py-4 font-semibold text-gray-600 hover:text-blue-600 transition duration-300" to="/admin/statistiques">
                                <i className="bi bi-graph-up mr-2"></i>
                                Statistiques
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">Gestion des Événements</h2>
                            <p className="text-gray-600 mt-1">Créez et gérez les conférences, workshops et événements CAMA</p>
                        </div>
                        <button onClick={() => setIsModalOpen(true)} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-0.5">
                            <i className="bi bi-plus-circle mr-2"></i>
                            Nouvel Événement
                        </button>
                    </div>

                    {/* Events Table */}
                    <div className="bg-white rounded-lg shadow-sm">
                        <div className="p-5 border-b border-gray-200">
                            <h5 className="text-lg font-semibold text-gray-800">
                                <i className="bi bi-table mr-2"></i>
                                Liste des Événements
                            </h5>
                        </div>
                        <div className="p-5">
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Événement</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Heure</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lieu</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participants</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                                            <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {events.map(event => (
                                            <tr key={event._id} className="hover:bg-gray-50 transition-colors duration-200">
                                                <td className="py-4 px-5">
                                                    <div className="font-semibold text-gray-800">{event.title}</div>
                                                </td>
                                                <td className="py-4 px-5">
                                                    <span className={`inline-flex items-center bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-semibold`}>
                                                        <i className="bi bi-mic mr-1"></i> {event.eventDetails.categoryDetail}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-5 text-sm text-gray-600">
                                                    <div><i className="bi bi-calendar-date mr-1"></i> {new Date(event.eventDetails.date).toLocaleDateString()}</div>
                                                </td>
                                                <td className="py-4 px-5 text-sm text-gray-600"><i className="bi bi-geo-alt mr-1"></i> {event.eventDetails.location}</td>
                                                <td className="py-4 px-5 text-sm font-semibold text-gray-800">{event.price} FCFA</td>
                                                <td className="py-4 px-5">
                                                    <div className="text-sm text-gray-600"><i className="bi bi-people mr-1"></i> {event.apply}</div>
                                                </td>
                                                <td className="py-4 px-5">
                                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${event.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                        <i className={`bi ${event.status === 'active' ? 'bi-check-circle' : 'bi-clock'} mr-1`}></i> {event.status}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-5">
                                                    <div className="flex items-center space-x-2">
                                                            <button
                                                                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                                                title="Modifier"
                                                                onClick={() => {
                                                                    // populate event into formData
                                                                    const ev = event;
                                                                    const fd = {
                                                                        title: ev.title || '',
                                                                        description: ev.description || '',
                                                                        categoryEvent: ev?.eventDetails?.categoryDetail || ev?.eventDetails?.categoryDetail || '',
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
                                                        <button className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200" title="Voir détails">
                                                            <i className="bi bi-eye text-lg"></i>
                                                        </button>
                                                        <button className="text-red-600 hover:text-red-800 transition-colors duration-200" title="Supprimer">
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
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Nouvel Événement</h3>
                                <div className="mt-2">
                                    <DynamicForm
                                        schema={(function(){
                                            const base = [
                                                { name: 'title', label: 'Titre', type: 'text', required: true },
                                                { name: 'description', label: 'Description', type: 'textarea', required: true },
                                                { name: 'price', label: 'Prix (FCFA)', type: 'number' },
                                                { name: 'location', label: 'Lieu', type: 'text', required: true },
                                                { name: 'date', label: 'Date', type: 'date', required: true },
                                                { name: 'startTime', label: 'Heure de début', type: 'time' },
                                                { name: 'endTime', label: 'Heure de fin', type: 'time' },
                                                { name: 'apply', label: 'Nombre de places', type: 'number', required: true },
                                                { name: 'status', label: 'Statut', type: 'select', options: [
                                                    { value: '', label: 'Sélectionner un statut' },
                                                    { value: 'active', label: 'Actif' },
                                                    { value: 'inactive', label: 'Inactif' },
                                                ]},
                                                { name: 'categoryEvent', label: "Catégorie de l'événement", type: 'select', options: [
                                                    { value: '', label: 'Sélectionner une catégorie' },
                                                    { value: 'software', label: 'Logiciel' },
                                                    { value: 'business', label: 'Business' },
                                                    { value: 'concours', label: 'Concours' },
                                                ]}
                                            ];
                                            if (!isEditing) {
                                                const fileField = { name: 'file', label: 'Fichier', type: 'file' };
                                                base.splice(3, 0, fileField); // insert after price
                                            }
                                            return base;
                                        })()}
                                        initialValues={formData}
                                        submitLabel={isEditing ? 'Mettre à jour' : 'Créer'}
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
                                            Annuler
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

export default AdminEvenements;