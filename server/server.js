import path from 'path';
import compression from 'compression';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import config from './config/main';
import APIrouter from './router';

const isProduction = config.env === 'production';
const app = express();

app.listen(config.port, () =>
  console.info(`Server running in ${app.get('env')} on port ${config.port}`) // eslint-disable-line no-console
);

app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(morgan(isProduction ? 'combined' : 'dev'));

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(config.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
});

app.use(cors());

APIrouter(app);
