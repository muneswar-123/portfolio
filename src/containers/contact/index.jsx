import React, { useRef } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeader';
import emailjs from 'emailjs-com';
import './style.scss';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_89svaof',
            'template_2syu4ef',
            form.current,
            '9shSzKOufgMsHy22e' // public key
        ).then(
            (result) => {
                alert("Message sent successfully!");
            },
            (error) => {
                alert("Failed to send message. Please try again.");
            }
        );

        e.target.reset(); // optional: clear form after submit
    };

    return (
        <section id='contact' className="contact">
            <div className="contact-header">
                <PageHeaderContent
                    headerText="Contact Me"
                    icon={<BsInfoCircleFill size={40} />}
                />
            </div>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" rows="6" required />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;
