import { RouteObject } from 'react-router-dom';
import { AboutPage } from './about';

export const aboutRoute = (path: string): RouteObject => ({
  path,
  element: <AboutPage />,
});
