import knex from "../database/connection"
import { Request, Response } from "express"

class UsersController {
    async createUser(req: Request, res: Response) {
        const { name, email, password } = req.body
        const user = {name, email, password}

        const trx = await knex.transaction()

        const insertedUsers = await trx("users").insert({...user}).catch(err => {
            return res.json(err)
        })

        await trx.commit()

        return res.json({...user})
    }

    async searchUser(req: Request, res: Response) {
        const { email } = req.body

        const trx = await knex.transaction()

        const user = await trx("users").select("*").where({email})

        await trx.commit()
        
        return res.json({
            exists: email === user[0].email ? "Usuário encotrado" : "Usuário não encontrado"
        })
    }
}

export default UsersController