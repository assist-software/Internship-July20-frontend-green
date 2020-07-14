import React from 'react';
import './Login.css';
import loginImage from '../../UI/Images/loginImage.jpg';

const login = () => (
    <div className="login-container">
        <div className="login">
            <div>

            </div>
            <div className="login-data-container" >
                <div className="login-text">
                   <p>WELCOME</p>
                    <h2>Login to your account</h2>
                </div>
            
                <form className="login-form">
                    <label for="email">
                        Email Address</label>
                        <input name="email" type="email" placeholder="enter your email" />
                    
                    <label for="password">
                        Password </label>
                        <input name="password" type="text" placeholder="enter your password" />
                    
                    <input type="submit" value="Login" />
                </form>
            </div>
            <div>

            </div>
           

        </div>
        <div className="login-image">
            {/* <img src={loginImage} alt="sport-club-app" /> */}
        </div>
    </div>
);

export default login;