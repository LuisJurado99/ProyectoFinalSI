var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PerfumeSchema = Schema({
  marca: String,
  aroma: String,
  cantidad: Number,
  precio: Number,
  tipo: String,
  foto: String
});

module.exports = mongoose.model('Perfume', PerfumeSchema);