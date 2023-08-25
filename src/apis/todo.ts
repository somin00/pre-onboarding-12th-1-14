import { AxiosResponse } from 'axios';

import { todoInstance } from './config';

export const todoStatusObj = {
  get: 200,
  create: 201,
  update: 200,
  delete: 204,
} as const;

export type TodoItem = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

const getTodos = (): Promise<AxiosResponse<TodoItem[]>> => {
  return todoInstance({
    url: 'todos',
    method: 'GET',
  });
};

const createTodo = (todo: string) => {
  return todoInstance({
    url: 'todos',
    method: 'POST',
    data: {
      todo,
    },
  });
};

const updateTodo = (id: number, payload: { todo: string; isCompleted: boolean }) => {
  return todoInstance({
    url: `todos/${id}`,
    method: 'PUT',
    data: payload,
  });
};

const deleteTodo = (id: number) => {
  return todoInstance({
    url: `todos/${id}`,
    method: 'DELETE',
  });
};

export const todoApis = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
