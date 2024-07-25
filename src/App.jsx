import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Tutorial from './pages/Tutorial';
import RootLayout from './components/RootLayout';
import AllPage from './pages/AllPage'
import LowerPage from './pages/LowerPage'
import UpperPage from './pages/UpperPage'
import CorePage from './pages/CorePage'
import StretchingPage from './pages/StretchingPage'
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <AllPage/>,
      },
      {
        path: 'lower',
        element: <LowerPage/>,
      },
      {
        path: 'upper',
        element: <UpperPage/>,
      },
      {
        path: 'core',
        element: <CorePage/>,
      },
      {
        path: 'stretching',
        element: <StretchingPage/>,
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;