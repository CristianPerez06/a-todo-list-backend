import { Router } from 'express'

import { getExample } from '../controllers/base'

const baseRoutes = Router()

baseRoutes.get('/getExample', getExample)

export default baseRoutes
