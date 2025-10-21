import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import HeroPage from '../pages/HeroPage';
import Services from '../pages/Services';
import ServiceDetail from '../pages/ServiceDetail';

// Define all application routes here
export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/hero',
    element: <HeroPage />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/services/:slug',
    element: <ServiceDetail />,
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