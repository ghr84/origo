import React from 'react';
import { Link } from 'react-router-dom';



const FirstPage = () => {
    return (
        <div>
            <main>
                <div className="page1-text">
                    <h1 className="page1-h1">Lorum Ipsum commodo</h1>
                    <p className="page1-p">quis nostrud exercic
                    ullamco laboris nisi ut
                    aliquip. Quis nostrud
                    exercic ullamco.</p>
                </div>
                <div className="page1-btnHolder">
                    
                        <Link to="/login">
                            <button className="signIn-btn">Innskráning</button>
                        </Link>
                   
                    <span>Nýskráning</span>
                </div>
            </main>
        </div>
    )


}

export default FirstPage;