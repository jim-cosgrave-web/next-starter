import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListOl } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [hidden, setHidden] = useState(true);

    function hiddenClass() {
        let menuClass = 'slide-hidden';

        if(!hidden) {
            menuClass = 'slide-shown';
        }

        return menuClass;
    }

    function overlayClass() {
        let overlay = 'overlay-hidden';

        if(!hidden) {
            overlay = 'overlay-shown';
        }

        return overlay;
    }

    function handleToggleMenu() {
        setHidden(!hidden);
    }

    return (
        <div>
            <div id="menu-overlay" className={overlayClass()} onClick={handleToggleMenu}></div>
            <div id="slide" className={hiddenClass()}>
                <div className="close-btn-wrapper" onClick={handleToggleMenu}>
                    <span style={{"position": "absolute", "top": "6px", "right": "14px"}}>
                        <span className="close-cross close-cross-1"></span>
                        <span className="close-cross close-cross-2"></span>
                    </span>
                    <button className="close-btn">Close Menu</button>
                </div>
                <div className="menu-nav-wrapper">
                    <nav>
                        <Link href="/groceries">
                            <div className="nav-item">
                                <FontAwesomeIcon icon={faListOl} />
                                <a>Groceries</a>
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
            <div className="menu-btn-wrapper" onClick={handleToggleMenu}>
                <span>
                    <span className="menu-bars"></span>
                    <span className="menu-bars" style={{ "top": "40%" }}></span>
                    <span className="menu-bars" style={{ "top": "80%" }}></span>
                </span>
                <button className="menu-btn">Open Menu</button>
            </div>
        </div>
    );
};

export default Header;