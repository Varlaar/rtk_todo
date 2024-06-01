import { RouteObject } from 'react-router-dom';
import { ViewPage } from './view';

export const viewRoute = (path: string): RouteObject => ({
  path,
  element: <ViewPage />,
});
