import React, { useRef, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import { env } from '../util/environment';

const apiUrl = env.apiUrl + 'user/login';

const Login = () => {
    const [valid, setValid] = useState(false);
    const [error, setError] = useState(false);

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function handleLogin() {
        if(!valid) {
            return;
        }

        setValid(false);
        setError(false);

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

        if(resp.status === 401) {
            setError(true);
            handleInputChange();
        } else {
            Router.replace('/groceries');
        }
    }

    function buttonClass() {
        let btnClass = 'my-button';

        if(!valid) {
            btnClass += ' inactive';
        }

        return btnClass;
    }

    function handleInputChange() {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if(email && email.trim().length > 0 && password && password.trim().length > 0) {
            setValid(true);
        } else {
            setValid(false);
        }
    }

    function errorMessage() {
        if(!error) {
            return null;
        }

        return <div className="error-text mb-20">Please enter a valid username and password.</div>;
    }

    function handleKeyUp(e) {
        if(e.key.toLowerCase() === 'enter') {
            handleLogin();
        }
    }

    return (
        <div className="site-wrapper">
            <div className="login-wrapper">
                <div className="login-top"></div>
                <div className="login-left">
                    <div className="login-left-wrapper">
                        <h1>Log in to your account</h1>
                        <div className="login-form">
                            {errorMessage()}
                            <div className="login-form-fieldset">
                                <div className="login-form-label">
                                    Email Address
                            </div>
                                <div className="login-form-input">
                                    <input type="text" value="tpb_rocpile@yahoo.com" ref={emailRef} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="login-form-fieldset">
                                <div className="login-form-label">
                                    Password
                            </div>
                                <div className="login-form-input">
                                    <input type="password" ref={passwordRef} onChange={handleInputChange} onKeyUp={handleKeyUp} />
                                </div>
                            </div>
                            <div className="login-button-wrapper">
                                <div>
                                    <button type="submit" className={buttonClass()} onClick={handleLogin}>Login</button>
                                </div>
                                <div className="sign-up">
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