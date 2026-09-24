const express = require('express');

const app = express();

const PORT = 3000;

const alunos = [];

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Rota Principal');
})

app.get('/alunos', (req, res) => {
    res.json(alunos);
})

app.get('/alunos/:id', (req, res) => {
    const id = Number(req.params.id)
    // console.log(typeof id)

    if(!Number.isInteger(id) || id <=0) {
        return res.status(400).json({
            mensagem: "ID Inválido"
        })
    }

    const aluno = alunos.find(aluno => {
        return aluno.id === id
    })
    if(!aluno) {
        return res.status(404).json({
            mensagem: "Aluno não encontrado"
        });
    }
    res.status(200).json(aluno);
})

let alunoId = 1;

app.post('/alunos', (req, res) => {
    // const aluno = req.body;
    console.log(req.body)

    const aluno = {
        "id": alunoId,
        "nome": req.body.nome,
        "curso": req.body.curso,
    }

    alunoId++;
    
    alunos.push(aluno)
    console.log(alunos)
    res.json(aluno);
})

app.put('/alunos', (req, res) => {
    res.send('Atualizacão do cadastro do Aluno');
})

app.delete('/alunos', (req, res) => {
    res.send('Exclusão do Aluno');
})

app.get('/cursos', (req, res) => {
    res.send('Lista de Cursos');
})

app.post('/cursos', (req, res) => {
    res.send('Cadastro de Curso');
})

app.put('/cursos', (req, res) => {
    res.send('Atualizacão do cadastro do Curso');
})

app.delete('/cursos', (req, res) => {
    res.send('Exclusão do Curso');
})







app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})