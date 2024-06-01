import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '@pages/error';
import { homeRoute } from '@pages/home';
import { createRoute } from '@pages/create';
import { aboutRoute } from '@pages/about';
import { editRoute } from '@pages/edit';
import { viewRoute } from '@pages/view';
import { Layout } from '@widgets/layout';

export const createRouter = () =>
  createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        homeRoute('/'),
        createRoute('/create'),
        aboutRoute('/about'),
        editRoute('/edit/:id'),
        viewRoute('/view/:id'),
      ],
    },
  ]);
