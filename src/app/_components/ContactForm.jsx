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
    
    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

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
        setSubmitting(true);
        setSubmitStatus(null);
        
        // Create form data object for file upload support
        const formDataToSend = new FormData();
        
        // Add all form fields to FormData
        Object.keys(formData).forEach(key => {
            if (formData[key] !== null && formData[key] !== '') {
                formDataToSend.append(key, formData[key]);
            }
        });
        
        // Add form type for tracking which form was submitted
        formDataToSend.append('formType', formType);
        
        try {
            // Get Basin endpoint from app settings
            const basinEndpoint = AppData.settings.basinForms[formType] || AppData.settings.basinForms.contact;
            
            const response = await fetch(basinEndpoint, {
                method: 'POST',
                body: formDataToSend, // This allows file uploads
                // Don't set Content-Type header - browser will set it with boundary for FormData
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
                setSubmitStatus('success');
            } else {
                console.error('Form submission error:', await response.text());
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const inputStyle = {
        width: '100%',
        padding: '10px 12px',
        borderRadius: '6px',
        border: '1px solid #ddd',
        fontSize: '0.95rem',
        backgroundColor: 'white',
        boxSizing: 'border-box',
        display: 'block',
        margin: '0',
        height: 'auto'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '6px',
        fontSize: '0.9rem',
        color: '#333',
        fontWeight: '500'
    };

    return (
        <div>
            {submitStatus === 'success' ? (
                <div style={{ 
                    textAlign: 'center', 
                    padding: '20px', 
                    backgroundColor: 'rgba(194, 215, 32, 0.1)', 
                    borderRadius: '8px'
                }}>
                    <h3 style={{ color: '#262626', marginBottom: '10px' }}>Thank You!</h3>
                    <p style={{ color: '#666' }}>Your message has been received. We'll get back to you soon.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ margin: 0, padding: 0 }}>
                    {getFormFields().map((field, index) => (
                        <div key={index} style={{ marginBottom: '16px', width: '100%' }}>
                            <label 
                                htmlFor={field.name}
                                style={labelStyle}
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
                                    style={inputStyle}
                                />
                            ) : field.type === 'file' ? (
                                <input
                                    type="file"
                                    id={field.name}
                                    name={field.name}
                                    onChange={handleChange}
                                    required={field.required}
                                    accept={field.accept}
                                    style={inputStyle}
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    id={field.name}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    required={field.required}
                                    style={inputStyle}
                                />
                            )}
                        </div>
                    ))}

                    {submitStatus === 'error' && (
                        <div style={{ 
                            marginBottom: '15px', 
                            color: '#d32f2f', 
                            backgroundColor: 'rgba(211, 47, 47, 0.1)', 
                            padding: '8px 12px', 
                            borderRadius: '4px',
                            fontSize: '0.9rem'
                        }}>
                            Something went wrong. Please try again.
                        </div>
                    )}

                    <button 
                        type="submit"
                        disabled={submitting}
                        style={{
                            backgroundColor: submitting ? '#e0e0e0' : '#C2D720',
                            color: submitting ? '#999' : '#262626',
                            padding: '12px 24px',
                            borderRadius: '6px',
                            border: 'none',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            cursor: submitting ? 'default' : 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            margin: '10px 0 0 0'
                        }}
                    >
                        {submitting ? 'Submitting...' : (
                            formType === 'careers' ? 'Submit Application' : 
                            formType === 'acquisition' ? 'Submit Inquiry' : 
                            'Send Message'
                        )}
                        {!submitting && (
                            <svg 
                                width="14" 
                                height="14" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;