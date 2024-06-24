import { useMemo } from 'react';
import { useRoutes } from 'react-router-dom';

import { AuthenticatedPage } from '../../shared/layouts/authenticated/authenticated-page';
import { toRouter } from './mappers/to-router';
import { ROUTES } from './routes/routes';

export function Router() {
  const { routes } = useMemo(
    () => ({
      routes: toRouter(ROUTES),
    }),
    [],
  );

  return useRoutes([
    {
      element: <AuthenticatedPage />,
      children: routes,
    },
  ]);
}
