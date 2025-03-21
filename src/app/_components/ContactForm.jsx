"use client";

import { useState } from "react";
import AppData from "@data/app.json";

const ContactForm = ({ formType = 'contact' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        resume: null,
        companyRevenue: '',
        companyLocation: '',
        yearsInBusiness: '',
    });

    const getFormFields = () => {
        switch(formType) {
            case 'careers':
                return [
                    { name: 'name', type: 'text', label: 'Full Name', required: true },
                    { name: 'email', type: 'email', label: 'Email', required: true },
                    { name: 'phone', type: 'tel', label: 'Phone', required: true },
                    { name: 'resume', type: 'file', label: 'Resume', required: true, accept: '.pdf,.doc,.docx' },
                    { name: 'message', type: 'textarea', label: 'Tell us about yourself', required: true },
                ];
            case 'acquisition':
                return [
                    { name: 'name', type: 'text', label: 'Full Name', required: true },
                    { name: 'email', type: 'email', label: 'Email', required: true },
                    { name: 'phone', type: 'tel', label: 'Phone', required: true },
                    { name: 'company', type: 'text', label: 'Company Name', required: true },
                    { name: 'companyLocation', type: 'text', label: 'Company Location', required: true },
                    { name: 'yearsInBusiness', type: 'number', label: 'Years in Business', required: true },
                    { name: 'companyRevenue', type: 'text', label: 'Annual Revenue', required: true },
                    { name: 'message', type: 'textarea', label: 'Tell us about your company', required: true },
                ];
            default:
                return [
                    { name: 'name', type: 'text', label: 'Full Name', required: true },
                    { name: 'email', type: 'email', label: 'Email', required: true },
                    { name: 'phone', type: 'tel', label: 'Phone', required: false },
                    { name: 'message', type: 'textarea', label: 'Message', required: true },
                ];
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(AppData.settings.formspreeURL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    formType,
                })
            });

            if (response.ok) {
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: '',
                    resume: null,
                    companyRevenue: '',
                    companyLocation: '',
                    yearsInBusiness: '',
                });
                alert('Thank you for your submission!');
            } else {
                alert('There was an error. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            {getFormFields().map((field, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <label 
                        htmlFor={field.name}
                        style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontSize: '0.9rem',
                            color: '#262626',
                            fontWeight: '500'
                        }}
                    >
                        {field.label}{field.required && ' *'}
                    </label>
                    
                    {field.type === 'textarea' ? (
                        <textarea
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            required={field.required}
                            rows="4"
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '6px',
                                border: '1px solid #ddd',
                                fontSize: '1rem',
                                backgroundColor: 'white'
                            }}
                        />
                    ) : field.type === 'file' ? (
                        <input
                            type="file"
                            id={field.name}
                            name={field.name}
                            onChange={handleChange}
                            required={field.required}
                            accept={field.accept}
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '6px',
                                border: '1px solid #ddd',
                                fontSize: '1rem',
                                backgroundColor: 'white'
                            }}
                        />
                    ) : (
                        <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            required={field.required}
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '6px',
                                border: '1px solid #ddd',
                                fontSize: '1rem',
                                backgroundColor: 'white'
                            }}
                        />
                    )}
                </div>
            ))}

            <button 
                type="submit"
                style={{
                    backgroundColor: '#C2D720',
                    color: '#262626',
                    padding: '14px 28px',
                    borderRadius: '6px',
                    border: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                {formType === 'careers' ? 'Submit Application' : 
                 formType === 'acquisition' ? 'Submit Inquiry' : 
                 'Send Message'}
                <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </button>
        </form>
    );
};

export default ContactForm;