import '../../styles/pricing.css';

const Pricing = () => {
    return (
        <section id='pricing'>
            <div className="pricing__container container">
                <div className="pricing__top">
                    <h2 className="section__title">Gym <span className="highlights">Pricing</span> Plan</h2>
                    <p className='section__subtitle'>Lorem ipsum dolor sit amet, consectetur adipisicing<br /> elit. Adipisci eum iusto officiis quo rerum sit.</p>
                </div>

                {/* ======= pricing wrapper =======*/}
                <div className="pricing__wrapper">
                    <div
                        className="pricing__item"
                        data-aos='fade-up'
                        data-aos-duration='1500'
                    >
                        <div className="pricing__card-top">
                            <h2 className='section__title'>Regular Member</h2>
                            <h2 className="pricing section__title">$50 <span>/month</span></h2>
                        </div>
                        
                        <div className="services">
                            <ul>
                                <li>
                                    <span>
                                        <i className="ri-checkbox-blank-circle-fill" />
                                    </span>
                                    Unlimited access to the gym
                                </li>
                                <li>
                                    <span>
                                        <i className="ri-checkbox-blank-circle-fill" />
                                    </span>
                                    Customer support
                                </li>
                                <li>
                                    <span>
                                        <i className="ri-checkbox-blank-circle-fill" />
                                    </span>
                                    Personal trainer
                                </li>
                                <li>
                                    <span>
                                        <i className="ri-checkbox-blank-circle-fill" />
                                    </span>
                                    Standard options
                                </li>
                                <li>
                                    <span>
                                        <i className="ri-checkbox-blank-circle-fill" />
                                    </span>
                                    5 classes per week
                                </li>
                            </ul>

                            <button className='btn__primary'>Join Now</button>
                        </div>
                    </div>

                    <div
                        className="pricing__item pricing__item-02"
                        data-aos='fade-up'
                        data-aos-duration='1500'
                        data-aos-delay='200'
                    >
                        <div className="pricing__card-top">
                            <h2 className='section__title'>Oremium Member</h2>
                            <h2 className="pricing section__title">$130 <span>/month</span></h2>
                        </div>

                        <div className="services">
                            <ul>
                                <li>
                                    <span>
                                        <i className="ri-checkbox-blank-circle-fill" />
                                    </span>
                                    Unlimited access to the gym
                                </li>
                                <li>
                                    <span>
                                        <i className="ri-checkbox-blank-circle-fill" />
                                    </span>
                                    Customer support
                                </li>
                                <li>
                                    <span>
                                        <i className="ri-checkbox-blank-circle-fill" />
                                    </span>
                                    Personal trainer
                                </li>
                                <li>
                                    <span>
                                        <i className="ri-checkbox-blank-circle-fill" />
                                    </span>
                                    Standard options
                                </li>
                                <li>
                                    <span>
                                        <i className="ri-checkbox-blank-circle-fill" />
                                    </span>
                                    5 classes per week
                                </li>
                            </ul>

                            <button className='btn__primary'>Join Now</button>
                        </div>
                    </div>

                    <div
                        className="pricing__item pricing__item-03"
                        data-aos='fade-up'
                        data-aos-duration='1500'
                        data-aos-delay='400'
                    >
                        <div className="pricing__card-top">
                            <h2 className='section__title'>Standard Member</h2>
                            <h2 className="pricing section__title">$100 <span>/month</span></h2>
                        </div>

                        <div className="services">
                            <ul>
                                <li>
                                    <span>
                                        <i className="ri-checkbox-blank-circle-fill" />
                                    </span>
                                    Unlimited access to the gym
                                </li>
                                <li>
                                    <span>
                                        <i className="ri-checkbox-blank-circle-fill" />
                                    </span>
                                    Customer support
                                </li>
                                <li>
                                    <span>
                                        <i className="ri-checkbox-blank-circle-fill" />
                                    </span>
                                    Personal trainer
                                </li>
                                <li>
                                    <span>
                                        <i className="ri-checkbox-blank-circle-fill" />
                                    </span>
                                    Standard options
                                </li>
                                <li>
                                    <span>
                                        <i className="ri-checkbox-blank-circle-fill" />
                                    </span>
                                    5 classes per week
                                </li>
                            </ul>

                            <button className='btn__primary'>Join Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;