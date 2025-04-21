import React from 'react';
import './App.scss';
import './index.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Skills from './containers/skills';
import Navbar from './components/navBar';
import ParticlesBg from './components/ParticlesBg';

const App = () => {
    const location = useLocation();

    return (
        <div className='App'>
            {/* Conditionally render ParticlesBg based on the current route */}
            {location.pathname === '/' && <ParticlesBg key={location.pathname} />}

            <Navbar />
            <div className='App_main-page-content'>
                <Routes>
                    <Route index path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
