const request = require('supertest');
const express = require('express');
const candidatoController = require('../controllers/candidatoController');
const Candidato = require('../models/Candidato');

jest.mock('../models/Candidato');

const app = express();
app.use(express.json());
app.get('/candidatos', candidatoController.getAllCandidatos);
app.post('/candidatos', candidatoController.createCandidato);
app.put('/candidatos/:id', candidatoController.updateCandidato);
app.delete('/candidatos/:id', candidatoController.deleteCandidato);

describe('Candidato Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should fetch all candidatos', async () => {
    const mockCandidatos = [{ id: 1, nomeCompleto: 'Test Candidate' }];
    Candidato.findAll.mockResolvedValue(mockCandidatos);

    const response = await request(app).get('/candidatos');

    expect(response.status).toBe(200);
    expect(response.body.candidatos).toEqual(mockCandidatos);
  });

  test('should create a new candidato', async () => {
    const newCandidato = {
      nomeCompleto: 'New Candidate',
      dataNascimento: '1990-01-01',
      email: 'new@example.com',
      nomeMae: 'Mother Name',
      cpf: '12345678900',
      identidade: 'ID123456',
      dataEmissaoIdentidade: '2010-01-01',
      orgaoEmissorIdentidade: 'SSP',
      estadoEmissorIdentidade: 'SP',
      tituloEleitoral: 'TE123456',
      serieDocumentoMilitar: 'SDM123456',
      enderecoResidencial: '123 Street',
      cidadeResidencia: 'City',
      estadoResidencia: 'State',
      telefoneContato: '1234567890',
      linkLattes: 'http://lattes.cnpq.br/1234567890',
      siape: '1234567',
      nomeCurso: 'Course Name',
      tipoCurso: 'Type',
      instituicao: 'Institution',
      anoConclusao: 2020,
      localTrabalho: 'Workplace',
      atuacao: 'Role',
      linguaInglesaLeitura: 'Advanced',
      linguaInglesaEscrita: 'Advanced',
      linguaInglesaFala: 'Advanced',
      tipoInscricao: 'Type',
      semestreIngresso: '2021/1',
      orientadorPreferencial: 'Preferred Advisor',
      segundaOpcao: 'Second Option',
      terceiraOpcao: 'Third Option',
      dedicacaoIntegral: true,
      manutencaoVinculoEmpregaticio: false,
      interesseBolsa: true,
      projetoDoutoradoMemorial: 'Project Description',
    };
    Candidato.create.mockResolvedValue(newCandidato);

    const response = await request(app)
      .post('/candidatos')
      .send(newCandidato);

    expect(response.status).toBe(302); // Assuming redirect status
    expect(Candidato.create).toHaveBeenCalledWith(newCandidato);
  });

  test('should update an existing candidato', async () => {
    const updatedCandidato = {
      nomeCompleto: 'Updated Candidate',
      dataNascimento: '1990-01-01',
      email: 'updated@example.com',
      nomeMae: 'Updated Mother Name',
      cpf: '12345678900',
      identidade: 'ID123456',
      dataEmissaoIdentidade: '2010-01-01',
      orgaoEmissorIdentidade: 'SSP',
      estadoEmissorIdentidade: 'SP',
      tituloEleitoral: 'TE123456',
      serieDocumentoMilitar: 'SDM123456',
      enderecoResidencial: '123 Street',
      cidadeResidencia: 'City',
      estadoResidencia: 'State',
      telefoneContato: '1234567890',
      linkLattes: 'http://lattes.cnpq.br/1234567890',
      siape: '1234567',
      nomeCurso: 'Course Name',
      tipoCurso: 'Type',
      instituicao: 'Institution',
      anoConclusao: 2020,
      localTrabalho: 'Workplace',
      atuacao: 'Role',
      linguaInglesaLeitura: 'Advanced',
      linguaInglesaEscrita: 'Advanced',
      linguaInglesaFala: 'Advanced',
      tipoInscricao: 'Type',
      semestreIngresso: '2021/1',
      orientadorPreferencial: 'Preferred Advisor',
      segundaOpcao: 'Second Option',
      terceiraOpcao: 'Third Option',
      dedicacaoIntegral: true,
      manutencaoVinculoEmpregaticio: false,
      interesseBolsa: true,
      projetoDoutoradoMemorial: 'Project Description',
    };
    Candidato.update.mockResolvedValue([1]);

    const response = await request(app)
      .put('/candidatos/1')
      .send(updatedCandidato);

    expect(response.status).toBe(302); // Assuming redirect status
    expect(Candidato.update).toHaveBeenCalledWith(updatedCandidato, { where: { id: '1' } });
  });

  test('should delete a candidato', async () => {
    Candidato.destroy.mockResolvedValue(1);

    const response = await request(app).delete('/candidatos/1');

    expect(response.status).toBe(302); // Assuming redirect status
    expect(Candidato.destroy).toHaveBeenCalledWith({ where: { id: '1' } });
  });
});