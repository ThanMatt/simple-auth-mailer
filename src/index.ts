import express, { Response, Request } from 'express'
import cors from 'cors'
import { router as AuthRoutes } from './routes/AuthRoutes'
import sgMail from '@sendgrid/mail'
require('dotenv').config()

const app = express()

app.use(express.json())

app.use(cors())

app.listen('5000', () => {
  console.log('Auth Mailer online')
})

app.get('/', (_, res: Response) => {
  return res.status(200).send({ message: 'OK!' })
})

sgMail.setApiKey(process.env.SENDGRID_API_TOKEN)

app.use('/auth', AuthRoutes)
