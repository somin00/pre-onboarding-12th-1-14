import { FormEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pathsObj } from "../router/router";
import { todoApis, TodoItem, todoStatusObj } from "../apis/todo";

export const Todo = () => {
  const navigate = useNavigate();

  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) navigate(pathsObj.signin);
    else {
      todoApis
        .getTodos()
        .then((res) => {
          const { data, status } = res;
          if (status === todoStatusObj.get) setTodos(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const payload = new FormData(e.currentTarget).get("todo");

    if (typeof payload === "string") {
      todoApis
        .createTodo(payload)
        .then((res) => {
          const { data, status } = res;

          if (status === todoStatusObj.create)
            setTodos((prev) => [...prev, data]);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section>
      <h1>Todo Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" data-testid="new-todo-input" name="todo" />
        <button type="submit" data-testid="new-todo-add-button">
          추가
        </button>
      </form>

      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" />
              <span>{todo.todo}</span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};
