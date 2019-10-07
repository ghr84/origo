import React from 'react';
import LoginForm from './LoginForm';
import { withRouter } from 'react-router-dom';

const Login = ({handleLogin, auth, setUser, loginData, history}) => {

    const logIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(loginData.email, loginData.password)
        .then(user => {
            console.log("User is logged in!")
            if(user){
                setUser(true);
                fetch('http://localhost:3000/post-order') // Var að laga console villur var: fetch('http://localhost:3003/post-order')
                .then(r => r) // Var að laga console villur var : .then(r=>r.json())
                .then((res) => {
                    console.log(res)
                })
                .catch(err => console.log(err)); 
                history.push('/Orders')   

            } 
        }) 
        .catch((error)=> {
            console.log(error);
        })
    }

    return (
        <div>
            <LoginForm handleLogin={handleLogin} logIn={logIn}/>
        </div>
    )
}

export default withRouter(Login);