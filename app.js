const express = require('express');

const authRoutes = requite('./routes/auth.routes');

const app = express();

app.use(authRoutes);

app.listen(3000);
