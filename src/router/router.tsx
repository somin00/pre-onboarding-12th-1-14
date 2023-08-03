import { createBrowserRouter } from "react-router-dom";
import { Signup } from "../pages/Signup";
import { Signin } from "../pages/Signin";
import { TodoList } from "../components/TodoList";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/wanted-pre-onboarding-frontend",
    element: <Home />,
    children: [
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/todo",
        element: <TodoList />,
      },
    ],
  },
]);
