
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProgrammesHero from '../components/programmes/ProgrammesHero';
import ProgrammesContent from '../components/programmes/ProgrammesContent';
import Sessions from '../components/home/Sessions';
import ActivitiesContent from '../components/activities/ActivitiesContent';

const Programmes = () => {
    return (
        <div>
            <Header />
            <ProgrammesHero />
            <ActivitiesContent Title='Programmes' />
            <ProgrammesContent />
            <Sessions />
            <Footer />
        </div>
    );
};

export default Programmes;
