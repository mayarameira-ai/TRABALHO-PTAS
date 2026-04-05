import express from 'express'
import imcRoutes from '../routes/imcRoutes'

const app = express()
app.use(express.json())
app.use('/api', imcRoutes)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})