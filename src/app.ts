import mongoose from './services/mongoose';
import { auth, errorHandler } from './services/express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import cors from 'cors';
import api from './api';
import { migrate } from './migrations';

const app = express();

mongoose.connect(process.env.MONGODB_URI || '');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(auth());

app.use('/api', api);
app.get('/ping', (req, res) => res.status(200).json({ pong: true }));

// eslint-disable-next-line no-unused-vars
app.use(errorHandler);
// app.use(notFoundHandler);

const server = http.createServer(app);
setImmediate(() => {
  server.listen(process.env.PORT, () => {
    console.log('Express server listening on http://localhost:%s/', process.env.PORT);
  });
});

if (process.env.MIGRATION) {
  migrate()
    .then(() => {
      throw new Error('Migration complied');
    })
    .catch(e => {
      throw new Error(e);
    });
}

export default app;
