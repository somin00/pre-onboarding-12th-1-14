import { HandleUpdate } from "../components/Todo";
import { todoApis, TodoItem, todoStatusObj } from "../apis/todo";
import { FormEventHandler, useState } from "react";

export const useTodo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

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

  const handleUpdate: HandleUpdate = (e, data, idx) => {
    const type = e.currentTarget.type;
    const { id, todo, isCompleted } = data;
    let payload;
    if (type === "checkbox") payload = { ...data, isCompleted: !isCompleted };
    if (type === "button") payload = { ...data, todo };

    payload &&
      todoApis
        .updateTodo(id, payload)
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

  const handleDelete = (id: number, idx: number) => {
    todoApis
      .deleteTodo(id)
      .then((res) => {
        const { status } = res;
        if (status === todoStatusObj.delete) {
          let newState = [...todos];
          delete newState[idx];
          setTodos(newState.filter((todo) => todo !== undefined));
        }
      })
      .catch((err) => console.log(err));
  };

  return {
    todos,
    setTodos,
    handleSubmit,
    handleUpdate,
    handleDelete,
  };
};
