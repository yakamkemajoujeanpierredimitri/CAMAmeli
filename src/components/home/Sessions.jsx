import { useEffect ,useState } from "react";
import { getAllFiles } from "../../service/file.service";
import Card from "../card";


const Sessions = () => {
    const [formations  , setFormations ] = useState([]);
    useEffect(()=>{n        fetchData();
    },[]);
    const fetchData = async()=>{
        const res = await getAllFiles();
        if(res.data){
            const filteredFormations = res.data.filter(item => item.category !== 'temoignage');
            setFormations(filteredFormations);
        }
    }

    return (
        <section className="py-16 sm:py-24 bg-gray-50 text-center">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto mb-8 sm:mb-16">
                    <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 sm:mb-5">
                        <span>Programs & Sessions</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">Our upcoming training sessions</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Check our calendar and register now for the programs that interest you.
                    </p>
                </div>
        
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-7xl mx-auto">
                    {formations.length > 0 ? formations.map((session) => <Card key={session._id} post={session} />) : (<div>No sessions available at the moment.</div>)}
                  
                </div>
            </div>
        </section>
    );
};

export default Sessions;
