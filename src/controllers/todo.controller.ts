import { RequestHandler } from "express";
import { readData, writeData, updateData, removeData } from "../utils/db";

export const getTodos: RequestHandler = (_, res) => {
  const todos = readData();

  return res.json({ success: true, data: todos });
};

export const writeTodo: RequestHandler = (req, res) => {
  const content = req.body.content;

  if (!content) {
    return res.status(400).json({
      success: false,
      message: "content는 필수 값입니다.",
    });
  }

  const result = writeData(content);

  return res.json({ success: true, data: result });
};

export const updateTodo: RequestHandler = (req, res) => {
  const id = req.params.id;

  const result = updateData(id, req.body);

  return res.json({ success: true, data: result });
};

export const removeTodo: RequestHandler = (req, res) => {
  const result = removeData(req.params.id);

  if (result) {
    return res.json({ success: true });
  }

  return res.json({ success: false, error: "삭제가 실패하였습니다." });
};
