import { Users } from "../models/users";
import { Request, Response } from 'express'

const UserGet = async (req: Request, res: Response) => {
    let { nameLogin, passwordLogin } = req.body

    const UserOne = await Users.findOne({
        where: {name: nameLogin}
    })

    if(!UserOne?.name) {
        return res.status(203).json({error: "Nome/Senha incorreta"})
    }

    if(UserOne?.password != passwordLogin) {
        return res.status(203).json({error: "Nome/Senha incorreta"})
    }

    if (typeof window !== 'undefined') {
        localStorage.setItem("usuario", nameLogin)
    }

    return res.json(UserOne)
}

const UserPost = async (req: Request, res: Response) => {
    let {cadastName, cadastPassword} = req.body

    const UserOne = await Users.findOne({
        where: {name: cadastName}
    })

    if(UserOne?.name) {
        return res.status(203).json({error: "User ja existe"})
    }

    const createUser = await Users.create({
        name: cadastName,
        password: cadastPassword
    })

    return res.json(createUser)
}

export { UserGet, UserPost }