import { Navigate, Outlet } from 'react-router-dom';
import { ERoutesPath } from '../domain/enums/routes-path.enum';
import { IRoute } from '../domain/interfaces/route.interface';
import { StreamList } from '../../../modules/streams/pages/list/stream-list';
import { StreamCreate } from '../../../modules/streams/pages/create/stream-create';
import { StreamUpdate } from '../../../modules/streams/pages/update/product-update';

export const ROUTES: Array<IRoute> = [
  {
    name: 'Redirect',
    hidden: true,
    path: '*',
    element: <Navigate to={ERoutesPath.STREAMS} />,
  },
  {
    name: 'Lives',
    element: <Outlet />,
    path: ERoutesPath.STREAMS,
    children: [
      {
        index: true,
        name: 'Listagem de Lives',
        element: <StreamList />,
      },
      {
        path: 'novo',
        name: 'Nova Live',
        element: <StreamCreate />,
      },
      {
        path: ':id',
        name: 'Edição de Live',
        element: <StreamUpdate />,
      },
    ],
  },
];
