import React from 'react'
import { PureComponent } from 'react';
import logo from '../.././assets/images/logo.svg'
import vectorDown from '../.././assets/images/vectorDown.svg'
import vectorUp from '../.././assets/images/vectorUp.svg'
import cart from '../.././assets/images/cart.svg'
import s from "./header.module.css"
import { NavLink } from 'react-router-dom';

class Header extends PureComponent {
   componentDidMount() {
      const { getCategories } = this.props

      getCategories()
   }

   renderCategories = () => {
      const { handleCategoryClick, activeCategory, categories } = this.props

      return (
         <div className={s.categoriesBlock}>
            <div className={s.categories}>
               {categories?.map((category, i) => {
                  return <NavLink to={{ pathname: `/${category.name}` }} key={i} onClick={() => handleCategoryClick(category.name)} className={s.categories__item}><span className={activeCategory === category.name ? s.active : 0}>{category.name}</span></NavLink>
               })}
            </div>
         </div>
      )
   }

   renderLogo = () => {
      const { handleLogoClick } = this.props

      return (
         <div>
            <button onClick={() => handleLogoClick()} className={s.logoBlock}>
               <img src={logo} alt="logo" />
            </button>
         </div>
      )
   }

   renderCartAndCurrency = () => {
      const { handleCurrencyMouseClick,
         handleCartMouseClick,
         itemsSumCount,
         isToggleCurrencyReveal } = this.props
      return (
         <div className={s.cartNcurrency}>
            <button onClick={() => handleCurrencyMouseClick()} className={s.currencyBlock}>
               <div className={s.currency}>$<img className={s.vector} src={isToggleCurrencyReveal ? vectorUp : vectorDown} alt="" /> </div>
            </button>
            <button onClick={() => handleCartMouseClick()} className={s.cart}>
               <div style={{ display: !itemsSumCount && "none" }} className={s.itemsCount}><span>{itemsSumCount}</span></div>
               <div><img src={cart} alt="" /></div>
            </button>
         </div>
      )
   }

   render() {
      return (
         <header>
            <div className={s.flexNavBlock}>
               {this.renderCategories()}
               {this.renderLogo()}
               {this.renderCartAndCurrency()}
            </div>
         </header >
      )
   }
}


export default Header