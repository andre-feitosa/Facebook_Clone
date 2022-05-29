import {Request, Response} from 'express'
import fs from 'fs'
const imgurUploader = require('imgur-uploader')

const FileController = async (req: Request, res: Response) =>{

    var urlFile = await imgurUploader(fs.readFileSync(`database/uploads/${req.file?.filename}`), {title: 'filepost'})

    return res.json(urlFile.link);
}

export { FileController }