require('express-async-errors');
const express = require('express');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());
app.use('/login', require('./routes/login'));
app.use('/user', require('./routes/user'));
app.use('/categories', require('./routes/categories'));

app.use(errorMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;