import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faExclamationCircle, faClock, faMapMarkerAlt, faUsers, faCalendar,  faCheckCircle ,faTimesCircle, faChartLine, faCube} from "@fortawesome/free-solid-svg-icons";
const Card = ({post})=>{
   
    return (
           <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                                <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
                                    <div className="flex items-center gap-2 font-semibold text-blue-500">
                                        <FontAwesomeIcon icon={post?.eventDetails?.categoryEvent === "software" ? faCube :  post?.eventDetails?.categoryEvent === "concours" ? faGraduationCap : faChartLine} />
                                        <span>{post?.eventDetails?.categoryEvent}</span>
                                    </div>
                                    <div className={`flex items-center gap-1.5 text-xs font-semibold py-1 px-3 rounded-full ${post?.eventDetails?.apply && post?.status === "active" ? "bg-yellow-100 text-yellow-800" : post?.eventDetails?.apply && post?.status === "inactive" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}>
                                        <FontAwesomeIcon icon={ (post.eventDetails?.apply && post?.status === "active") ? faExclamationCircle : (post.eventDetails?.apply && post?.status === "inactive") ? faTimesCircle : faCheckCircle} />
                                        <span>{ (post.eventDetails?.apply && post?.status === "active") ? "Apply" : (post.eventDetails?.apply && post?.status === "inactive") ? "Inactive" : "Active"}</span>
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
                                    <a href="#" className="py-3 px-6 rounded-md no-underline font-semibold transition-all duration-300 ease-in-out bg-blue-500 text-white hover:bg-blue-700">Register now</a>
                                </div>
                            </div>)
                
    
}
export default Card;