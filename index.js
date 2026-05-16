const express = require('express')
const cors = require('cors')
const { Sequelize, DataTypes } = require('sequelize')

// CONFIGURANDO CONEXÃO COM BANCO DE DADOS.
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// ORM - MAPEANDO CLASSE PARA TABELA NO BANCO DE DADOS.
const Alunos = sequelize.define('Alunos', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email_instituicional: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    matricula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    turma: {
        type: DataTypes.STRING,
        allowNull: false
    },
    turno: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Professores = sequelize.define('Professores', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email_instituicional: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    rf: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    especialidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    turmas_de_aulas: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Cursos = sequelize.define('Cursos', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    
    },
    carga_horaria: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    modalidade: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    vagas: {
        type: DataTypes.STRING, 
        allowNull: false
    }
})

// CONFIGURANDO SERVIDOR EXPRESS.
const app = express()
app.use(cors()) 
app.use(express.json()) 

const port = 3000

// DEFININDO ROTAS GET.
app.get('/alunos', async (req, res) => {
    const todosOsAlunos = await Alunos.findAll()
    res.json(todosOsAlunos)
})

app.get('/professores', async (req, res) => {
    const todosOsProfessores = await Professores.findAll()
    res.json(todosOsProfessores)
})

app.get('/cursos', async (req, res) => {
    const todosOsCursos = await Cursos.findAll()
    res.json(todosOsCursos)
})

// DEFININDO ROTAS POST.
app.post('/alunos', async (req, res) => {
    try {
        const { nome, email_instituicional, matricula, turma, turno } = req.body
        
        const novoAluno = await Alunos.create({ nome, email_instituicional, matricula, turma, turno })

        res.status(201).json({
            mensagem: 'Novo aluno cadastrado.',
            Aluno: novoAluno
        })
    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar aluno. Verifique se o e-mail ou matrícula já existe.',
            detalhe: erro.message
        })
    }
})

app.post('/professores', async (req, res) => {
    try {
        const { nome, email_instituicional, rf, especialidade, turmas_de_aulas } = req.body
        const novoProfessor = await Professores.create({ nome, email_instituicional, rf, especialidade, turmas_de_aulas })

        res.status(201).json({
            mensagem: 'Novo professor cadastrado.', // CORRIGIDO: Mensagem de retorno
            Professor: novoProfessor
        })
    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar professor. Verifique se o e-mail ou RF já existe.',
            detalhe: erro.message
        })
    }
})

app.post('/cursos', async (req, res) => {
    try {
        const { titulo, descricao, carga_horaria, modalidade, vagas } = req.body

        const novoCurso = await Cursos.create({ titulo, descricao, carga_horaria, modalidade, vagas })

        res.status(201).json({
            mensagem: 'Novo curso criado.',
            Curso: novoCurso
        })
    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar o curso. Verifique se o título já existe.',
            detalhe: erro.message
        })
    }
})

// INICIAR API E CONECTAR AO BANCO DE DADOS 
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`👌 Servidor rodando em http://localhost:${port}`)
        console.log('✳️ Banco de dados sincronizado.')
    })
}).catch((erro) => {
    console.error('❌ Erro ao conectar ou sincronizar com o banco de dados:', erro)
})
