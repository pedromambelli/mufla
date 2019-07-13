//Requires
const express = require('express');
const app = express();
const morgan = require('morgan');
const {mongoose} = require('./database');

// Settings
app.set('port', 3000);


// Middlewares

app.use(morgan('dev'));
app.use(express.json());

// Routes

app.use('/mufla_api/alunos' , require('./routes/aluno.routes'));

// Starting Server
app.listen(app.get('port'), () => {
  console.log("Servidor rodando na porta", app.get('port'));
});
