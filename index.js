require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
app.use(express.json());

// SERVIR ARQUIVOS ESTÁTICOS
app.use(express.static(path.join(__dirname, 'public')));

app.post('/pergunta', async (req, res) => {
  const pergunta = req.body.pergunta;

  try {
    const resposta = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-70b-8192',
        messages: [
          {
            role: 'system',
            content: 'Você é um guia turístico especialista em Recife, Pernambuco. Responda às perguntas com simpatia, linguagem acessível e inclua curiosidades históricas e culturais.'
          },
          {
            role: 'user',
            content: pergunta
          }
        ],
        temperature: 0.8
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({ resposta: resposta.data.choices[0].message.content });
  } catch (erro) {
    console.error('Erro ao chamar API do Groq:', erro.response?.data || erro.message);
    res.status(500).json({ erro: 'Erro ao consultar LLM.' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
// ROTA PARA A PÁGINA INICIAL