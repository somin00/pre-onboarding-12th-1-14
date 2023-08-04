import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { pathsObj } from "../router/router";
import { todoApis, TodoItem, todoStatusObj } from "../apis/todo";
import styled from "@emotion/styled";

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

  const updateTodoStatus = (data: TodoItem, idx: number) => {
    const { id, todo, isCompleted } = data;
    todoApis
      .updateTodo(id, { todo, isCompleted: !isCompleted })
      .then((res) => {
        const { data, status } = res;
        if (status === todoStatusObj.update) {
          const newState = [...todos];
          newState[idx] = data;
          setTodos(newState);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section
      style={{
        display: "grid",
        gap: "10px",
      }}
    >
      <h1>Todo Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" data-testid="new-todo-input" name="todo" />
        <button type="submit" data-testid="new-todo-add-button">
          추가
        </button>
      </form>

      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, idx) => (
          <StyledTodoItem key={todo.id}>
            <label>
              <input
                type="checkbox"
                onChange={() => updateTodoStatus(todo, idx)}
                checked={todo.isCompleted}
              />
              <span>{todo.todo}</span>
            </label>
            <div>
              <button data-testid="modify-button">수정</button>
              <button data-testid="delete-button">삭제</button>
            </div>
          </StyledTodoItem>
        ))}
      </ul>
    </section>
  );
};

const StyledTodoItem = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
