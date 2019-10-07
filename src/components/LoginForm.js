import React from 'react';

const LoginForm = ({handleLogin, logIn}) => {
    return (
        <div className="inputs">
            <form onSubmit={logIn}>
                <h2 className="login-h2">Netfang</h2>
                <input onChange={handleLogin} className="input-signIn" type="text" name="email" placeholder="Sláðu inn email" required></input>
                <h2 className="login-h2">Lykilorð</h2>
                <input onChange={handleLogin} className="input-signIn" type="password" name="password" placeholder="Sláðu inn lykilorð" required></input>
                <p className="forgot-pw">Gleymt lykilorð?</p>
                <input className="signIn-btn" type="submit" value="Innskrá"></input>
            </form>
        </div>
    )
}

export default LoginForm;