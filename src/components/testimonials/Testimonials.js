import React from 'react'
import css from './Testimonials.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialsData } from '../../data/testimonials'
import Before from '../../assets/card1.jpeg'
import After from '../../assets/card2.jpeg'
import { AiOutlineUserAdd } from 'react-icons/ai'
import ReactCompareImage from 'react-compare-image';

const Testimonials = () => {
    return (
        <div className={css.testimonials}>
            <div className={css.wrapper}>
            
                <div className={css.container}>
                   <h1> Swipe Down To Know More</h1>
                    <div className={css.right}>
                        <div className={css.wrapper1}>
                            <ReactCompareImage leftImage={Before}
                                rightImage={After} />
                        </div>
                    </div>
                </div>

                <div className={css.container1}>
                    <span>
                        <AiOutlineUserAdd />get updated</span>
                    <span className={css.testimonial_text}> With the latest transaction details.</span>
                    <span className={css.testimonial_text}>The details of sender with time stamp</span>
                    <span className={css.testimonial_text}>With the latest transaction details.</span>
                    <span className={css.testimonial_text}>With the exact credited or debited</span>
                </div>




                {/* <div className={css.reviews}>Reviews</div> */}
                {/* <div className={css.carousal}>
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    className={css.tCarousal}>
                    {
                        TestimonialsData.map((testimonial, i) => (
                            <SwiperSlide>
                                <div className={css.testimonial}>
                                    <img src={testimonial.image} />
                                    <span>FROM : </span>
                                    <span>TO :</span>
                                    <span>Amount :</span>
                                    <hr />
                                    <span>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>*/}
            </div>
        </div>

    )
}

export default Testimonials
