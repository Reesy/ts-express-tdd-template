import express from 'express';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/v1/test1', (req: express.Request, res: express.Response) =>
{
  res.json({ message: 'Hello World!' });
});

app.post('/api/v1/test1', (req: express.Request, res: express.Response) =>
{
  res.json({ message: 'Hello World!' });
});


export { app };
