const { Schema, model } = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');

const autorSchema = new Schema({

    fullName: {
        type: String,
        required: [true, 'Debe ingresar el nombre del autor'],
        minlength: [3, 'El nombre del autor no puede tener menos de 3 caracteres'],
        maxlength: [50, 'El nombre del autor no puede tener más de 50 caracteres']
    },
   
    author_quote: {
        type: String,
        required: [true, 'Debe ingresar una cita del autor'],
        minlength: [3, 'La cita no puede tener menos de 3 caracteres']
    },

}, { timestamps: true });

//autorSchema.plugin(uniqueValidator, { message: '{PATH} ya existe, favor intentar con uno nuevo' });

const Autor = model('Autor', autorSchema);

module.exports = Autor;