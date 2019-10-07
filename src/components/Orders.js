import React, { useState,useEffect } from 'react';
import NavBar from './NavBar';
import SignOut from './SignOut';
import Barcode from 'react-barcode';
import * as firebase from 'firebase';

const Orders = ({ auth, setUser }) => {

    const db = firebase.firestore();
    const [businessKey, setBusinessKey] = useState("");
    const [dbData, setDbData] = useState([])
    console.log("this" ,setDbData, dbData)
    useEffect(() => {
        db.collection("origo-inputdata").get().then(function (querySnapshot) {
            const allData = [];
            querySnapshot.forEach(function (doc) {
                const data = doc.data()
                console.log(data);
                allData.push(data);                
            });
            setDbData(allData);
        });
    }, [db, businessKey])
   
   

    return (
        <div className="main">
            <SignOut auth={auth} setUser={setUser} />
            <h1>Sendingar</h1>
            <div className="onRoute">

                <div className="header">
                    <div className="arrow"></div>
                    <h2>Á leið</h2>
                </div>

                <div className="info">
                    <h3>SendingaNr</h3>

                    <h3>Hvert</h3>
                </div>

                <div className="content">
                    <div className="arrow2"></div>
                    <div className="data">
                        <div className="delNr"></div>
                        <div className="where"></div>
                    </div>
                </div>
              
                {dbData.map( (data, i) => ( 
            
                <div className="input-data" key={i}>
                    <div className="flex">
                        <label className="del-label" htmlFor="name">Nafn:</label>
                        <span className="name" key={i}>{data.Name}</span>
                    </div>
                    <div className="flex">
                        <label className="del-label" htmlFor="e-mail">E-mail:</label>
                        <span className="e-mail" key={i}>{data.Email}</span>
                    </div>
                    <div className="flex">
                        <label className="del-label" htmlFor="gsm">Gsm:</label>
                        <span className="gsm" key={i}>{data.Gsm}</span>
                    </div>
                    <div className="flex">
                        <label className="del-label" htmlFor="package">Fjöldi pakka:</label>
                        <span className="package" key={i}>{data.PackNr}</span>
                    </div>
                    
                    <div className="flex">
                        <label className="del-label" htmlFor="order-nr">Pöntunar Nr:</label>
                        <span className="order-nr" key={i}>{data.OrderNr}</span>
                    </div>
                    
                    <div className="barcode" key={i}>
                        <Barcode value={data.BusinessKey} />
                    </div>
                    <input className="ordersBtn" type="submit" value="Afgreiða"></input>
                </div>
                 ))} 
        
            </div>
            <div className="delivered">

                <div className="header">
                    <div className="arrow"></div>
                    <h2>Í boxi</h2>
                </div>

                <div className="info">
                    <h3>SendingaNr</h3>
                    <h3>Staða</h3>
                </div>

                {/* <div className="content-del"> */}
                <div className="content">
                    <div className="arrow2"></div>
                    <div className="data">
                        <div className="delNr"></div>
                        <div className="status"></div>
                    </div>
                </div>
                <div className="input-data">
                    <div className="flex">
                        <label className="del-label" htmlFor="name">Nafn:</label>
                        <span className="name"></span>
                    </div>
                    <div className="flex">
                        <label className="del-label" htmlFor="name">E-mail:</label>
                        <span className="name"></span>
                    </div>
                    <div className="flex">
                        <label className="del-label" htmlFor="e-mail">Gsm:</label>
                        <span className="e-mail"></span>
                    </div>
                    <div className="flex">
                        <label className="del-label" htmlFor="gsm">Fjöldi pakka:</label>
                        <span className="gsm"></span>
                    </div>
                    <div className="flex">
                        <label className="del-label" htmlFor="package">Geymsla:</label>
                        <span className="package"></span>
                    </div>
                    <div className="flex">
                        <label className="del-label" htmlFor="order-nr">Pöntunar Nr:</label>
                        <span className="order-nr"></span>
                    </div>
                </div>
            </div>
            <NavBar setBusinessKey={setBusinessKey} />
        </div>
    )
}

export default Orders;
