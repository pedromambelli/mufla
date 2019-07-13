const alunoCtrl = {}
const Aluno = require('../models/aluno');

// List method
alunoCtrl.getAlunos = async (req, res) => {

  const alunos = await Aluno.find();
  res.json(alunos);
};


// Create method
alunoCtrl.getAluno = async (req, res) => {
  const aluno = await Aluno.findById(req.params.id);
  res.json(aluno);
};

// View method
alunoCtrl.createAluno = async (req, res) => {
  const aluno = new Aluno(req.body);
  await aluno.save();
  res.json({
    status:"Criado com sucesso"
  });
};


// Edit method
alunoCtrl.editAluno = async (req, res) => {
  const { id } = req.params;
  const aluno = {
    nome: req.body.nome
    , matricula: req.body.matricula
    , login: req.body.login
  };
  await Aluno.findByIdAndUpdate(id, {$set: aluno}, {new:true});
  res.json({
    status:"Editado com sucesso"
  });
};

// Delete method
alunoCtrl.deleteAluno =  async(req, res) => {
  const { id } = req.params;
  await Aluno.findByIdAndRemove(id);
  res.json({
    status:"Removido com sucesso"
  });
};


module.exports = alunoCtrl;
