const express = require('express');
const Router = express.Router();
const UserHandler = require('../handlers/UserHandler');
const user_handler = new UserHandler();
const auth = require('../middleware/auth');

Router.post('/login', user_handler.Login);

Router.post('/signup', user_handler.SignUp);

Router.get('/profile', auth, user_handler.Profile);

Router.get('/logout', auth, user_handler.LogOut);

module.exports = Router;
