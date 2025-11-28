import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/_health', (req, res) => res.json({status: 'ok'}));

app.get('/', (req, res) => {
  res.json({message: 'Sistema POS SaaS - Backend'});
});

export default app;
