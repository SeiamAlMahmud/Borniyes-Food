import React, { useState } from 'react'
import './LoginPopUP.css'
import { assets } from '../../assets/assets'
const LoginPopUP = ({ setShowLogin }) => {
    const [currState, setcurrentState] = useState("Sign Up")
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {
                        currState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />
                    }

                    <input type="email" placeholder='Your Email' name="" id="" required />
                    <input type="password" placeholder='Your password' name="" id="" required />
                </div>
                <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" name="" id="" required />
                    <p>By Continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {
                    currState === "Login" ? 
                    <p>Create a new Account? <span onClick={()=> setcurrentState("Sign Up")}>Click Here</span></p> 
                    : <p>Already have an account ? <span onClick={()=> setcurrentState("Login")}>Login here</span></p>
                }

            </form>
        </div>
    )
}

export default LoginPopUP