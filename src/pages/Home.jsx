
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Activities from '../components/home/Activities';
import Preparation from '../components/home/Preparation';
import Events from '../components/home/Events';
import Formation from '../components/home/Formation';
import Sessions from '../components/home/Sessions';
import Testimonials from '../components/home/Testimonials';
import Objectives from '../components/home/Objectives';
import Team from '../components/home/Team';
import Localisation from '../components/home/Localisation';
import BlogSection from '../components/home/BlogSection';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <About />
            <Activities />
            <Preparation />
            <Events />
            <Formation />
            <Sessions />
            <Testimonials />
            <Objectives />
            <Team />
            <Localisation />
           
            <Footer />
        </div>
    );
};

export default Home;
