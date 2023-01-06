import '../../styles/footer.css';
import logo from "../../assets/img/dumble.png";

const Footer = () => {
    const year = new Date().getFullYear();

    const footerLinksClickHandler = (e) => {
        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        const targetMenu = document.querySelector(e.target.getAttribute('data-target'));

        if (width < 768 && targetMenu) {
            e.target.classList.toggle('active');

            if (targetMenu.classList) {
                targetMenu.classList.toggle('active');
            }

            if (targetMenu.classList.contains('active')) {
                targetMenu.style.height = `${targetMenu.firstChild.clientHeight}px`;
            } else {
                targetMenu.style.height = '0';
            }
        }

    }

    return (
        <footer
            className='footer'
            data-aos='fade'
            data-aos-duration='500'
        >
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__box">
                        {/* ======= LOGO =======*/}
                        <div className="logo">
                            <div className="logo__img">
                                <img src={logo} alt="logo"/>
                            </div>
                            <h2>FitStyle</h2>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            At dicta fugiat iure, natus quaerat quo!
                        </p>
                    </div>

                    <div className="footer__box">
                        <h4
                            className="footer__title"
                            data-target='#footer__company'
                            onClick={(e) => footerLinksClickHandler(e)}
                        >
                            Company
                            <i className="ri-arrow-right-s-line"/>
                        </h4>
                        <div id='footer__company' className="footer__links-wrapper">
                            <ul className="footer__links">
                                <li>
                                    <a href="/">Our program</a>
                                </li>
                                <li>
                                    <a href="/">Our plan</a>
                                </li>
                                <li>
                                    <a href="/">Become a member</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__box">
                        <h4
                            className="footer__title"
                            data-target='#footer__quick-links'
                            onClick={(e) => footerLinksClickHandler(e)}
                        >
                            Quick Links
                            <i className="ri-arrow-right-s-line"/>
                        </h4>

                        <div id='footer__quick-links' className="footer__links-wrapper">
                            <ul className="footer__links">
                                <li>
                                    <a href="/">About us</a>
                                </li>
                                <li>
                                    <a href="/">Contact us</a>
                                </li>
                                <li>
                                    <a href="/">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__box">
                        <h4
                            className="footer__title"
                            data-target='#footer__account'
                            onClick={(e) => footerLinksClickHandler(e)}
                        >
                            Your Account
                            <i className="ri-arrow-right-s-line"/>
                        </h4>
                        <div id='footer__account' className="footer__links-wrapper">
                            <ul className="footer__links">
                                <li>
                                    <a href="/">Personal info </a>
                                </li>
                                <li>
                                    <a href="/">Orders</a>
                                </li>
                                <li>
                                    <a href="/">Addresses</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className='footer__copyright'>Copyright - {year} developed by Dachev. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;