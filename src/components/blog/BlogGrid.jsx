
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAllFiles } from '../../service/file.service';

const BlogGrid = () => {
    const [posts , setPosts] = useState([]);
    useEffect(()=>{
        fetchposts();
    },[]);
    const fetchposts = async ()=>{
        const res = await getAllFiles();
        if(res.data){
            setPosts(res.data);
        }
    }

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {posts.map((post, index) => (
                        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out border border-gray-200 hover:-translate-y-2 hover:shadow-xl" key={index}>
                            <div className="h-52 overflow-hidden">
                             {post.format === 'image' && <img src={post.fileurl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />}
                            </div>
                            <div className="p-6">
                                <span className="inline-block py-1 px-4 bg-blue-500 text-white rounded-full text-xs mb-4">{post.category}</span>
                                <h3 className="text-xl font-bold mb-2.5 text-gray-800">{post.title}</h3>
                                <div className="flex gap-5 mb-4 text-gray-600 text-sm">
                                    <span><i className="far fa-calendar"></i> {new Date(
                                        post.eventDetails?.date
                                    ).toLocaleDateString()}</span>
                                    <span><i className="far fa-user"></i> {"Admin"}</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-5">{post.description}</p>
                                <NavLink to={`/blog/${post._id}`} className="inline-block py-2 px-5 bg-blue-500 text-white no-underline rounded-md font-semibold transition-colors duration-300 hover:bg-blue-700">Lire l'article</NavLink>
                            </div>
                        </div>
                    ))}
                </div>
                
           
            </div>
        </section>
    );
};

export default BlogGrid;
