const request = require('supertest');
const express = require('express');
const processoController = require('../controllers/processoController');
const ProcessoSeletivo = require('../models/ProcessoSeletivo');

jest.mock('../models/ProcessoSeletivo');

const app = express();
app.use(express.json());
app.get('/processos', processoController.getAllProcessosSeletivos);
app.post('/processos', processoController.createProcessoSeletivo);
app.put('/processos/:id', processoController.updateProcessoSeletivo);
app.delete('/processos/:id', processoController.deleteProcessoSeletivo);

describe('Processo Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should fetch all processos seletivos', async () => {
    const mockProcessos = [{ id: 1, ano: 2023, semestre: 1 }];
    ProcessoSeletivo.findAll.mockResolvedValue(mockProcessos);

    const response = await request(app).get('/processos');

    expect(response.status).toBe(200);
    expect(response.body.processos).toEqual(mockProcessos);
  });

  test('should create a new processo seletivo', async () => {
    const newProcesso = { ano: 2023, semestre: 1, numVagas: 10, porcentagemCota: 50 };
    ProcessoSeletivo.create.mockResolvedValue(newProcesso);

    const response = await request(app)
      .post('/processos')
      .send(newProcesso);

    expect(response.status).toBe(302); // Assuming redirect status
    expect(ProcessoSeletivo.create).toHaveBeenCalledWith(newProcesso);
  });

  test('should update an existing processo seletivo', async () => {
    const updatedProcesso = { ano: 2023, semestre: 2, numVagas: 15, porcentagemCota: 60 };
    ProcessoSeletivo.update.mockResolvedValue([1]);

    const response = await request(app)
      .put('/processos/1')
      .send(updatedProcesso);

    expect(response.status).toBe(302); // Assuming redirect status
    expect(ProcessoSeletivo.update).toHaveBeenCalledWith(updatedProcesso, { where: { id: '1' } });
  });

  test('should delete a processo seletivo', async () => {
    ProcessoSeletivo.destroy.mockResolvedValue(1);

    const response = await request(app).delete('/processos/1');

    expect(response.status).toBe(302); // Assuming redirect status
    expect(ProcessoSeletivo.destroy).toHaveBeenCalledWith({ where: { id: '1' } });
  });
});