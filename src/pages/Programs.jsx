
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProgramsHero from '../components/programs/ProgramsHero';
import Sessions from '../components/home/Sessions';
import ActivitiesContent from '../components/activities/ActivitiesContent';

const Programs = () => {
    return (
        <div>
            <Header />
            <ProgramsHero />
            <ActivitiesContent Title='Programs' />
            <Sessions />
            <Footer />
        </div>
    );
};

export default Programs;
