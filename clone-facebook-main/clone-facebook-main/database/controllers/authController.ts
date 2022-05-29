import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import auth from '../config/auth'

const AuthUser = async (req: Request, res: Response) => {

    let { nameLogin } = req.body

    return res.json({
        user: {
            name: nameLogin
        },
        token: jwt.sign(
            {name: nameLogin},
            auth.secret,
            {expiresIn: auth.expireIn}
        )
    })
}

export { AuthUser }