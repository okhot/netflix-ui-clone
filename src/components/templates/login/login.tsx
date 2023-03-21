import React from 'react'
import style from "./login.module.css"

export default function Login() {
    return (
        <div className={style.login}>
            <div className={style.login_form}>
                <form>
                <h1> Sign In </h1>
                    <input placeholder='Email or Phone Number' />
                    <input placeholder='Password' />
                    <button>Sign In</button>
                    <span>New to Neflix? <a>Sign up now.</a></span>
                <span>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a>Learn More</a></span>
                </form>
            </div>
        </div>
    )
}
