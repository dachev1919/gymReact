import heroImg from '../../assets/img/gym-02.png';
import dumbleIcon from '../../assets/img/dumble.png';
import '../../styles/hero.css';

const Hero = () => {
    return (
        <section id='home'>
            <div className="container">
                <div className="hero__wrapper">
                    {/* ======= hero content =======*/}
                    <div className="hero__content">
                        <h2
                            className='section__title'
                            data-aos='fade-up'
                            data-aos-duration='1200'
                        >
                            Exercise is the key to a <span className="highlights">Helthy</span> Lifestyle
                        </h2>
                        <p
                            data-aos='fade-up'
                            data-aos-duration='1400'
                            data-aos-delay='200'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda consectetur,
                            consequatur enim esse eum fuga.
                        </p>

                        <div
                            className="hero__btns"
                            data-aos='fade-up'
                            data-aos-duration='1600'
                            data-aos-delay='200'
                        >
                            <button className="btn__primary">Get Started</button>
                            <button className="watch__btn"><span><i className="ri-play-fill"/></span>Watch Video</button>
                        </div>
                    </div>

                    {/* ======= hero image =======*/}
                    <div className="hero__img">
                        <div className="hero__img-wrapper">
                            <div className="box-01">
                                <div className="box-02">
                                    <div className="box-03">
                                        <div className="box__img">
                                            <img src={heroImg} alt="heroImg"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="heart__rate"
                            data-aos='fade-right'
                            data-aos-duration='1400'
                        >
                            <h5>Heart Rate</h5>
                            <span><i className="ri-heart-pulse-fill"/></span>
                            <h6>2567 BPM</h6>
                        </div>

                        <div
                            className="gym__location"
                            data-aos='fade-left'
                            data-aos-duration='1400'
                        >
                            <span><i className="ri-map-pin-2-fill"/></span>
                            <h5>Find a new <br/> gym near you</h5>
                        </div>

                        <div
                            className="dumble__icon"
                            data-aos='fade-down'
                            data-aos-duration='1400'
                        >
                            <img src={dumbleIcon} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;