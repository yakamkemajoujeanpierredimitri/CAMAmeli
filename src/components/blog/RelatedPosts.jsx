
import React from 'react';

const RelatedPosts = () => {
    const posts = [
        {
            category: "Concours",
            title: "Stratégies de Réussite aux Concours",
            date: "28 Mai 2024",
            author: "Admin",
            excerpt: "Des conseils pratiques et des méthodes éprouvées pour vous préparer efficacement aux concours d'entrée...",
            image: "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            category: "Témoignages",
            title: "Parcours d'Excellence : Témoignage d'une Ancienne Étudiante",
            date: "10 Mai 2024",
            author: "Admin",
            excerpt: "Découvrez le parcours inspirant de Marie K., qui a intégré une grande école après avoir suivi notre programme...",
            image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            category: "Technologie",
            title: "Le BIM et l'avenir de l'Architecture",
            date: "30 Avril 2024",
            author: "Admin",
            excerpt: "Exploration de l'impact du Building Information Modeling (BIM) sur la conception architecturale...",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section className="my-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-center mb-12 text-gray-800 relative">Articles similaires<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out border border-gray-200 hover:-translate-y-2 hover:shadow-xl" key={index}>
                            <div className="h-52 overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <span className="inline-block py-1 px-4 bg-blue-500 text-white rounded-full text-xs mb-4">{post.category}</span>
                                <h3 className="text-xl font-bold mb-2.5 text-gray-800">{post.title}</h3>
                                <div className="flex gap-5 mb-4 text-gray-600 text-sm">
                                    <span><i className="far fa-calendar"></i> {post.date}</span>
                                    <span><i className="far fa-user"></i> {post.author}</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-5">{post.excerpt}</p>
                                <a href="#" className="inline-block py-2 px-5 bg-blue-500 text-white no-underline rounded-md font-semibold transition-colors duration-300 hover:bg-blue-700">Lire l'article</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedPosts;
