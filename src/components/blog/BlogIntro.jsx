
import React from 'react';

const BlogIntro = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-4xl text-center mb-12 text-gray-800 relative">Dernières Actualités<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div></h2>
                    <p className="text-gray-600 text-lg leading-relaxed">Explorez nos articles pour découvrir les dernières tendances en matière de formation professionnelle, les conseils pour réussir vos concours, les nouveautés dans les logiciels professionnels et bien plus encore. Notre blog est une ressource précieuse pour tous les apprenants et professionnels en quête de développement.</p>
                </div>
            </div>
        </section>
    );
};

export default BlogIntro;
