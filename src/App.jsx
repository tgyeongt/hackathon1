import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './data/styles/globalstyles';

// tutorial
import RootLayout from './components/RootLayout';

import AllPage from './pages/Exercise/AllPage';

import ErrorPage from './pages/Error';
import SquatPage from './pages/Exercise/SquatPage';
import LungePage from './pages/Exercise/LungePage';
import PushupPage from './pages/Exercise/PushupPage';
import ExerciseDetailPage from './components/ExerciseDetailPage';


// login
import LoginPage from './pages/Login/LoginPage';
import ForgotPasswordPage from './pages/Login/FindpwPage';
import SignUpPage from './pages/Login/SignUpPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AllPage />,
      },
      {
        path: 'exercise/squat',
        element: <SquatPage />,
      },
      {
        path: 'exercise/lunge',
        element: <LungePage />,
      },
      {
        path: 'exercise/pushup',
        element: <PushupPage />,
      },
      {
        path: 'exercise/detail/:id',
        element: <ExerciseDetailPage />,
      },
    ]
  },
]);

const router1 = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/find-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyles/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
