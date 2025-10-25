
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faWhatsapp, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="bg-white p-10 rounded-lg shadow-lg text-center">
                    <h3 className="text-3xl mb-2.5 text-gray-800">Suivez-nous</h3>
                    <p className="text-lg text-gray-600 mb-8">Rejoignez notre communauté sur les réseaux sociaux</p>
                    <div className="flex justify-center flex-wrap gap-4 md:flex-col md:items-center">
                        <a href="https://www.facebook.com/share/1QBSsv3m4f/?mibextid=wwXlfr" className="inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-full font-semibold text-white transition duration-300 ease-in-out min-w-[160px] hover:-translate-y-1 hover:shadow-lg bg-[#3b5998]">
                            <FontAwesomeIcon icon={faFacebookF} />
                            Facebook
                        </a>
                        <a href="https://www.instagram.com/cama_237?igsh=dGlpeTZhYTdsYWNr&utm_source=gr" className="inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-full font-semibold text-white transition duration-300 ease-in-out min-w-[160px] hover:-translate-y-1 hover:shadow-lg bg-pink-500">
                            <FontAwesomeIcon icon={faInstagram} />
                            Instagram
                        </a>
                        <a href="https://www.tiktok.com/@cama67885705?_t=ZM-90neSLayYGG&_r=1" className="inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-full font-semibold text-white transition duration-300 ease-in-out min-w-[160px] hover:-translate-y-1 hover:shadow-lg bg-[#0077b5]">
                            <FontAwesomeIcon icon={faTiktok} />
                            TikTok
                        </a>
                        <a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" className="inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-full font-semibold text-white transition duration-300 ease-in-out min-w-[160px] hover:-translate-y-1 hover:shadow-lg bg-red-600">
                            <FontAwesomeIcon icon={faYoutube} />
                            YouTube
                        </a>
                        <a href="https://whatsapp.com/channel/0029Vb5jCL16WaKhnWl0bn3q" className="inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-full font-semibold text-white transition duration-300 ease-in-out min-w-[160px] hover:-translate-y-1 hover:shadow-lg bg-green-500">
                            <FontAwesomeIcon icon={faWhatsapp} />
                            WhatsApp
                        </a>
                         <a href="https://x.com/cama678852705?s=11" className="inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-full font-semibold text-white transition duration-300 ease-in-out min-w-[160px] hover:-translate-y-1 hover:shadow-lg bg-green-500">
                            <FontAwesomeIcon icon={faTwitter} />
                            X
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialMedia;
