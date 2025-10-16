
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProgrammesHero from '../components/programmes/ProgrammesHero';
import ProgrammesGrid from '../components/programmes/ProgrammesGrid';
import ProgrammesContent from '../components/programmes/ProgrammesContent';
import Sessions from '../components/home/Sessions';

const Programmes = () => {
    return (
        <div>
            <Header />
            <ProgrammesHero />
            <ProgrammesGrid />
            <ProgrammesContent />
            <Sessions />
            <Footer />
        </div>
    );
};

export default Programmes;
