const express = require('express');


const app = express();
const bodyParser = require('body-parser');
// 
require('./db');
require('./models/invoices');
//
const authRoutes = require('./routes/authRoutes');
const requireToken = require('./Middlewares/AuthTokenRequired');
//
app.use(bodyParser.json());
app.use(authRoutes);
//

app.get('/', requireToken, (req, res) => {
    console.log(req.user);
    res.send(req.user);
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})