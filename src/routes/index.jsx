import { Route } from 'react-router-dom';
import Home from '../pages/Home';

// Define all application routes here
export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  

  // Add more routes as needed
  // Example:
  // {
  //   path: '/about',
  //   element: <About />,
  // },
];

// Helper function to generate Route components
export const renderRoutes = () => {
  return routes.map((route) => (
    <Route 
      key={route.path} 
      path={route.path} 
      element={route.element}
    />
  ));
};

export default renderRoutes;