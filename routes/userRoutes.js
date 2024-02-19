const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, deleteUser, updateUser, createUser } = require('../controllers/user')

router.route('/users')
    .get(getAllUsers);

router.route('/user/:id')
    .get(getUserById)
    .post(createUser)
    .delete(deleteUser)
    .put(updateUser);

module.exports = router;
//mdp=CXp6dwnXSrHrvnmIj