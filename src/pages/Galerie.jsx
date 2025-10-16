
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryContent from '../components/gallery/GalleryContent';
import GalleryDescription from '../components/gallery/GalleryDescription';

const Galerie = () => {
    return (
        <div>
            <Header />
            <GalleryHero />
            <GalleryContent />
            <GalleryDescription />
            <Footer />
        </div>
    );
};

export default Galerie;
