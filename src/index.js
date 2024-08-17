const express = require('express');
const app = express();
const candidatoRoutes = require('./routes/candidatoRoutes');
const processoSeletivoRoutes = require('./routes/processoRoutes');
const publicacaoRoutes = require('./routes/publicacaoRoutes');

app.use(express.json());

// Registrando as rotas
app.use('/candidatos', candidatoRoutes);
app.use('/processo-seletivo', processoSeletivoRoutes);
app.use('/publicacoes', publicacaoRoutes);

// Porta onde o servidor vai rodar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
