
import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogPost = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <article className="max-w-3xl mx-auto">
                    <header className="text-center mb-12">
                        <span className="inline-block py-1 px-4 bg-blue-500 text-white rounded-full text-sm mb-5">Training</span>
                        <h1 className="text-4xl font-bold mb-5 text-gray-800">What's New in AutoCAD 2024: What's Changing for Professionals</h1>
                        <div className="flex justify-center gap-8 mb-8 text-gray-600 text-base">
                            <span><i className="far fa-calendar"></i> June 15, 2024</span>
                            <span><i className="far fa-user"></i> Admin</span>
                            <span><i className="far fa-clock"></i> 8-minute read</span>
                        </div>
                    </header>
                    
                    <div className="w-full h-96 rounded-lg overflow-hidden mb-10 shadow-xl">
                        <img src="https://images.unsplash.com/photo-1646579886135-068c73800308?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1631" alt="AutoCAD 2024 Training" className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="text-gray-700 text-lg leading-relaxed">
                        <p className="mb-6">The 2024 version of AutoCAD brings its share of new features and improvements that will significantly transform the user experience for professionals in architecture, engineering, and construction. These updates aim to improve productivity, collaboration, and accuracy in design projects.</p>
                        
                        <h2 className="text-3xl my-10 text-gray-800">New intelligent drawing features</h2>
                        
                        <p className="mb-6">One of the major advances in AutoCAD 2024 is the improvement of its intelligent drawing capabilities. The software now incorporates machine learning algorithms that anticipate the user's intentions and automatically suggest the most relevant tools and commands depending on the work context.</p>
                        
                        <blockquote className="border-l-4 border-blue-500 p-5 my-8 bg-gray-50 italic text-gray-600">
                            "This predictive feature has reduced the time required to perform repetitive tasks in our architectural projects by 30%."
                            <cite className="block mt-4">- Marie Kouamé, CAMA Technical Director</cite>
                        </blockquote>
                        
                        <p className="mb-6">In addition, the geometric constraint system has been revised to offer increased precision in complex drawings. Users can now define more sophisticated parametric relationships between objects, making it easier to create editable and adaptable plans.</p>
                        
                        <h3 className="text-2xl my-8 text-gray-800">User Interface Improvement</h3>
                        
                        <p className="mb-6">The AutoCAD 2024 interface has been completely redesigned with a focus on ergonomics and accessibility. The new floating tool palette can be customized to each user's preferences and automatically adapts to the screen size.</p>
                        
                        <ul className="my-5 ml-8 list-disc">
                            <li className="mb-2.5">Customizable toolbar with quick access to frequently used commands</li>
                            <li className="mb-2.5">New dark theme optimized to reduce eye strain</li>
                            <li className="mb-2.5">Improved properties palette with real-time preview</li>
                            <li className="mb-2.5">Intuitive touch gesture navigation on compatible screens</li>
                        </ul>
                        
                        <h2 className="text-3xl my-10 text-gray-800">Enhanced cloud collaboration</h2>
                        
                        <p className="mb-6">AutoCAD 2024 introduces real-time collaboration features that transform the way teams work together on projects. Multiple users can now simultaneously edit the same drawing with an intelligent locking system that prevents conflicts.</p>
                        
                        <ol className="my-5 ml-8 list-decimal">
                            <li className="mb-2.5">Instant synchronization of changes between all collaborators</li>
                            <li className="mb-2.5">Integrated commenting system with real-time notifications</li>
                            <li className="mb-2.5">Version history with full restore capability</li>
                            <li className="mb-2.5">Visual comparison of differences between versions</li>
                        </ol>
                        
                        <p className="mb-6">This evolution marks a major turning point in the CAD industry, where remote collaboration is becoming increasingly essential. Geographically distributed teams can now work with the same efficiency as if they were in the same office.</p>
                        
                        <h3 className="text-2xl my-8 text-gray-800">Security and data management</h3>
                        
                        <p className="mb-6">The security of sensitive design data has been strengthened with new encryption and authentication protocols. AutoCAD 2024 now includes granular permission management that allows precise control over who can access, modify, or export each element of a project.</p>
                        
                        <p className="mb-6">Automatic watermarking features protect documents against unauthorized use, while complete change traceability systems ensure enhanced compliance with industry standards.</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2.5 my-10">
                        <span className="py-1 px-4 bg-gray-200 rounded-full text-sm text-gray-700">AutoCAD</span>
                        <span className="py-1 px-4 bg-gray-200 rounded-full text-sm text-gray-700">Training</span>
                        <span className="py-1 px-4 bg-gray-200 rounded-full text-sm text-gray-700">Architecture</span>
                        <span className="py-1 px-4 bg-gray-200 rounded-full text-sm text-gray-700">Engineering</span>
                        <span className="py-1 px-4 bg-gray-200 rounded-full text-sm text-gray-700">CAD</span>
                    </div>
                    
                    <div className="flex justify-between my-16 py-8 border-t border-b border-gray-200">
                        <NavLink to="/programmes?concours" className="flex items-center gap-4 text-blue-500 font-semibold transition-colors duration-300 hover:text-blue-700">
                            <i className="fas fa-arrow-left text-2xl"></i>
                            <div>
                                <span>Previous Article</span>
                                <p>Success Strategies for Competitions</p>
                            </div>
                        </NavLink>
                        <NavLink to="/programmes?temoignages" className="flex items-center gap-4 text-blue-500 font-semibold transition-colors duration-300 hover:text-blue-700">
                            <div>
                                <span>Next Article</span>
                                <p>Path to Excellence: Testimonial from a Former Student</p>
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
                            <p className="text-blue-500 font-semibold mb-2.5">Editor-in-chief</p>
                            <p className="text-gray-600 leading-relaxed">Specialist in software training and information technology, I share with you the latest technological advances and best teaching practices in the field of CAD and computer-aided design.</p>
                        </div>
                    </div>
                    
                    <div className="my-20">
                        <h2 className="text-3xl text-center mb-12 text-gray-800 relative">Comments (3)<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div></h2>
                        
                        <div className="mt-12">
                            <div className="py-6 border-b border-gray-200">
                                <div className="flex gap-4 mb-4 items-center">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Jean K." className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800">Jean K.</div>
                                        <div className="text-gray-600 text-sm">June 16, 2024 at 09:30</div>
                                    </div>
                                </div>
                                <div className="text-gray-700 leading-relaxed">
                                    <p>Excellent article! The explanations of the new features in AutoCAD 2024 are very clear. I can't wait to try these new features in my projects. Thank you for sharing.</p>
                                </div>
                            </div>
                            
                            <div className="py-6 border-b border-gray-200">
                                <div className="flex gap-4 mb-4 items-center">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Marie T." className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800">Marie T.</div>
                                        <div className="text-gray-600 text-sm">June 16, 2024 at 14:15</div>
                                    </div>
                                </div>
                                <div className="text-gray-700 leading-relaxed">
                                    <p>I particularly appreciate the section on cloud collaboration. This is exactly what my remote team needs. Does CAMA offer specific training on these new features?</p>
                                </div>
                            </div>
                            
                            <div className="py-6 border-b border-gray-200">
                                <div className="flex gap-4 mb-4 items-center">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Ahmed S." className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800">Ahmed S.</div>
                                        <div className="text-gray-600 text-sm">June 17, 2024 at 11:45</div>
                                    </div>
                                </div>
                                <div className="text-gray-700 leading-relaxed">
                                    <p>Very good technical article. The comparison with previous versions is particularly useful. Can you do a similar article for Revit in the coming weeks?</p>
                                </div>
                            </div>
                        
                            </div>

                        <div className="bg-gray-50 p-10 rounded-lg my-12">
                            <h3 className="text-2xl font-bold mb-6">Leave a comment</h3>
                            <form>
                                <div className="mb-5">
                                    <label htmlFor="name" className="block mb-2 font-semibold text-gray-800">Name *</label>
                                    <input type="text" id="name" required className="w-full py-3 px-4 border border-gray-300 rounded-md text-base transition-colors duration-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 font-semibold text-gray-800">Email *</label>
                                    <input type="email" id="email" required className="w-full py-3 px-4 border border-gray-300 rounded-md text-base transition-colors duration-300 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="comment" className="block mb-2 font-semibold text-gray-800">Comment *</label>
                                    <textarea id="comment" required className="w-full py-3 px-4 border border-gray-300 rounded-md text-base transition-colors duration-300 focus:outline-none focus:border-blue-500 min-h-[150px] resize-y"></textarea>
                                </div>
                                <button type="submit" className="inline-block py-3 px-6 bg-blue-500 text-white no-underline rounded-md font-semibold transition-colors duration-300 hover:bg-blue-700">Post Comment</button>
                            </form>
                        </div>
                        
                    </div>
                
                </article>
            </div>
        </section>
    );
};

export default BlogPost;
