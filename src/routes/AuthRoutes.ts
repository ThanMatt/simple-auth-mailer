import { Router, Request, Response } from 'express'

const router = Router()

interface RequestBody extends Request {
  body: {
    [key: string]: string | undefined
  }
}

router.post(
  '/confirmation',
  (req: RequestBody, res: Response): Response => {
    const { email } = req.body

    if (email) {
      console.log(`Email just registered: ${email}`)
      return res.status(200).send({ message: 'Email sent' })
    }
    return res.status(422).send({ message: 'No email provided' })
  }
)

router.post(
  '/login-request',
  (req: RequestBody, res: Response): Response => {
    const { email } = req.body

    console.log(req.body)

    if (email) {
      console.log('Login request sent')
      return res.status(200).send({ message: 'mailer sent' })
    }
    return res.status(422).send({ message: 'No email provided' })
  }
)

router.post(
  '/forgot-password',
  (req: RequestBody, res: Response): Response => {
    const { email, token } = req.body

    if (email && token) {
      console.log(email, token)

      return res.status(200).send({ message: 'Forgot password mailer sent' })
    }

    return res.status(422).send({ message: 'No email or token was provided' })
  }
)

export { router }
