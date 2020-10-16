
const express = require('express');
const bodyParser = require('body-parser');
const personRouter = require('./routes/person-router');
const app = express();
const errorHandler = require('./middleware/error');
const PORT = process.env.PORT || 5000;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set routing
app.use('/api/person', personRouter);

// set error middleware
app.use(errorHandler);

// buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));