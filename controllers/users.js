const { response, request } = require("express");

// Function GET
const usersGet =  (req = request, res = response) => {

    const {q, id} = req.query;

    res.json( {
        ok: 'GET by controller',
        q,
        id
    });
}

// Function PUT
const usersPut =  (req = request, res = response) => {
    
    const id = req.params.id;
    res.json( {
        ok: 'PUT by controller',
        id
    });
}

// Function POST
const usersPost =  (req = request, res = response) => {
    const { name, age } = req.body;

    res.json( {
        ok: 'POST by controller',
        name, age
    });
}

// Function DELETE
const usersDelete =  (req = request, res = response) => {
    res.json( {
        ok: 'DELETE by controller'
    });
}
// Function PATCH
const usersPatch =  (req = request, res = response) => {
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