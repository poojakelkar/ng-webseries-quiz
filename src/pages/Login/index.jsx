import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const Login = () => {
    return (
        <div className='loginUser'>
            <div className='topSide'>
                <div className='logoImg'>
                    <img
                        classname='logo'
                        src='https://cdn-icons-png.flaticon.com/512/2784/2784530.png'
                        alt='logo'></img>
                </div>
            </div>
            <div className='loginContainer'>
                <form className='login-form'>
                    <h1 className='SignIn-Title'>Sign In</h1>
                    <input
                        className='input-login-page'
                        type='email input-login-page'
                        placeholder='Email'></input>
                    <input
                        className='input-login-page'
                        type='password '
                        placeholder='Password'></input>
                    <Link className='link' to='/'>
                        <button className='loginButton'>Sign In</button>
                    </Link>
                    <span className='new-user'>
                        New User?{" "}
                        <Link className='link' to='/sign-up'>
                            <b>Sign Up</b>
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Login;
