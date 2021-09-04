const { response } = require("express");

// Function GET
const usersGet =  (req, res = response) => {
    res.json( {
        ok: 'GET by controller'
    });
}

// Function PUT
const usersPut =  (req, res = response) => {
    res.json( {
        ok: 'PUT by controller'
    });
}

// Function POST
const usersPost =  (req, res = response) => {
    res.json( {
        ok: 'POST by controller'
    });
}

// Function DELETE
const usersDelete =  (req, res = response) => {
    res.json( {
        ok: 'DELETE by controller'
    });
}
// Function PATCH
const usersPatch =  (req, res = response) => {
    res.json( {
        ok: 'PATCH by controller'
    });
}
module.exports = {
    usersGet,
    usersPatch,
    usersPost,
    usersPut,
    usersDelete
}