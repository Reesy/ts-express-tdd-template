import express from 'express';
import { config } from './config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(config.port, () =>
{
  console.log(`Server listening on port ${config.port}`);
});

app.get('/api/v1/test1', (req: express.Request, res: express.Response) =>
{
  res.json({ message: 'Hello World!' });
});

app.post('/api/v1/test1', (req: express.Request, res: express.Response) =>
{
  res.json({ message: 'Hello World!' });
});