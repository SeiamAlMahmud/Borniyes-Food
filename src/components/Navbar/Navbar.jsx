import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import AnchorTemporaryDrawer from '../AnchorTemporaryDrawer/AnchorTemporaryDrawer';
import { Link } from 'react-router-dom';
import { foodStoreContext } from '../../context/StoreContext';
const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home")
    const { food_list, cartItems, removeFromCart, getTotaCartAmmount } = useContext(foodStoreContext)
   
    const countTotalItems = (obj) => {
        return Object.values(obj).reduce((total, value) => total + value, 0);
      };
      const totalItems = countTotalItems(cartItems);
    return (
        <div className='navbar'>
         <Link to={'/'}>
         <img src={assets.logo} alt="" className="logo" />
         </Link>   
            <ul className="navbar-menu">
                <Link to={"/"} onClick={()=> setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={()=> setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={()=> setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
                <a href='#footer' onClick={()=> setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img className='navbar-circle-search-icon' src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to={'/cart'}>
                    <img src={assets.basket_icon} alt="" />
                    <div className={getTotaCartAmmount() ? 'dot' : ""}>
                       {
                           totalItems >0 ? `${totalItems}` : ""
                        }
                    </div>
                        </Link>
                </div>
                <button onClick={()=> setShowLogin(true)}>Sign In</button>
               <div className='navbar-hamburger-button'> 
               <AnchorTemporaryDrawer />
               </div>
            </div>
        </div>
    )
}

export default Navbar