
import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogPost = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <article className="max-w-3xl mx-auto">
                    <header className="text-center mb-12">
                        <span className="inline-block py-1 px-4 bg-blue-500 text-white rounded-full text-sm mb-5">Formation</span>
                        <h1 className="text-4xl font-bold mb-5 text-gray-800">Les Nouveautés d'AutoCAD 2024 : Ce qui change pour les professionnels</h1>
                        <div className="flex justify-center gap-8 mb-8 text-gray-600 text-base">
                            <span><i className="far fa-calendar"></i> 15 Juin 2024</span>
                            <span><i className="far fa-user"></i> Admin</span>
                            <span><i className="far fa-clock"></i> 8 minutes de lecture</span>
                        </div>
                    </header>
                    
                    <div className="w-full h-96 rounded-lg overflow-hidden mb-10 shadow-xl">
                        <img src="https://images.unsplash.com/photo-1646579886135-068c73800308?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1631" alt="Formation AutoCAD 2024" className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="text-gray-700 text-lg leading-relaxed">
                        <p className="mb-6">La version 2024 d'AutoCAD apporte son lot de nouveautés et d'améliorations qui vont considérablement transformer l'expérience utilisateur des professionnels de l'architecture, de l'ingénierie et de la construction. Ces mises à jour visent à améliorer la productivité, la collaboration et la précision dans les projets de conception.</p>
                        
                        <h2 className="text-3xl my-10 text-gray-800">Nouvelles fonctionnalités de dessin intelligent</h2>
                        
                        <p className="mb-6">L'une des avancées majeures d'AutoCAD 2024 est l'amélioration de ses capacités de dessin intelligent. Le logiciel intègre désormais des algorithmes d'apprentissage automatique qui anticipent les intentions de l'utilisateur et suggèrent automatiquement les outils et commandes les plus pertinents selon le contexte de travail.</p>
                        
                        <blockquote className="border-l-4 border-blue-500 p-5 my-8 bg-gray-50 italic text-gray-600">
                            "Cette fonctionnalité d'anticipation a réduit de 30% le temps nécessaire pour exécuter des tâches répétitives dans nos projets d'architecture."
                            <cite className="block mt-4">- Marie Kouamé, Directrice Technique CAMA</cite>
                        </blockquote>
                        
                        <p className="mb-6">De plus, le système de contraintes géométriques a été revu pour offrir une précision accrue dans les dessins complexes. Les utilisateurs peuvent désormais définir des relations paramétriques plus sophistiquées entre les objets, facilitant la création de plans modifiables et adaptables.</p>
                        
                        <h3 className="text-2xl my-8 text-gray-800">Amélioration de l'interface utilisateur</h3>
                        
                        <p className="mb-6">L'interface d'AutoCAD 2024 bénéficie d'une refonte complète axée sur l'ergonomie et l'accessibilité. La nouvelle palette d'outils flottants peut être personnalisée selon les préférences de chaque utilisateur et s'adapte automatiquement à la taille de l'écran.</p>
                        
                        <ul className="my-5 ml-8 list-disc">
                            <li className="mb-2.5">Barre d'outils personnalisable avec accès rapide aux commandes fréquentes</li>
                            <li className="mb-2.5">Nouveau thème sombre optimisé pour réduire la fatigue oculaire</li>
                            <li className="mb-2.5">Palette de propriétés améliorée avec prévisualisation en temps réel</li>
                            <li className="mb-2.5">Navigation intuitive par gestes tactile sur les écrans compatibles</li>
                        </ul>
                        
                        <h2 className="text-3xl my-10 text-gray-800">Collaboration renforcée en cloud</h2>
                        
                        <p className="mb-6">AutoCAD 2024 introduit des fonctionnalités de collaboration en temps réel qui transforment la façon dont les équipes travaillent ensemble sur les projets. Plusieurs utilisateurs peuvent désormais modifier simultanément le même dessin avec un système de verrouillage intelligent qui prévient les conflits.</p>
                        
                        <ol className="my-5 ml-8 list-decimal">
                            <li className="mb-2.5">Synchronisation instantanée des modifications entre tous les collaborateurs</li>
                            <li className="mb-2.5">Système de commentaires intégré avec notifications en temps réel</li>
                            <li className="mb-2.5">Historique des versions avec possibilité de restauration complète</li>
                            <li className="mb-2.5">Comparaison visuelle des différences entre versions</li>
                        </ol>
                        
                        <p className="mb-6">Cette évolution marque un tournant majeur dans l'industrie de la CAO, où la collaboration à distance devient de plus en plus essentielle. Les équipes distribuées géographiquement peuvent maintenant travailler avec la même efficacité que s'ils étaient dans le même bureau.</p>
                        
                        <h3 className="text-2xl my-8 text-gray-800">Sécurité et gestion des données</h3>
                        
                        <p className="mb-6">La sécurité des données sensibles de conception a été renforcée avec de nouveaux protocoles de chiffrement et d'authentification. AutoCAD 2024 inclut désormais une gestion des permissions granulaire qui permet de contrôler précisément qui peut accéder, modifier ou exporter chaque élément d'un projet.</p>
                        
                        <p className="mb-6">Les fonctionnalités de watermarking automatique protègent les documents contre l'utilisation non autorisée, tandis que les systèmes de traçabilité complète des modifications assurent une conformité renforcée avec les normes industrielles.</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2.5 my-10">
                        <span className="py-1 px-4 bg-gray-200 rounded-full text-sm text-gray-700">AutoCAD</span>
                        <span className="py-1 px-4 bg-gray-200 rounded-full text-sm text-gray-700">Formation</span>
                        <span className="py-1 px-4 bg-gray-200 rounded-full text-sm text-gray-700">Architecture</span>
                        <span className="py-1 px-4 bg-gray-200 rounded-full text-sm text-gray-700">Ingénierie</span>
                        <span className="py-1 px-4 bg-gray-200 rounded-full text-sm text-gray-700">CAO</span>
                    </div>
                    
                    <div className="flex justify-between my-16 py-8 border-t border-b border-gray-200">
                        <NavLink to="/programmes?concours" className="flex items-center gap-4 text-blue-500 font-semibold transition-colors duration-300 hover:text-blue-700">
                            <i className="fas fa-arrow-left text-2xl"></i>
                            <div>
                                <span>Article précédent</span>
                                <p>Stratégies de Réussite aux Concours</p>
                            </div>
                        </NavLink>
                        <NavLink to="/programmes?temoignages" className="flex items-center gap-4 text-blue-500 font-semibold transition-colors duration-300 hover:text-blue-700">
                            <div>
                                <span>Article suivant</span>
                                <p>Parcours d'Excellence : Témoignage d'une Ancienne Étudiante</p>
                            </div>
                            <i className="fas fa-arrow-right text-2xl"></i>
                        </NavLink>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-8 my-12 flex gap-5 items-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Admin CAMA" className="w-full h-full object-cover" />
                        </div>
                        <div className="author-info">
                            <h4 className="text-xl font-bold mb-2.5 text-gray-800">Admin CAMA</h4>
                            <p className="text-blue-500 font-semibold mb-2.5">Rédacteur en chef</p>
                            <p className="text-gray-600 leading-relaxed">Spécialiste en formation logicielle et technologies de l'information, je partage avec vous les dernières avancées technologiques et les meilleures pratiques pédagogiques dans le domaine de la CAO et de la conception assistée par ordinateur.</p>
                        </div>
                    </div>
                    
                    <div className="my-20">
                        <h2 className="text-3xl text-center mb-12 text-gray-800 relative">Commentaires (3)<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div></h2>
                        
                        <div className="mt-12">
                            <div className="py-6 border-b border-gray-200">
                                <div className="flex gap-4 mb-4 items-center">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Jean K." className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800">Jean K.</div>
                                        <div className="text-gray-600 text-sm">16 Juin 2024 à 09:30</div>
                                    </div>
                                </div>
                                <div className="text-gray-700 leading-relaxed">
                                    <p>Excellent article ! Les explications sur les nouvelles fonctionnalités d'AutoCAD 2024 sont très claires. J'ai hâte d'essayer ces nouveautés dans mes projets. Merci pour ce partage.</p>
                                </div>
                            </div>
                            
                            <div className="py-6 border-b border-gray-200">
                                <div className="flex gap-4 mb-4 items-center">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Marie T." className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800">Marie T.</div>
                                        <div className="text-gray-600 text-sm">16 Juin 2024 à 14:15</div>
                                    </div>
                                </div>
                                <div className="text-gray-700 leading-relaxed">
                                    <p>J'apprécie particulièrement la section sur la collaboration en cloud. Cela répond exactement aux besoins de mon équipe de travail à distance. Est-ce que CAMA propose des formations spécifiques sur ces nouvelles fonctionnalités ?</p>
                                </div>
                            </div>
                            
                            <div className="py-6 border-b border-gray-200">
                                <div className="flex gap-4 mb-4 items-center">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Ahmed S." className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800">Ahmed S.</div>
                                        <div className="text-gray-600 text-sm">17 Juin 2024 à 11:45</div>
                                    </div>
                                </div>
                                <div className="text-gray-700 leading-relaxed">
                                    <p>Très bon article technique. La comparaison avec les versions précédentes est particulièrement utile. Pouvez-vous faire un article similaire pour Revit dans les prochaines semaines ?</p>
                                </div>
                            </div>
                        
                            </div>

                        <div className="bg-gray-50 p-10 rounded-lg my-12">
                            <h3 className="text-2xl font-bold mb-6">Laisser un commentaire</h3>
                            <form>
                                <div className="mb-5">
                                    <label htmlFor="name" className="block mb-2 font-semibold text-gray-800">Nom *</label>
                                    <input type="text" id="name" required className="w-full py-3 px-4 border border-gray-300 rounded-md text-base transition-colors duration-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 font-semibold text-gray-800">Email *</label>
                                    <input type="email" id="email" required className="w-full py-3 px-4 border border-gray-300 rounded-md text-base transition-colors duration-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="comment" className="block mb-2 font-semibold text-gray-800">Commentaire *</label>
                                    <textarea id="comment" required className="w-full py-3 px-4 border border-gray-300 rounded-md text-base transition-colors duration-300 focus:outline-none focus:border-blue-500 min-h-[150px] resize-y"></textarea>
                                </div>
                                <button type="submit" className="inline-block py-3 px-6 bg-blue-500 text-white no-underline rounded-md font-semibold transition-colors duration-300 hover:bg-blue-700">Publier le commentaire</button>
                            </form>
                        </div>
                        
                    </div>
                
                </article>
            </div>
        </section>
    );
};

export default BlogPost;
