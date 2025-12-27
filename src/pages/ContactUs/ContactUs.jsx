import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

const ContactUs = () => {
    const form = useRef();

    // State for form fields
    const [formData, setFormData] = useState({
        user_name: '',
        user_contact: '',
        user_email: '',
        course_select: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle Form Submission
    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        emailjs
            .sendForm(
                'service_ts9o6r4',
                'template_y45pjrg',
                form.current,
                'lvUGTwzLxHv1KtoX9'
            )
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    setStatus('Message Sent Successfully!');
                    // Reset form
                    setFormData({
                        user_name: '',
                        user_contact: '',
                        user_email: '',
                        course_select: '',
                        message: ''
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setStatus('Failed to send. Please try again.');
                }
            );
    };

    return (
        <div className="contact-container">
            {/* Left Side: Testimonial */}
            <div className="left-content">
                <h1>Set your goals high,<br />We'll help you achieve!</h1>
                <span className="quote-icon">❝</span>
                <p className="testimonial-text">
                    "Before joining INTERNSLOOM, I struggled to bridge the gap between academic theory and industry expectations. The mentorship and real-world project exposure I received here were game-changers. I didn't just learn 'how' to code; I learned how to build products that solve real problems."
                </p>

                <div className="profile-section">
                    <img src="https://via.placeholder.com/100" alt="Profile" />
                    <h3 className="profile-name">Rishu Rana</h3>
                    <p className="profile-role">Developer</p>
                </div>
            </div>
            <div className="left-content">
                <h1>Be the Best You,<br />Upskill Today!</h1>
                <span className="quote-icon">❝</span>
                <p className="testimonial-text">
                    "INTERNSLOOM helped me land my dream job! My old job wasn't going anywhere,
                    and I felt stuck. I saw an ad for the courses and decided to try.
                    The courses were clear and easy to follow. Thanks to InternsLoom,
                    my career is finally on track."
                </p>

                <div className="profile-section">
                    <img src="https://via.placeholder.com/100" alt="Profile" />
                    <h3 className="profile-name">Preet Mishra</h3>
                    <p className="profile-role">Developer</p>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="form-card">
                <h2>We'll get back to you shortly.</h2>
                <p className="form-desc">
                    Fill out the form, and we'll contact you regarding the course you've chosen to upskill yourself.
                </p>

                <form ref={form} onSubmit={sendEmail} className="form-group">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Full Name"
                        className="form-input"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="tel"
                        name="user_contact"
                        placeholder="Contact Number"
                        className="form-input"
                        value={formData.user_contact}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email Address"
                        className="form-input"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="course_select"
                        className="form-select"
                        value={formData.course_select}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select Courses</option>
                        <option value="web-dev">Web Development</option>
                        <option value="data-science">Data Science</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="aws">Amazon Web Services</option>
                        <option value="app-dev">Android App Development</option>
                        <option value="AutoCAD">AutoCAD</option>
                        <option value="BEVs">Battery Electric Vehicle(BEVs)</option>
                        <option value=""></option>
                    </select>

                    <textarea
                        name="message"
                        placeholder="Message"
                        className="form-textarea"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit" className="submit-btn">
                        Submit Now! &raquo;
                    </button>
                </form>

                {status && <p style={{ textAlign: 'center', marginTop: '10px' }}>{status}</p>}

                <p className="privacy-note">
                    * By providing information in this form, you agree to Privacy & Policy
                </p>
            </div>
        </div>
    );
};

export default ContactUs;