import React from 'react';
import { withRouter } from 'react-router-dom';

const SignOut = ({auth, setUser, history}) => {

    const signOut = () => {
        auth.signOut()
        .then(() => {
            setUser(false)
            console.log("User is logged out");
            history.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    }
    
    return (
        <div>
            <button onClick={signOut}>Sign Out</button>
        </div>
    )
}

export default  withRouter(SignOut);