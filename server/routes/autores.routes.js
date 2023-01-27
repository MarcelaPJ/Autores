const { getAllAutores, getOneAutor, createAutor, updateAutor, removeAutor } = require('../controllers/autores.controllers');

module.exports = (app) => {
    app.get('/api/autor', getAllAutores);
    app.get('/api/autor/:id', getOneAutor);
    app.post('/api/autor', createAutor);
    app.put('/api/autor/:id', updateAutor);
    app.delete('/api/autor/:id', removeAutor);
} 