
import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ActivitiesHero from '../components/activities/ActivitiesHero';
import ActivitiesContent from '../components/activities/ActivitiesContent';
import CategorySection from '../components/activities/CategorySection';
import { useState } from 'react';
import { getFileByCategory } from '../service/file.service';
const Activites = () => {
    const [formations ,setFormations] = useState([]);
    const [concours ,setConcours] = useState([]);
    const [conferences ,setConferences] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () => {
        const [formationsRes, concoursRes, conferencesRes] = await Promise.all([
            getFileByCategory('formation'),
            getFileByCategory('concours'),
            getFileByCategory('event'),]);
        if(formationsRes.data){
            setFormations(formationsRes.data[formationsRes.data.length - 1]);
        }
        if(concoursRes.data){
            setConcours(concoursRes.data[concoursRes.data.length - 1]);
        }
        if(conferencesRes.data){
            setConferences(conferencesRes.data[conferencesRes.data.length - 1]);
        }
    }


    return (
        <div>
            <Header />
            <ActivitiesHero />
            <ActivitiesContent />
            <CategorySection Accurment={formations} />
            <CategorySection Accurment={concours} />
            <CategorySection Accurment={conferences} />
            <Footer />
        </div>
    );
};

export default Activites;
