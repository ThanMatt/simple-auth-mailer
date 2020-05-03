import express, { Response, Request } from 'express'
import cors from 'cors'
import { router as AuthRoutes } from './routes/AuthRoutes'

const app = express()

app.use(express.json())

app.use(cors())

app.listen('5000', () => {
  console.log('Auth Mailer online')
})

app.get('/', (_, res: Response) => {
  return res.status(200).send({ message: 'OK!' })
})

app.use('/auth', AuthRoutes)
