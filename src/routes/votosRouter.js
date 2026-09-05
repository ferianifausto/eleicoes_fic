import { Router } from "express";
import { votos } from "../dados/votos.js";

const votosRouter = Router();

// Rota para buscar todos os votos
votosRouter.get('/votos', (req, res) => {
    res.json(votos)
})

// Rota para buscar um candidato pelo número da urna
// votosRouter.get('/votos/:id', (req, res) => {
//     const numero = parseInt(req.params.id)
//     const candidato = candidatos.find(cand => cand.numeroUrna === numero)
//     if (candidato) {
//         res.status(200)
//         res.json(candidato)
//     } else {
//         res.status(404).json({ error: 'Candidato não encontrado' })
//     }
// })

export { votosRouter }