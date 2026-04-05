import { PrismaClient } from '@prisma/client'
import { calcularIMC } from '../services/imcService'

const prisma = new PrismaClient()

export const criarRegistro = async (req, res) => {
  try {
    const { usuarioId, peso, altura } = req.body
    if (!usuarioId || !peso || !altura) {
      return res.status(400).json({ error: 'Campos obrigatórios: usuarioId, peso, altura' })
    }
    const { imc, classificacao } = calcularIMC(peso, altura)

    const registro = await prisma.registroIMC.create({
      data: { peso, altura, imc, classificacao, usuarioId },
    })

    res.json(registro)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar registro de IMC' })
  }
}