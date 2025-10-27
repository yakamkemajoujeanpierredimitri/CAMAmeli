
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import SocialMedia from '../components/contact/SocialMedia';

const Contact = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="py-16 sm:py-24 bg-gray-50 mt-12 sm:mt-16" id="contact">
                    <div className="container mx-auto px-4">
                        <header className="text-center mb-12 sm:mb-16">
                            <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                <span>Contact</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">We are here to support you</h2>
                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Have a question about our courses? Need some advice? Don't hesitate to contact us.
                                Our team will be happy to help you.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                            <ContactForm />
                            <ContactInfo />
                        </div>
                    </div>
                </section>
                
                <SocialMedia />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;


