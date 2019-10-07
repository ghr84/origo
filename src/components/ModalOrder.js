import React, { useState } from 'react';
import * as firebase from 'firebase';

const ModalOrder = ({ closeModal, setBusinessKey }) => {

    const db = firebase.firestore();

    const [inputData, setInputData] = useState({ name: "", email: "", gsm: "", numberOfPackages: "" });
    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputData)
        fetch('http://localhost:3003/post-order', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(inputData)
        })
            .then(r =>
                r.text()
            )
            .then(businessKey => {
                console.log("this is the businesskey", businessKey)
               
                db.collection("origo-inputdata").doc(inputData.name).set({  
                    Name: inputData.name,
                    Email: inputData.email,
                    Gsm: inputData.gsm,
                    PackNr: inputData.numberOfPackages,
                    OrderNr: inputData.orderNr,
                    BusinessKey: businessKey
                }).then( () => {
                    setBusinessKey(businessKey)
                })
            })
    }

    return (
        <div className="create-del">
            <form onSubmit={handleSubmit} className="form-post">
                <div onClick={closeModal} className="close-btn">X</div>s

                <label className="post-label" name="name" htmlFor="name">Nafn *</label>
                <input type="text" placeholder="Nafn viðtakanda" name="name" id="name" onChange={handleChange}></input>

                <label className="post-label" htmlFor="email">Netfang *</label>
                <input type="email" placeholder="Netfang viðtakanda" name="email" id="email" onChange={handleChange}></input>

                <label className="post-label" htmlFor="gsm">Farsími *</label>
                <input type="number" placeholder="Farsími viðtakanda" name="gsm" id="gsm" onChange={handleChange}></input>

                <label className="post-label" htmlFor="amount">Fjöldi pakka *</label>
                <input  type="number" name="numberOfPackages" type="number" min="0" max="6" onChange={handleChange}></input>

                <label className="post-label" htmlFor="ordernumber">Pöntunarnúmer</label>
                <input  type="number" placeholder="Pöntunarnúmer" name="orderNr" id="ordernumber" onChange={handleChange}></input>

                <label className="post-label" htmlFor="desc">Lýsing</label>
                <textarea placeholder="Lýsing á sendingu" name="description" id="desc" onChange={handleChange}></textarea>

                <label className="post-label" htmlFor="where">Hvar *</label>
                <div className="flex-btn">
                    <button className="location">Snjallbox</button>
                    <button className="location">Vöruhús</button>
                </div>
                <input type="submit" value="Skrá" className="reg-btn"></input>
            </form>
        </div>
    )
}

export default ModalOrder;