const express = require('express'); // importando express

const server = express();

server.use(express.json()); // Função para servidor receber informações json

const cursos = ['FullStack Master', 'Desenvolvimento de Games', 'HTML5', 'CSS'];

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
    cursos.push(name);

    return res.json(cursos);
})








server.listen(3000); // servidor escutando na porta 3000 

