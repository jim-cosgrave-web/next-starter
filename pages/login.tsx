import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
//https://next-mongodb-nine.now.sh/api/daily
//http://localhost:3000/api/daily'

//const apiUrl = 'https://next-mongodb-nine.now.sh/api/daily';
const apiUrl = 'http://localhost:3000/api/daily';

const Login = () => {
    return (
<div className="site-wrapper">
        <div className="login-wrapper">
            <div className="login-left">
                <div className="login-left-wrapper">
                    <h1>Log in to your account</h1>
                    <div className="login-form">
                        <div className="login-form-fieldset">
                            <div className="login-form-label">
                                Email Address
                            </div>
                            <div className="login-form-input">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="login-form-fieldset">
                            <div className="login-form-label">
                                Password
                            </div>
                            <div className="login-form-input">
                                <input type="password" />
                            </div>
                        </div>
                        <div className="login-buntton-wrapper">
                            <div>
                                <button type="submit" className="login-button">Login</button>
                            </div>
                            <div className="ml-15">
                                Don't have an account? <a href="#">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-right">
                <div className="login-right-container">
                    <div className="login-right-title">
                        <div className="title">
                            GROCER
                        </div>
                        <div className="tag-line">
                            Shop smarter.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login;