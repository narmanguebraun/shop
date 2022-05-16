const path = require('path');

const express = require('express');

const db = require('./data/database');
const authRoutes = require('./routes/auth.routes');

const app = express();
// Tell express to use ejs to render views and where to find my views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.use(authRoutes);

db.connectToDatabase()
.then(function() {
  app.listen(3000);
})
.catch(function(error){
  console.log('failed to connect to the database.');
  console.log(error);
});

app.listen(3000);
