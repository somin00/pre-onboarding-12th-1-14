import { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { todoApis, todoStatusObj } from '../apis/todo';
import { TodoContainer } from '../components/todo/TodoContainer';
import { TodoInput } from '../components/todo/TodoInput';
import { TodoList } from '../components/todo/TodoList';
import { useTodo } from '../hooks/useTodo';
import { pathsObj } from '../router/router';
import { AuthContext } from '../store/authContext';

export const Todo = () => {
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  const { todos, setTodos, handleSubmit, handleUpdate, handleDelete } = useTodo();

  useEffect(() => {
    if (!ctx.accessToken) navigate(pathsObj.signin);
    else {
      todoApis
        .getTodos()
        .then(res => {
          const { data, status } = res;
          if (status === todoStatusObj.get) setTodos(data);
        })
        .catch(err => console.error(err));
    }
  }, [navigate, setTodos, ctx.accessToken]);

  return (
    <TodoContainer>
      <TodoInput handleSubmit={handleSubmit} />
      <TodoList todos={todos} handleUpdate={handleUpdate} handleDelete={handleDelete} />
    </TodoContainer>
  );
};
