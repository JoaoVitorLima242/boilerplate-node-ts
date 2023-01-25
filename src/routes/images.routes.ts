import { Router } from 'express'

const routes = Router()

routes.post('/', (_, res) => {
  res.status(200).json({ message: 'Api is running!' })
})

export default routes
