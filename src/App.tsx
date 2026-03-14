import { createBrowserRouter, RouterProvider } from 'react-router';
import { Auth, Products } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Auth,
  },
  {
    path: '/products',
    Component: Products,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
