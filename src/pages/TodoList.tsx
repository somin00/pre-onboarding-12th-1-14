import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { todoApis, todoStatusObj } from '../apis/todo';
import { Todo } from '../components/Todo';
import { useTodo } from '../hooks/useTodo';
import { pathsObj } from '../router/router';

export const TodoList = () => {
  const navigate = useNavigate();
  const { todos, setTodos, handleSubmit, handleUpdate, handleDelete } = useTodo();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) navigate(pathsObj.signin);
    else {
      todoApis
        .getTodos()
        .then(res => {
          const { data, status } = res;
          if (status === todoStatusObj.get) setTodos(data);
        })
        .catch(err => console.log(err));
    }
  }, []);

  return (
    <section
      style={{
        display: 'grid',
        gap: '10px',
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
          <Todo
            key={todo.id}
            todo={todo}
            idx={idx}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </section>
  );
};
