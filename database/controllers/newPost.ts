import {Request, Response} from 'express'
import { Posts } from "../models/posts";

const NewPost = async (req: Request, res: Response) => {

    const { nameBody, msgBody, fileBody } = req.body

    const date = new Date().toLocaleString();

    const createPosts = await Posts.create({
      name: nameBody,
      message: msgBody,
      image: fileBody,
      date: date
    })
  
    return res.json(createPosts)

}

export { NewPost }