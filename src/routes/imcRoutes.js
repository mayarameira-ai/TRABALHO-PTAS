import { Router } from 'express'
import { criarRegistro } from '../controllers/imcController'

const router = Router()
router.post('/imc', criarRegistro)

export default router