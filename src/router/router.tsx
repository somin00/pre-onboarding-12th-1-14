import { createBrowserRouter } from "react-router-dom";
import { Signup } from "../pages/Signup";
import { Signin } from "../pages/Signin";
import { Home } from "../pages/Home";
import { TodoList } from "../pages/TodoList";

export const pathsObj = {
  signup: "/signup",
  signin: "/signin",
  todo: "/todo",
} as const;

export const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
    children: [
      {
        path: pathsObj.signup,
        element: <Signup />,
      },
      {
        path: pathsObj.signin,
        element: <Signin />,
      },
      {
        path: pathsObj.todo,
        element: <TodoList />,
      },
    ],
  },
]);
