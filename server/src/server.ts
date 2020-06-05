import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); // Rota estatica, para devolver arquivos.

app.listen(3333, () => {
  console.log('Server started on http://localhost:3333/');
});
