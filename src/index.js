const express = require('express');
const app = express();

const professores = [
    {id: 1, nome: 'guido', stack: 'backend'},
    {id: 2, nome: 'Dani', stack: 'frontend'},
    {id: 3, nome: 'Diego', stack: 'frontend'},
    {id: 4, nome: 'Vidal', stack: 'backend'},
];

app.get('/professores', (req, res) => {
        res.send(professores)
});

app.get('/professores/:id', (req, res) => {
    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(req.params.id)
    });
    res.send(professorEncontrado);
});

app.listen(3000);