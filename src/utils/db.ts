import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

interface Todo {
  readonly id: number;
  content: string;
  done: boolean;
}

export const readData = (): Todo[] => {
  try {
    const todos = readFileSync(resolve("db", "todos.json"), {
      encoding: "utf-8",
    });

    return JSON.parse(todos);
  } catch (error) {
    throw new Error("get todos 에러");
  }
};

export const writeData = (content: string) => {
  try {
    const todos = readData();

    const newTodo = {
      id: Date.now(),
      content,
      done: false,
    };

    todos.push(newTodo);

    const newTodos = todos.filter((todo) => todo);

    writeFileSync(resolve("db", "todos.json"), JSON.stringify(newTodos), {
      encoding: "utf-8",
    });

    return newTodo;
  } catch (error) {
    throw new Error("write todo 에러");
  }
};

export const updateData = (id: string, todo: Todo) => {
  try {
    const todos = readData();

    const index = todos.findIndex((el) => el.id === Number(id));

    if (index === -1) {
      throw new Error("해당하는 todo가 존재하지 않습니다.");
    }

    const newTodo = {
      ...todos[index],
      ...todo,
    };

    todos[index] = newTodo;

    writeFileSync(resolve("db", "todos.json"), JSON.stringify(todos), {
      encoding: "utf-8",
    });

    return newTodo;
  } catch (error) {
    throw new Error("update todo 에러");
  }
};

export const removeData = (id: string) => {
  try {
    const todos = readData();

    const index = todos.findIndex((el) => el.id === Number(id));

    if (index === -1) {
      throw new Error("해당하는 todo가 존재하지 않습니다.");
    }

    todos.splice(index, 1);

    writeFileSync(resolve("db", "todos.json"), JSON.stringify(todos), {
      encoding: "utf-8",
    });

    return true;
  } catch (error) {
    throw new Error("remove todo 에러");
  }
};
