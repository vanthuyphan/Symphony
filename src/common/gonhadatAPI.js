/**
 * Created by Van Phan
 */
"use strict";

let axios = require('axios');

exports.login = (username, password) => {
    console.log("Login in")
    axios.post('http://127.0.0.1:3000/login', {
        username: username,
        password: password
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
