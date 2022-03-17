import express from 'express';
// const bodyParser = require('body-parser');
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

// app.use(bodyParser.urlenconded({ extends: false }));
// require('./')

app.listen(3333, () => console.log('Server is running!'));

