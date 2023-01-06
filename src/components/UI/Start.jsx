import '../../Styles/start.css';
import trainerImg from '../../assets/img/trainer.png';

const Start = () => {
    return (
        <section id='classes'>
            <div className="container start__container">
                <div className="start__wrapper">
                    <div className="start__img">
                        <img
                            src={trainerImg}
                            alt="trainer"
                            data-aos='fade-left'
                            data-aos-duration='1000'
                        />
                    </div>
                    <div
                        className="start__content"
                        data-aos='fade-right'
                        data-aos-duration='1000'
                    >
                        <h2 className="section__title">
                            Ready to make a <span className="highlights">change?</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate ea error
                            id ipsa itaque libero molestiae nisi odio officiis quaerat quibusdam,
                            reiciendis rem repellat sed, sit vel voluptatem voluptatum!
                        </p>
                        <button className="btn__primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;