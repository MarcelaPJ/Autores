const { connect } = require('mongoose');

connect('mongodb://localhost/autores_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() =>console.log("Conectado a la base de datos"))
    .catch(err => console.log("Error al conectar a la base de datos", err))
    