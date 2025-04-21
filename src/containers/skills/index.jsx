import React, { useEffect, useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeader';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { skillsData } from './utils';
import { Line } from 'rc-progress';
import './style.scss';

const Skills = () => {
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        setAnimationKey(prevKey => prevKey + 1);
    }, []);

    return (
        <section id="skills" className="skills">
            <PageHeaderContent
                headerText="My Skills"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="skills_content-wrapper">
                {Object.keys(skillsData).map((key, i) => (
                    <div key={i} className="skills_content-wrapper_inner-content">
                        <Animate
                            key={animationKey}
                            play
                            duration={1}
                            delay={0.3}
                            start={{
                                transform: 'translate(-200px)',
                            }}
                        >
                            <h3 className="skills_content-wrapper_inner-content_category-text">
                                {skillsData[key].label}
                            </h3>
                            <div>
                                {skillsData[key].data.map((skillItem, j) => (
                                    <AnimateKeyframes
                                        key={j}
                                        play
                                        duration={1}
                                        keyframes={['opacity: 1', 'opacity: 0']}
                                        iterationCount="1"
                                    >
                                        <div className="progressbar-wrapper">
                                            <p>{skillItem.skillName}</p>
                                            <Line
                                                percent={skillItem.percentage}
                                                strokeWidth={2}
                                                strokeColor="var(--yellow-theme-main-color)"
                                                trailWidth="2"
                                                trailColor="var(--yellow-theme-sub-text-color)"
                                                strokeLinecap="square"
                                            />
                                        </div>
                                    </AnimateKeyframes>
                                ))}
                            </div>
                        </Animate>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
