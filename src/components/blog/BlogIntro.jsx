
import React from 'react';

const BlogIntro = () => {
    return (
        <section className="py-12 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl text-center mb-8 sm:mb-12 text-gray-800 relative">Latest News<div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div></h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">Explore our articles to discover the latest trends in professional training, tips for success in your exams, updates in professional software, and much more. Our blog is a valuable resource for all learners and professionals seeking to grow.</p>
                </div>
            </div>
        </section>
    );
};

export default BlogIntro;
