import React from 'react'
import css from './Virtual.module.css'
import Shade from '../../assets/gif2.webp'



const Virtual = () => {
    return (
        <div className={css.Virtual}>
            {/* left side */}
            <div className={css.left}>
                <span>Services we continue to improve </span>
                <span>Security Gauranteed </span>
                <span>Best Exchange Rates</span>
                <img src={Shade} />
            </div>
            {/* right side */}
            <div>
                <form className={css.form}>
                <h1>Transaction Port</h1>
                    <label className={css.label}>
    
                        <input type="text" placeholder='Address To' />
                    </label>
                    <label className={css.label}>
                       
                        <input type="text" placeholder='Amount(ETH)'/>
                    </label>
                    <label className={css.label}>
                       
                        <input type="text" placeholder='Keywords'/>
                    </label>
                    <label className={css.label}>
                        
                        <input type="text" placeholder='Enter Message' />
                    </label>
        
                    <button type="submit" value="Submit">Send Now</button>
                </form>
            </div>
            
        </div>
    )
}

export default Virtual
