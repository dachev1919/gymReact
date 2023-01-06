import '../../styles/testimonials.css';
import {Swiper, SwiperSlide} from "swiper/react";
import { EffectCards } from "swiper";
import 'swiper/css';
import 'swiper/css/effect-cards';
import avatar01 from '../../assets/img/avatar01.png';
import avatar02 from '../../assets/img/avatar02.png';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="testimonials__container container">
                <h2 className="section__title">Testimonials</h2>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className='mySwiper'>
                    <SwiperSlide>
                        <div className="slider__slide">
                            <div className="slide__img-01">
                                <img src={avatar01} alt="avatar-1"/>
                            </div>
                            <h4>Jesica Fernandes</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad consectetur
                                deleniti dolor dolorum et excepturi, officiis porro sit soluta suscipit totam vero voluptatum!
                                Aliquam corporis laudantium necessitatibus omnis provident?
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider__slide">
                            <div className="slide__img-02">
                                <img src={avatar02} alt="avatar-2"/>
                            </div>
                            <h4>Jesica Fernandes</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad consectetur
                                deleniti dolor dolorum et excepturi, officiis porro sit soluta suscipit totam vero voluptatum!
                                Aliquam corporis laudantium necessitatibus omnis provident?
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider__slide">
                            <div className="slide__img-03">
                                <img src={avatar01} alt="avatar-3"/>
                            </div>
                            <h4>Jesica Fernandes</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad consectetur
                                deleniti dolor dolorum et excepturi, officiis porro sit soluta suscipit totam vero voluptatum!
                                Aliquam corporis laudantium necessitatibus omnis provident?
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;