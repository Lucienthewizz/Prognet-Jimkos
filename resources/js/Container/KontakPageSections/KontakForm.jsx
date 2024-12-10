import React, { useState } from 'react';

const KontakForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic untuk mengirim form (misalnya menggunakan API)
        console.log('Form Data:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-2xl font-semibold text-primary">Hubungi Kami</h2>
            
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium text-text">Nama</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full p-3 border rounded-lg border-lightgrey focus:outline-none focus:ring-2 focus:ring-primary"
                    required 
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium text-text">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full p-3 border rounded-lg border-lightgrey focus:outline-none focus:ring-2 focus:ring-primary"
                    required 
                />
            </div>

            <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium text-text">Pesan</label>
                <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="w-full p-3 border rounded-lg border-lightgrey focus:outline-none focus:ring-2 focus:ring-primary"
                    rows="4" 
                    required 
                />
            </div>

            <button 
                type="submit" 
                className="w-full py-3 text-white rounded-lg bg-primary hover:bg-blue-700 focus:outline-none"
            >
                Kirim Pesan
            </button>
        </form>
    );
};

export default KontakForm;
