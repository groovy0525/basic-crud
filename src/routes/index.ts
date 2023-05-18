import { Router } from "express"

import todosRouter from "./todos"

const rootRouter = Router()

rootRouter.use("/todos", todosRouter)

export default rootRouter
