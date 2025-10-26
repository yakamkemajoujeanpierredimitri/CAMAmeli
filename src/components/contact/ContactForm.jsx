
import React, { useState } from 'react';
import { sendProblem } from '../../service/user.service';

const ContactForm = () => {
    const [valuesForm ,setvalueForm] = useState({
        name:'',
        prenom:'',
        email:'',
        phoneNumber:'',
        sujet:'',
        message:''
    });
    const handleChange = (e)=>{
        const { name, value, type } = e.target;
    setvalueForm(prev => ({ ...prev, [name]: value }));
  };
  const validate = ()=>{
    const value = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!value.test(valuesForm.email)){
        alert('invalid email');
        return false;
    }
    return true;
  }
  const Submit = async (e)=>{
      e.preventDefault();
   if(!validate()){
    return;
   }
    const res =  await sendProblem(valuesForm);
    if(res.error){
        return alert(res.error);
    }
    alert('sent');
  }
    
    return (
        <div className="bg-white p-10 rounded-lg shadow-lg">
            <form id="contactForm" onSubmit={Submit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="mb-6">
                        <label htmlFor="prenom" className="block mb-2 font-semibold text-gray-800">First Name *</label>
                        <input type="text" id="prenom" name="prenom" onChange={handleChange} placeholder="Your first name" required className="w-full py-3 px-4 border-2 border-gray-200 rounded-md text-base transition duration-300 ease-in-out bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="nom" className="block mb-2 font-semibold text-gray-800">Last Name *</label>
                        <input type="text" id="nom" name="name" onChange={handleChange} placeholder="Your last name" required className="w-full py-3 px-4 border-2 border-gray-200 rounded-md text-base transition duration-300 ease-in-out bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 font-semibold text-gray-800">Email *</label>
                        <input type="email" id="email" onChange={handleChange} name="email" placeholder="your.email@example.com" required className="w-full py-3 px-4 border-2 border-gray-200 rounded-md text-base transition duration-300 ease-in-out bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="telephone" className="block mb-2 font-semibold text-gray-800">Phone</label>
                        <input type="tel" id="telephone" name="phoneNumber" onChange={handleChange} placeholder="+225 XX XX XX XX" className="w-full py-3 px-4 border-2 border-gray-200 rounded-md text-base transition duration-300 ease-in-out bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white" />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="sujet" className="block mb-2 font-semibold text-gray-800">Subject *</label>
                    <select id="sujet" name="sujet" required className="w-full py-3 px-4 border-2 border-gray-200 rounded-md text-base transition duration-300 ease-in-out bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white" onChange={handleChange}>
                        <option value="">Choose a subject</option>
                        <option value="formation">Training</option>
                        <option value="concours">Competition preparation</option>
                        <option value="conference">Conferences & events</option>
                        <option value="partenariat">Partnership</option>
                        <option value="autre">Other</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-semibold text-gray-800">Message *</label>
                    <textarea id="message" name="message" rows="6" onChange={handleChange} placeholder="Describe your request in detail..." required className="w-full py-3 px-4 border-2 border-gray-200 rounded-md text-base transition duration-300 ease-in-out bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white resize-y min-h-[120px]"></textarea>
                </div>

                <button type="submit"  className="py-3 px-6 border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out no-underline inline-block text-center bg-gray-800 text-white hover:bg-gray-700 hover:-translate-y-0.5">
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
