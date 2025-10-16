
import React from 'react';

const BlogSubscribe = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="bg-white p-12 rounded-lg shadow-lg text-center max-w-2xl mx-auto">
                    <h3 className="text-3xl font-bold mb-4 text-gray-800">Restez Informé</h3>
                    <p className="text-gray-600 mb-6">Abonnez-vous à notre newsletter pour recevoir nos derniers articles et actualités directement dans votre boîte de réception.</p>
                    <form className="flex gap-2.5">
                        <input type="email" placeholder="Votre adresse e-mail" required className="flex-1 py-3 px-4 border border-gray-300 rounded-md text-base" />
                        <button type="submit" className="py-3 px-6 bg-blue-500 text-white border-none rounded-md font-semibold cursor-pointer">S'abonner</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BlogSubscribe;
