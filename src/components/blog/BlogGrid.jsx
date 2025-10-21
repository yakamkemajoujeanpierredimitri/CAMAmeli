
import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogGrid = () => {
    const posts = [
        {
            category: "Formation",
            title: "Les Nouveautés d'AutoCAD 2024",
            date: "15 Juin 2024",
            author: "Admin",
            excerpt: "Découvrez les dernières fonctionnalités d'AutoCAD 2024 et comment elles peuvent améliorer votre productivité et vos réalisations professionnelles.",
            image: "https://images.unsplash.com/photo-1646579886135-068c73800308?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1631"
        },
        {
            category: "Concours",
            title: "Stratégies de Réussite aux Concours",
            date: "28 Mai 2024",
            author: "Admin",
            excerpt: "Des conseils pratiques et des méthodes éprouvées pour vous préparer efficacement aux concours d'entrée dans les grandes écoles.",
            image: "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            category: "Témoignages",
            title: "Parcours d'Excellence : Témoignage d'une Ancienne Étudiante",
            date: "10 Mai 2024",
            author: "Admin",
            excerpt: "Découvrez le parcours inspirant de Marie K., qui a intégré une grande école après avoir suivi notre programme de préparation aux concours.",
            image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            category: "Technologie",
            title: "Le BIM et l'avenir de l'Architecture",
            date: "30 Avril 2024",
            author: "Admin",
            excerpt: "Exploration de l'impact du Building Information Modeling (BIM) sur la conception architecturale et les processus de construction.",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            category: "Carrière",
            title: "Comment Se Préparer au Marché du Travail",
            date: "18 Avril 2024",
            author: "Admin",
            excerpt: "Des conseils pratiques pour bien préparer votre entrée sur le marché du travail et vous démarquer des autres candidats.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            category: "Éducation",
            title: "L'Importance de la Formation Continue",
            date: "5 Avril 2024",
            author: "Admin",
            excerpt: "Pourquoi la formation continue est essentielle dans un monde en constante évolution technologique et professionnelle.",
            image: "https://plus.unsplash.com/premium_photo-1661407402465-e10d42979714?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                                <NavLink to="blog-detail.html" className="inline-block py-2 px-5 bg-blue-500 text-white no-underline rounded-md font-semibold transition-colors duration-300 hover:bg-blue-700">Lire l'article</NavLink>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="flex justify-center gap-2.5 mt-10">
                    <button className="py-2 px-4 bg-gray-50 border border-gray-300 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-500 hover:text-white">1</button>
                    <button className="py-2 px-4 bg-gray-50 border border-gray-300 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-500 hover:text-white">2</button>
                    <button className="py-2 px-4 bg-gray-50 border border-gray-300 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-500 hover:text-white">3</button>
                    <button className="py-2 px-4 bg-gray-50 border border-gray-300 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-500 hover:text-white"><i className="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </section>
    );
};

export default BlogGrid;
