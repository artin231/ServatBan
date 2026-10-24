const express = require('express');
const Router = express.Router();
const WaletHandler = require('../handlers/WaletHandler');
const auth = require('../middleware/auth');

let walet_handler = new WaletHandler();

Router.post('/insertWalet',auth, walet_handler.InsertWalet);

Router.post('/insertChange',auth, walet_handler.InsertChange);

Router.get('/get_walets',auth, walet_handler.GetWalets);

Router.post('/get_changes',auth, walet_handler.getChanges);

Router.delete('/delete_walet',auth, walet_handler.DeleteWalet);

Router.post('/get_walet',auth, walet_handler.GetWalet);

module.exports = Router;
