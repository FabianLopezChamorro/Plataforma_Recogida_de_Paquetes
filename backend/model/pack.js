const mongoose = require('mongoose')
const Schema = mongoose.Schema
let packSchema = new Schema({
  fecha_ingreso: {
    type: Date
  },
  hora: {
    type: Date
  },
  ancho: {
    type: Number
  },
  alto: {
    type: Number
  },
  peso: {
    type: Number
  },
  direccion_recogida: {
    type: String
  },
  ciudad_recogida: {
    type: String
  },
  nombre_destinario: {
    type: String
  },
  nit_destinatario: {
    type: Number
  },
  direccion_entrega: {
    type: String
  },
  ciudad_entrega: {
    type: String
  }
}, {
    collection: 'pack'
  })
module.exports = mongoose.model('Pack', packSchema)