import express = require('express');
import path = require('path');
import {router} from './routes';

const app = express();
const port = 3000;

app.use('/', express.static(path.resolve('public')));
app.use('/css', express.static(path.resolve('node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.resolve('node_modules/jquery/dist')));

app.use(router);

app.listen(port, () => {
  console.log(`Express listening at http://localhost:${port}`);
});
