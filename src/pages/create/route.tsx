import { RouteObject } from 'react-router-dom';
import { CreatePage } from './create';

export const createRoute = (path: string): RouteObject => ({
  path,
  element: <CreatePage />,
});
