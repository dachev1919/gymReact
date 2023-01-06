import {useEffect, useRef, useState} from 'react';
import '../../Styles/header.css';
import logo from '../../assets/img/dumble.png';

const nav__links = [
    {
        path: '#home',
        display: 'Home'
    },
    {
        path: '#schedule',
        display: 'Schedule'
    },
    {
        path: '#classes',
        display: 'Classes'
    },
    {
        path: '#pricing',
        display: 'Pricing'
    },
]

const Header = () => {
    const headerRef = useRef(null);
    const [menuActive, setMenuActive] = useState(false);

    const headerFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('sticky__header');
        } else {
            headerRef.current.classList.remove('sticky__header');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', headerFunc);

        return () => window.removeEventListener('scroll', headerFunc);
    }, []);

    const handleClick = (e) => {
        e.preventDefault();

        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 80,
        });
    };

    const mobileBurgerClickHandler = () => {
        setMenuActive(!menuActive);
    }

    return (
        <header className='header' ref={headerRef}>
            <div className='container'>
                <div className="nav__wrapper">
                    {/* ======= LOGO =======*/}
                    <div className="logo">
                        <div className="logo__img">
                            <img src={logo} alt="logo"/>
                        </div>
                        <h2>FitStyle</h2>
                    </div>
                    {/* ======= navigation menu =======*/}
                    <div className={`navigation ${menuActive ? 'navigation-show' : ''}`}>
                        <ul className="menu">
                            {
                                nav__links.map((item, index) => <li key={index} className='nav__item'><a href={item.path} onClick={handleClick}>{item.display}</a></li>)
                            }
                        </ul>
                    </div>
                    {/* ======= nav right =======*/}
                    <div className="nav__right">
                        <button className="btn__primary btn__primary-responsive">Register</button>
                        <span className="mobile__menu" onClick={mobileBurgerClickHandler}><i className="ri-menu-line"/></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;