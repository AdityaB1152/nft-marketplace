const express = require('express');
const userController = require('../controllers/userControllers');

const router = express.Router();

//Router Users
router.route('/').get(userController.getAllUsers).post