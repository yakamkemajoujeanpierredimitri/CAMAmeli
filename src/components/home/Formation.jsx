
import React from 'react';

const Formation = () => {
    return (
        <section className="bg-gray-100 rounded-2xl p-16 max-w-7xl my-20 mx-auto text-center">
            <div className="formation-container">
              <h2 className="text-gray-800 text-4xl font-bold mb-4">Prêt à commencer votre formation ?</h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">Rejoignez des centaines d'étudiants qui ont déjà transformé leur carrière grâce à nos formations.</p>
              <div className="flex justify-center gap-5 flex-wrap">
                <a href="#" className="py-3 px-6 rounded-lg font-semibold transition-all duration-300 ease-in-out bg-gray-800 text-white hover:bg-gray-700">
                  <span className="mr-2">📅</span> Consulter le calendrier
                </a>
                <a href="#" className="py-3 px-6 rounded-lg font-semibold transition-all duration-300 ease-in-out bg-white text-gray-800 border border-gray-300 hover:bg-gray-200">
                  Parler à un conseiller
                </a>
              </div>
            </div>
        </section>
    );
};

export default Formation;
