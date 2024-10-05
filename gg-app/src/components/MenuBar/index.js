import React from 'react';
import MenuDropdown from '../MenuDropdown';
import './MenuBar.css'; // Link to your CSS

const MenuBar = ({ logoIcon, menuItems }) => {
    return (
        <header className="menu-bar">
            <div className="menu-logo">
                <img src={logoIcon} alt="Logo" />
            </div>
            <nav className="menu-items">
                <ul>
                    {Object.keys(menuItems).map((item) => (
                        <li key={item} className="menu-item">
                            {typeof menuItems[item] === 'string' ? (
                                <a href={menuItems[item]}>{item}</a>
                            ) : (
                                <MenuDropdown name={item} links={menuItems[item]} />
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default MenuBar;
