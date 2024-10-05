// pages/LandingPage.js
import React from 'react';
import Button from '../../components/Button';
import MenuBar from '../../components/MenuBar';
import './LandingPage.css';

const menuItems = {
    Home: '/home',
    About: {
        'Team': '/about/team',
        'Careers': '/about/careers',
    },
    Services: {
        'Consulting': '/services/consulting',
        'Development': '/services/development',
    },
    Contact: '/contact',
}

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Top sticky menu */}
            <MenuBar logoIcon="/images/logo.svg" menuItems={menuItems}/>
        </div>
    );
};

export default LandingPage;