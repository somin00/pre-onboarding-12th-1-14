import { FC, PropsWithChildren } from 'react';

import { TodoItem } from '../../apis/todo';

import { HandleDelete, HandleUpdate, Todo } from './TodoCard';

type Props = {
  todos: TodoItem[];
  handleUpdate: HandleUpdate;
  handleDelete: HandleDelete;
};

export const TodoList: FC<PropsWithChildren<Props>> = ({ todos, handleUpdate, handleDelete }) => {
  return (
    <>
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
    </>
  );
};
