import express from 'express';
import cors from 'cors';
import searchRouter from './router/search.js';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);

app.use('/search', searchRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.log(error);
  res.sendStatus(500);
});

app.listen(8080, function () {
  console.log('listening on 8080');
});
