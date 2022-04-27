const express = require('express'); // importando express

const server = express();

server.use(express.json()); // Função para servidor receber informações json

const cursos = ['FullStack Master', 'Desenvolvimento de Games', 'HTML5', 'CSS'];

//CRUD --> Create, Read, Update, Delete

//  retorna um curso
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
});


// Retornar todos os cursos
server.get('/cursos', (req, res) => {
    return res.json(cursos);
});


// Criar um novo curso
server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name); // adicionando string usando função push do js

    return res.json(cursos);
});


// Atualizar curso
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});


//deletar um curso
server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;


    cursos.splice(index, 1); // função do proprio  para deletar js 
    return res.json({message : "O curso foi deletado"});
})






server.listen(3000); // servidor escutando na porta 3000 

