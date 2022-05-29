import {Request, Response} from 'express'
import { Posts } from "../models/posts";

const Allpost = async (req: Request, res: Response) => {

    const dbUser = await Posts.findAll({
        order: [['id', 'DESC']]
    })
  
    return res.json(dbUser)
}

export { Allpost }