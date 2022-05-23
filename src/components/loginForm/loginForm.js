import React from 'react'
import './loginForm.css'

function LoginForm() {
    return (
        <section className="loginPage">
            <div className="login-form">
                <h2 className="login-label">Zaloguj się</h2>
                <form action="/signin">
                    <input type="text" name="first_name" placeholder="Login"required />
                    <input type="password" name="password" placeholder="Hasło" required />
                    <button id="sub_btn" type="submit">Login</button>
                </form>
                <p>Nie masz konta? <a href="#home">Załóż je teraz!</a></p>
            </div>
        </section>
    );
  }
export default LoginForm;