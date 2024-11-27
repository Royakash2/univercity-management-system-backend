import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import { globalErrorHandler } from './app/middlewares/globalerrorhandler';
import { notFound } from './app/middlewares/notfounderrorhandler';
import router from './app/routes';
import { promise } from 'zod';

const app: Application = express();

// parser

app.use(express.json());

app.use(cors());

app.use('/api/v1', router);

const test = (req: Request, res: Response) => {
 
  res.send('Hello World!');
};

app.get('/', test);

app.use(globalErrorHandler);

// not found routes
app.use(notFound);
export default app;
