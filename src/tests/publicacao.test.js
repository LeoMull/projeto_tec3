const request = require('supertest');
const express = require('express');
const publicacaoController = require('../controllers/publicacaoController');
const Publicacao = require('../models/Publicacao');

jest.mock('../models/Publicacao');

const app = express();
app.use(express.json());
app.get('/publicacoes', publicacaoController.getAllPublicacoes);
app.post('/publicacoes', publicacaoController.createPublicacao);
app.put('/publicacoes/:id', publicacaoController.updatePublicacao);
app.delete('/publicacoes/:id', publicacaoController.deletePublicacao);

describe('Publicacao Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should fetch all publicacoes', async () => {
    const mockPublicacoes = [{ id: 1, titulo: 'Test' }];
    Publicacao.findAll.mockResolvedValue(mockPublicacoes);

    const response = await request(app).get('/publicacoes');

    expect(response.status).toBe(200);
    expect(response.body.publicacoes).toEqual(mockPublicacoes);
  });

  test('should create a new publicacao', async () => {
    const newPublicacao = { titulo: 'New Test' };
    Publicacao.create.mockResolvedValue(newPublicacao);

    const response = await request(app)
      .post('/publicacoes')
      .send(newPublicacao);

    expect(response.status).toBe(302); // Assuming redirect status
    expect(Publicacao.create).toHaveBeenCalledWith(newPublicacao);
  });

  test('should update an existing publicacao', async () => {
    const updatedPublicacao = { titulo: 'Updated Test' };
    Publicacao.update.mockResolvedValue([1]);

    const response = await request(app)
      .put('/publicacoes/1')
      .send(updatedPublicacao);

    expect(response.status).toBe(302); // Assuming redirect status
    expect(Publicacao.update).toHaveBeenCalledWith(updatedPublicacao, { where: { id: '1' } });
  });

  test('should delete a publicacao', async () => {
    Publicacao.destroy.mockResolvedValue(1);

    const response = await request(app).delete('/publicacoes/1');

    expect(response.status).toBe(302); // Assuming redirect status
    expect(Publicacao.destroy).toHaveBeenCalledWith({ where: { id: '1' } });
  });
});