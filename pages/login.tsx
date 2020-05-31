import React, { useRef } from 'react';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import { env } from '../util/environment';

const apiUrl = env.apiUrl + 'user/login';

const Login = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function handleLogin() {
        const resp = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': emailRef.current.value,
                'password': passwordRef.current.value
            })
        })
        
        const json = await resp.json();

        Router.replace('/groceries');
    }

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
                                    <input type="text" value="tpb_rocpile@yahoo.com" ref={emailRef} />
                                </div>
                            </div>
                            <div className="login-form-fieldset">
                                <div className="login-form-label">
                                    Password
                            </div>
                                <div className="login-form-input">
                                    <input type="password" ref={passwordRef} />
                                </div>
                            </div>
                            <div className="login-buntton-wrapper">
                                <div>
                                    <button type="submit" className="login-button" onClick={handleLogin}>Login</button>
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