const { Router } = require('express');

const { usersGet, usersPut, usersPost, usersDelete, usersPatch } = require('../controllers/users');

const router = Router ();

//GET
router.get('/', usersGet );

//PUT
router.put('/', usersPut);

//POST
router.post('/', usersPost);

//DELETE
router.delete('/', usersDelete);

//PATCH
router.patch('/', usersPatch);





module.exports = router;