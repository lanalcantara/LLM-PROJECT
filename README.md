LLM-PROJECT – Guia Turístico Virtual de Recife
Este projeto é um servidor Node.js com front-end HTML que utiliza uma LLM (Modelo de Linguagem) da API da Groq para responder perguntas como se fosse um guia turístico de Recife, Pernambuco, trazendo curiosidades históricas e culturais com simpatia.

🧠 Tecnologias Utilizadas
Node.js

Express

Axios

dotenv

HTML/CSS

JavaScript puro

API da Groq (com modelo llama3-70b-8192)

🚀 Como rodar o projeto localmente
1. Clone o repositório
bash
Copiar
Editar
git clone https://github.com/seu-usuario/LLM-PROJECT.git
cd LLM-PROJECT
2. Instale as dependências
bash
Copiar
Editar
npm install
3. Crie o arquivo .env
Crie um arquivo .env na raiz do projeto com a sua chave da API da Groq:

ini
Copiar
Editar
GROQ_API_KEY=sua_chave_api_aqui
Você pode obter uma chave em: https://console.groq.com/

4. Estrutura de pastas
pgsql
Copiar
Editar
LLM-PROJECT/
├── index.js            ← Servidor Express
├── .env                ← Variáveis de ambiente
├── package.json
├── public/
│   └── index.html      ← Front-end
5. Execute o servidor
bash
Copiar
Editar
node index.js
O servidor iniciará na porta 3000.

6. Acesse no navegador
arduino
Copiar
Editar
http://localhost:3000
💬 Como usar
Digite sua pergunta no campo de texto (ex: "Qual é a história do Marco Zero?")

Clique em "Enviar"

A resposta virá da LLM com informações turísticas e curiosidades sobre Recife
