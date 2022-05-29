import {Router} from 'express'
import multer from 'multer'

import multerConfig from './config/multer'
import { FileController } from './controllers/FileController'
import { NewPost } from './controllers/newPost'
import { UserGet, UserPost} from './controllers/users'
import { Allpost } from './controllers/allpost'
import { AuthUser } from './controllers/authController'

const router = Router()

router.post('/', UserGet)
router.post('/cadastro', UserPost)
router.post('/teste', multer(multerConfig).single('file'), FileController)
router.post('/newpost', NewPost)
router.post('/allpost', Allpost)
router.post('/auth', AuthUser)

export default router