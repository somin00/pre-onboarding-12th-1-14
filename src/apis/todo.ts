import { todoInstance } from './config';
import { AxiosResponse } from 'axios';

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
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });
};

const createTodo = (todo: string) => {
  return todoInstance({
    url: 'todos',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      // 'Content-Type': 'application/json',
    },
    data: {
      todo,
    },
  });
};

const updateTodo = (id: number, payload: { todo: string; isCompleted: boolean }) => {
  return todoInstance({
    url: `todos/${id}`,
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      // 'Content-Type': 'application/json',
    },
    data: payload,
  });
};

const deleteTodo = (id: number) => {
  return todoInstance({
    url: `todos/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });
};

export const todoApis = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
