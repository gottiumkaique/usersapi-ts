import express from "express"
import UsersController from "./controllers/UsersController"

const routes = express.Router()
const usersController = new UsersController()

routes.post("/create-user", usersController.createUser)
routes.get("/search-user", usersController.searchUser)

export default routes