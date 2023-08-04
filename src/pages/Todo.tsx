import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pathsObj } from "../router/router";
import { todoApis, TodoItem } from "../apis/todo";

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
          if (status === 200) setTodos(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li>
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
