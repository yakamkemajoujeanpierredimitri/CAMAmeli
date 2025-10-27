
import React from 'react';

const BlogSubscribe = () => {
    return (
        <section className="py-12 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg text-center max-w-2xl mx-auto">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Stay Informed</h3>
                    <p className="text-gray-600 mb-6">Subscribe to our newsletter to receive our latest articles and news directly in your inbox.</p>
                    <form className="flex flex-col sm:flex-row gap-2.5">
                        <input type="email" placeholder="Your email address" required className="flex-1 py-3 px-4 border border-gray-300 rounded-md text-base" />
                        <button type="submit" className="py-3 px-6 bg-blue-500 text-white border-none rounded-md font-semibold cursor-pointer w-full sm:w-auto">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BlogSubscribe;
