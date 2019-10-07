const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const authInfo = require('./secret.js');
const fetch = require('isomorphic-fetch');
const axios = require('axios');

const port = 3003;

app.use(cors());
app.use(bodyParser.json());

app.post('/post-order', (req, res) => {
    fetch("https://ssb-dev-fep-01.azurewebsites.net/api/Delivery", {
        body: JSON.stringify({

                    "senderOrderID": "2357433",
                    "description": "lysing",
                    "senderId": 14,
                    "numberOfPackages": req.body.numberOfPackages,
                    "pickupAtDeliveryBranch": true,
                    "box": false,
                    "location": "hilla",
                    "recipient": {
                        "email": req.body.email,
                        "phone": req.body.gsm,
                        "name": req.body.name
                    }
                }),
        headers: {
            Accept: "application/json",
            Authorization: "Basic dmVmc2tvbGk6Q1l3YzZsNEkyZg==",
            "Content-Type": "application/json"
        },
        method: "POST"
    })
        .then(res =>
            res.json()
        )
        .then(businessKey => {
            console.log("this is the businesskey", businessKey)
            res.send(businessKey)
            }
        )
        
})

app.get('/', (req, res) => {
    axios('http://ssb-dev-fep-01.azurewebsites.net/api/Sender', {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Basic '+ Buffer.from(authInfo).toString('base64')
        }
    }).then(r => {
        res.send(r.data)
    })
    .catch(e => {
        console.log(e)
    })
})

app.listen(port, () => {
    console.log('Ég er að fylgjast með þér', port)
})




