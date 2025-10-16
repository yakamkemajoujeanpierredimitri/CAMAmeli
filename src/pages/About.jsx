
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AboutHero from '../components/about/AboutHero';
import AboutContent from '../components/about/AboutContent';
import StatsSection from '../components/about/StatsSection';

const About = () => {
    return (
        <div>
            <Header />
            <AboutHero />
            <AboutContent />
            <StatsSection />
            <Footer />
        </div>
    );
};

export default About;
