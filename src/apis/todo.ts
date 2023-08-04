import { axiosInstance } from "./config";
import { AxiosResponse } from "axios";

export type TodoItem = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

const getTodos = (): Promise<AxiosResponse<TodoItem[]>> => {
  return axiosInstance({
    url: "todos",
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const todoApis = {
  getTodos,
};
