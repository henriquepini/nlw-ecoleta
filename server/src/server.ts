import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); // Rota estatica, para devolver arquivos.

app.use(errors());

app.listen(3333, () => {
  console.log('Server started on http://192.168.0.109:3333/');
});
