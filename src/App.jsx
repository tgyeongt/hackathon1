import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './data/styles/globalstyles';
import RootLayout from './components/RootLayout';
import ExerciseLayout from './components/ExerciseLayout';
import AllPage from './pages/Category/AllPage';
import LowerPage from './pages/Category/LowerPage';
import UpperPage from './pages/Category/UpperPage';
import CorePage from './pages/Category/CorePage';
import StretchingPage from './pages/Category/StretchingPage';
import ErrorPage from './pages/Error';
import SquatPage from './pages/Exercise/SquatPage';
import LungePage from './pages/Exercise/LungePage';
import CalfRaisePage from './pages/Exercise/CalfRaisePage';

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
        path: 'lower',
        element: <LowerPage />,
      },
      {
        path: 'upper',
        element: <UpperPage />,
      },
      {
        path: 'core',
        element: <CorePage />,
      },
      {
        path: 'stretching',
        element: <StretchingPage />,
      }
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
        path: 'calfraise',
        element: <CalfRaisePage />,
      }
    ]
  }
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
