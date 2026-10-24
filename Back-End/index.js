const express = require('express');
const morgan = require('morgan');
const UserRouter = require('./routes/UserRoutes');
const cors = require('cors');
const cookie_parser = require('cookie-parser');
const WaletRouter = require('./routes/WaletRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cookie_parser());
app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true
}))
app.use(morgan());
app.use('/api/user', UserRouter);
app.use('/api/walet', WaletRouter);

let port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`the app is listening to the port ${port}`);
})
