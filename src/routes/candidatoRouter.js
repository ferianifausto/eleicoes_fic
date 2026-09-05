import { Router } from "express";
import { candidatos } from "../dados/candidatos.js";

const candidatoRouter = Router();

// Rota para buscar todos os candidatos
candidatoRouter.get('/candidato', (req, res) => {
    res.json(candidatos)
})

// Rota para buscar um candidato pelo número da urna
candidatoRouter.get('/candidato/:id', (req, res) => {
    const numero = parseInt(req.params.id)
    const candidato = candidatos.find(cand => cand.numeroUrna === numero)
    if (candidato) {
        res.status(200)
        res.json(candidato)
    } else {
        res.status(404).json({ error: 'Candidato não encontrado' })
    }
})

export { candidatoRouter }

