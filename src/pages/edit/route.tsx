import { RouteObject } from 'react-router-dom';
import { EditPage } from './edit';

export const editRoute = (path: string): RouteObject => ({
  path,
  element: <EditPage />,
});
