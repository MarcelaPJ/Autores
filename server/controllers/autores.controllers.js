const Autor = require("../models/autores.model");

module.exports.getAllAutores = async (req, res) => {
    try {
        const autores = await Autor.find();
        res.json({
            message: "Se obtienen de manera exitosa todos los autores",
            autores
        });

    } catch(error) {
        res.status(500).json({
            message: "¡Oh no! Error al obtener los autores",
            error
        });
    }
}

module.exports.getOneAutor = async (req, res) => {
    try {
        const {id} = req.params;
        const autor = await Autor.findById(id);
        res.json({
            message: "Se obtiene de manera exitosa el autor",
            autor
        });

    } catch(error) {
        res.status(500).json({
            message: "¡Oh no! Error al obtener el autor",
            error
        });
    }
}

module.exports.createAutor = async (req,res) => {
    try {
        const newAutor = await Autor.create(req.body.autor);
        res.json({
            message: 'Se crea de manera exitosa el nuevo autor',
            newAutor,
        });
        
    } catch (error) {
        res.status(500).json({
            message: '¡Oh no! Error al crear el autor',
            error,
        });
    }
}

module.exports.updateAutor = async (req, res) => {
    try {
        const { params, body } = req;
        const { id } = params;
        const updatedAutor = await Autor.findByIdAndUpdate(id, body.autor, { new: true });
        res.json({
            message: 'Se actualiza de manera exitosa la información del autor',
            updatedAutor,
        });
        
    } catch (error) {
        res.status(500).json({
            message: '¡Oh no! Error al actualizar el autor',
            error,
        });
    }
}

module.exports.removeAutor = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAutor = await Autor.deleteOne({ _id: id });
        res.json({
            message: 'Se elimina de manera exitosa la información del autor',
            deletedAutor,
        });
    } catch (error) {
        res.status(500).json({
            message: '¡Oh no! Error al actualizar el autor',
            error,
        });
    }
}
