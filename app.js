const path = require('path');

const express = require('express');

const authRoutes = require('./routes/auth.routes');

const app = express();
// Tell express to use ejs to render views and where to find my views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(authRoutes);

app.listen(3000);
