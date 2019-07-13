const express = require('express');
const router = express.Router();
const aluno = require('../controllers/aluno.controller');

router.get('/', aluno.getAlunos);
router.get('/:id', aluno.getAluno);
router.post('/', aluno.createAluno);
router.put('/:id', aluno.editAluno);
router.delete('/:id', aluno.deleteAluno);


module.exports = router;
