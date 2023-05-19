import { Router } from "express";

import * as todosCtrl from "../controllers/todo.controller";

const router = Router();

router.get("/", todosCtrl.getTodos);

router.post("/", todosCtrl.writeTodo);

router.put("/:id", todosCtrl.updateTodo);

router.delete("/:id", todosCtrl.removeTodo);

export default router;
