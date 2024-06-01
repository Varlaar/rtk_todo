import { RouteObject } from 'react-router-dom';
import { HomePage } from './home';

export const homeRoute = (path: string): RouteObject => ({
  path,
  element: <HomePage />,
});
