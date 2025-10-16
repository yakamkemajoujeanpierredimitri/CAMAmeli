
import React from 'react';

const BlogSection = () => {
    return (
        <section className="blog-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Actualités & Blog</h2>
                    <p className="section-subtitle">Découvrez nos dernières publications et actualités</p>
                </div>
                
                <div className="blog-grid">
                    {/* Article 1 */}
                    <div className="blog-card">
                        <div className="blog-image">
                            <img src="https://images.unsplash.com/photo-1646579886135-068c73800308?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1631" alt="Formation logiciels" />
                        </div>
                        <div className="blog-content">
                            <span className="blog-category">Formation</span>
                            <h3>Les Nouveautés d'AutoCAD 2024</h3>
                            <div className="blog-meta">
                                <span><i className="far fa-calendar"></i> 15 Juin 2024</span>
                                <span><i className="far fa-user"></i> Admin</span>
                            </div>
                            <p>Découvrez les dernières fonctionnalités d'AutoCAD 2024 et comment elles peuvent améliorer votre productivité...</p>
                            <a href="blog.html" className="btn">Lire l'article</a>
                        </div>
                    </div>
                    
                    {/* Article 2 */}
                    <div className="blog-card">
                        <div className="blog-image">
                            <img src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Préparation concours" />
                        </div>
                        <div className="blog-content">
                            <span className="blog-category">Concours</span>
                            <h3>Stratégies de Réussite aux Concours</h3>
                            <div className="blog-meta">
                                <span><i className="far fa-calendar"></i> 28 Mai 2024</span>
                                <span><i className="far fa-user"></i> Admin</span>
                            </div>
                            <p>Des conseils pratiques et des méthodes éprouvées pour vous préparer efficacement aux concours d'entrée...</p>
                            <a href="blog.html" className="btn">Lire l'article</a>
                        </div>
                    </div>
                    
                    {/* Article 3 */}
                    <div className="blog-card">
                        <div className="blog-image">
                            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Étudiants" />
                        </div>
                        <div className="blog-content">
                            <span className="blog-category">Témoignages</span>
                            <h3>Parcours d'Excellence : Témoignage d'une Ancienne Étudiante</h3>
                            <div className="blog-meta">
                                <span><i className="far fa-calendar"></i> 10 Mai 2024</span>
                                <span><i className="far fa-user"></i> Admin</span>
                            </div>
                            <p>Découvrez le parcours inspirant de Marie K., qui a intégré une grande école après avoir suivi notre programme...</p>
                            <a href="blog.html" className="btn">Lire l'article</a>
                        </div>
                    </div>
                </div>
                
                <div className="blog-view-all">
                    <a href="blog.html" className="btn btn-secondary">Voir toutes les actualités</a>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
