const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const auth = require('./routes/auth');
const report = require('./routes/report');
const reports = require('./routes/reports');

const port = process.env.PORT || 3001;

/**
 * Cors setup
 * @type {{credentials: boolean, methods: string, exposedHeaders: string[], origin: boolean}}
 */
const corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['Access-Token'],
};
app.use(cors(corsOption));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/auth', auth);
app.use('/api/v1/report', report);
app.use('/api/v1/reports', reports);

app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;
