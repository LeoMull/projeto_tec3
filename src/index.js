const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const sequelize = require('./models/modelsIniti'); // Importando o initModels.js para garantir que os modelos sejam definidos e os relacionamentos sejam configurados

// Configuração do Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'views')); // Use o caminho relativo ao `src`
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true })); // Para dados de formulários (x-www-form-urlencoded)
app.use(express.json()); 

const candidatoRoutes = require('./routes/candidatoRoutes');
const processoSeletivoRoutes = require('./routes/processoRoutes');
const publicacaoRoutes = require('./routes/publicacaoRoutes');

// Registrando as rotas
app.use('/candidatos', candidatoRoutes);
app.use('/processoSeletivo', processoSeletivoRoutes);
app.use('/publicacoes', publicacaoRoutes);

// Rota para a página inicial
app.get('/', (req, res) => {
    res.render('processoSeletivo/index');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

