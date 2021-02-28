import express from 'express';
import cors from 'cors';
import config from './src/config/config';
import { RouterController } from './src/routes';

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use('/', RouterController);

app.listen(config.port)
