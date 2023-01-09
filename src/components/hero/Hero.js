import React from "react";
import css from "./Hero.module.css";
import { FaMoneyCheckAlt } from 'react-icons/fa'
import HeroImg from '../../assets/img98.png'
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {
    return (
        <div className={css.container}>
            {/* leftside */}
            <div className={css.h_sides}>
                <span className={css.text1}> Send crypto across the world</span>
                <div className={css.text2}>
                    <span></span>
                    <span>Explore the crypto world. Buy and sell currencies.</span>
                
                </div>
            </div>

            {/* midddleside */}
            <div className={css.wrapper}>
                <div className={css.bluecircle}></div>
                <img src={HeroImg} width={600} />
                <div className={css.cart2}>
                    <FaMoneyCheckAlt />
                    <div className={css.signup}>
                        <span>Connect Wallet</span>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>

            {/* rightside */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>Web 3.0</span>
                    <span>Secure & Reliable</span>
                </div>
                <div className={css.customers}>
                    <span>Ethereum</span>
                    <span>BlockChain</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
