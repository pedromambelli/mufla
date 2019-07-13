const mongoose = require('mongoose');
const {Schema} = mongoose;

const AlunoSchema = new Schema({
  nome : {type: String, required: true}
  , matricula : {type: Number, required: true}
  , login : {type: String, required: true}
});

module.exports = mongoose.model('Aluno', AlunoSchema);
