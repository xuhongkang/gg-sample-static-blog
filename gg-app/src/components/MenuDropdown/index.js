import React, { useState } from 'react';
import './MenuDropdown.css';

const MenuDropdown = ({ name, links }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div
            className="menu-dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className="menu-dropdown-name">{name} ▼</span>
            {isOpen && (
                <ul className="dropdown-content">
                    {Object.keys(links).map((linkName) => (
                        <li key={linkName}>
                            <a href={links[linkName]}>{linkName}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MenuDropdown;
