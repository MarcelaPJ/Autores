const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose.config');

const autoresRoute = require('./server/routes/autores.routes');

autoresRoute(app);

app.listen(8000, () => console.log("El servidor está listo en el puerto 8000"));