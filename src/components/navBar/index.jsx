import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./style.scss";

const data = [
    { label: "HOME", to: "/" },
    { label: "ABOUT ME", to: "/about" },
    { label: "SKILLS", to: "/skills" },
    { label: "CONTACT", to: "/contact" },
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    const closeMenu = () => {
        setToggleIcon(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar_container">
                <Link to="/" className="navbar_container_logo" onClick={closeMenu}>
                    <FaReact size={30} />
                </Link>

                <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
                    {data.map((item, key) => (
                        <li key={key} className="navbar_container_menu_item">
                            <Link
                                to={item.to}
                                className="navbar_container_menu_item_links"
                                onClick={closeMenu}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="nav-icon" onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
