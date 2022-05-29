import multer from 'multer'
import path from 'path'

export default {
    dest: path.resolve(__dirname, '..', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', 'uploads'))
        },
        filename: (req, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`

            cb(null, fileName)
        }
    }),
    limits: {
        fileSize: 1024 * 1024
    }
}