import React, { useEffect, useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import PageHeaderContent from '../../components/pageHeader';
import './style.scss';
import { useLocation } from 'react-router-dom';

const About = () => {
    const location = useLocation();
    const [playAnimation, setPlayAnimation] = useState(false);

    useEffect(() => {
        setPlayAnimation(false);
        const timer = setTimeout(() => setPlayAnimation(true), 100);
        return () => clearTimeout(timer);
    }, [location]);

    const jobSummary = `Hi, I'm a Full Stack Developer with a strong passion for building scalable, high-performance applications.
I specialize in both development and testing, offering a well-rounded understanding of the complete software development lifecycle.

My skill set includes:

- Backend: Java, J2EE, Spring Boot, Hibernate, SQL, MySQL
- Frontend: HTML, CSS, JavaScript, ReactJS
- Testing: Manual Testing, Automation Testing

I bring a unique blend of development and QA knowledge, which helps in building robust applications with quality at the core.`;

    const personalDetails = [
        { label: 'Name', value: 'Muneswar Reddy Bhogala' },
        { label: 'Age', value: '23' },
        { label: 'Address', value: 'Jammalamadugu, Kadapa(d), Andhra Pradesh' },
        { label: 'Email', value: 'bhogalamuneswarreddy@gmail.com' },
        { label: 'Mobile Number', value: '8374321602' },
    ];

    const educationDetails = [
        {
            Degree: 'B.Tech in Computer Science',
            college: 'Vaagdevi Institute of Technology and Science',
            grade: '8.1 CGPA',
            year: 'May 2024',
        },
        {
            Degree: 'Intermediate (MPC)',
            college: 'Vivekananda Junior College',
            grade: '9.67 GPA',
            year: 'March 2020',
        },
        {
            Degree: 'Secondary School',
            college: 'P.R. Govt High School',
            grade: '9.2 GPA',
            year: 'April 2018',
        },
    ];

    const internships = [
        {
            label: 'Java Full Stack Internship',
            value: 'at Tap Academy, from Jun 2024 to Nov 2024',
        },
        {
            label: 'Software Testing Internship',
            value: 'at Kodnest, from Dec 2024 to Mar 2025',
        },
    ];

    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__wrapper">
                    <Animate
                        play={playAnimation}
                        duration={1}
                        start={{ transform: 'translateX(-900px)' }}
                        end={{ transform: 'translateX(0px)' }}
                    >
                        <h3>Full Stack Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play={playAnimation}
                        duration={1}
                        start={{ transform: 'translateX(500px)' }}
                        end={{ transform: 'translateX(0px)' }}
                    >
                        <h3>Personal Information</h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <strong>{item.label}:</strong>{' '}
                                    {item.label === 'Email' ? (
                                        <a href={`mailto:${item.value}`} className="email-link">
                                            {item.value}
                                        </a>
                                    ) : (
                                        item.value
                                    )}
                                </li>
                            ))}
                        </ul>
                    </Animate>

                    <Animate
                        play={playAnimation}
                        duration={1}
                        start={{ transform: 'translateX(-900px)' }}
                        end={{ transform: 'translateX(0px)' }}
                    >
                        <h3>Education Details</h3>
                        <ul>
                            {educationDetails.map((item, i) => (
                                <li key={i}>
                                    <div>
                                        <strong>{item.Degree}</strong>
                                        <div>{item.college}</div>
                                        <div>{item.grade}</div>
                                        <div>{item.year}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Animate>

                    <Animate
                        play={playAnimation}
                        duration={1}
                        start={{ transform: 'translateX(500px)' }}
                        end={{ transform: 'translateX(0px)' }}
                    >
                        <h3>Internships</h3>
                        <ul>
                            {internships.map((item, i) => (
                                <li key={i}>
                                    <strong>{item.label}:</strong> {item.value}
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
            </div>
        </section>
    );
};

export default About;