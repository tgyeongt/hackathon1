import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './data/styles/globalstyles';

// tutorial
import RootLayout from './components/RootLayout';
import ExerciseLayout from './components/ExerciseLayout';

import AllPage from './pages/Exercise/AllPage';

import ErrorPage from './pages/Error';
import SquatPage from './pages/Exercise/SquatPage';
import LungePage from './pages/Exercise/LungePage';
import PushupPage from './pages/Exercise/PushupPage';
import ExerciseDetailPage from './components/ExerciseDetailPage';


// login
import LoginPage from './pages/Login/LoginPage';
import ForgotPasswordPage from './pages/Login/ForgotPasswordPage';
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
    ]
  },
  {
    path: 'exercise',
    element: <ExerciseLayout />,
    children: [
      {
        path: 'squat',
        element: <SquatPage />,
      },
      {
        path: 'lunge',
        element: <LungePage />,
      },
      {
        path: 'pushup',
        element: <PushupPage />,
      },
      {
        path: 'detail/:id', 
        element: <ExerciseDetailPage />
      }
    ]
  }
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
