import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './data/styles/globalstyles';

// tutorial
import RootLayout from './components/RootLayout';
import TutorialPage from './pages/Exercise/TutorialPage';
import ErrorPage from './pages/Error';
import SquatPage from './pages/Exercise/SquatPage';
import LungePage from './pages/Exercise/LungePage';
import PushupPage from './pages/Exercise/PushupPage';
import ExerciseDetailPage from './components/ExerciseDetailPage';


// login
import LoginPage from './pages/Login/LoginPage';
import ForgotPasswordPage from './pages/Login/FindpwPage';
import SignUpPage from './pages/Login/SignUpPage';

// store
import Store from './pages/Store/Store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TutorialPage />,
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

const router2 = createBrowserRouter([
  {
    path: '/',
    element: <Store />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyles/>
      <RouterProvider router={router2} />
    </>
  );
}

export default App;
