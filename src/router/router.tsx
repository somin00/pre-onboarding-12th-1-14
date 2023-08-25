import { createBrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from 'pages/ErrorBoundary';
import { Home } from 'pages/Home';
import { Signin } from 'pages/Signin';
import { Signup } from 'pages/Signup';
import { Todo } from 'pages/Todo';

export const pathsObj = {
  signup: '/signup',
  signin: '/signin',
  todo: '/todo',
} as const;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorBoundary />,
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
        element: <Todo />,
      },
    ],
  },
]);
