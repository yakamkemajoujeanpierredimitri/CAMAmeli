import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faExclamationCircle, faClock, faMapMarkerAlt, faUsers, faCalendar, faCheckCircle, faTimesCircle, faChartLine, faCube } from "@fortawesome/free-solid-svg-icons";
import { userApply } from "../service/user.service";
import { useAuth } from "../context/authContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Card = ({ post }) => {
    // move hooks to top-level of component
    const { state } = useAuth();
    const initialRegistered = state?.events?.some(event => event.file === post._id) ?? false;
    const [registered, setRegistered] = useState(initialRegistered);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    // keep registered state in sync with global state.events
    useEffect(() => {
        const isReg = state?.events?.some(event => event.file === post._id) ?? false;
        setRegistered(isReg);
    }, [state?.events]);

    const handleRegister = async () => {
        try {
            if(!state?.user){
                navigate('/signin');
                return;
            }
            setLoading(true);
            const res = await userApply({ filleId: post._id });
            if (res.error) {
                console.error('Failed to register for the event:', res.error);
                alert('An error has occurred');
            } else {
                alert('Successfully registered for the event');
                setRegistered(true);
            }
        } catch (err) {
            console.error(err);
            alert('An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
            <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center gap-2 font-semibold text-blue-500">
                    <FontAwesomeIcon icon={post?.eventDetails?.categoryEvent === "software" ? faCube : post?.eventDetails?.categoryEvent === "concours" ? faGraduationCap : faChartLine} />
                    <span>{post?.eventDetails?.categoryEvent}</span>
                </div>
                <div className={`flex items-center gap-1.5 text-xs font-semibold py-1 px-3 rounded-full ${post?.eventDetails?.apply && post?.status === "active" ? "bg-yellow-100 text-yellow-800" : post?.eventDetails?.apply && post?.status === "inactive" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}>
                    <FontAwesomeIcon icon={(post.eventDetails?.apply && post?.status === "active") ? faExclamationCircle : (post.eventDetails?.apply && post?.status === "inactive") ? faTimesCircle : faCheckCircle} />
                    <span>{(post.eventDetails?.apply && post?.status === "active") ? "Apply" : (post.eventDetails?.apply && post?.status === "inactive") ? "Inactive" : "Active"}</span>
                </div>
            </div>
            <div className="p-8 text-left">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                    {post.description}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6 text-sm text-gray-700">
                    <div className="flex items-center gap-2"><FontAwesomeIcon icon={faCalendar} /><span>{post?.eventDetails?.date ? new Date(post?.eventDetails?.date).toLocaleDateString() : "Date and time not specified"}</span></div>
                    <div className="flex items-center gap-2"><FontAwesomeIcon icon={faMapMarkerAlt} /><span>{post?.eventDetails?.location}</span></div>
                    <div className="flex items-center gap-2"><FontAwesomeIcon icon={faUsers} /><span>{post.eventDetails?.apply ? ` ${post.eventDetails?.apply} spot remaining` : "open to all"}</span></div>
                    <div className="flex items-center gap-2"><FontAwesomeIcon icon={faClock} /><span>{post.eventDetails?.startTime ? `${post?.eventDetails?.startTime} - ${post?.eventDetails?.endTime}` : "Start and end time not specified"}</span></div>
                </div>
            </div>
            <div className="flex justify-between items-center p-6 bg-gray-50 border-t border-gray-200">
                <div className="text-left">
                    <span className="block text-xl font-bold text-blue-500 mb-1">{post?.eventDetails?.price ? `${post?.eventDetails?.price} FCFA` : "Free"}</span>
                </div>
               {registered ? (
                    <span className="text-green-500">Registered</span>
                ) : (
                    <button
                        onClick={() => handleRegister()}
                        disabled={loading}
                        className={`py-3 cursor-pointer px-6 rounded-md no-underline font-semibold transition-all duration-300 ease-in-out ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} text-white`}
                    >
                        {loading ? 'Registering...' : 'Register now'}
                    </button>
                )}
            </div>
        </div>)


}
export default Card;