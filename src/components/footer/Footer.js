import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <>
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} />
          <span>&copy; MoneyMinds. All right reserved</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
