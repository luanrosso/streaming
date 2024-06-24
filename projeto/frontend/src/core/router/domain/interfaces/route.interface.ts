import { IndexRouteObject } from 'react-router-dom';

export interface IRoute extends Omit<IndexRouteObject, 'index' | 'children'> {
  name: string;
  index?: boolean;
  hidden?: boolean;
  children?: Array<IRoute>;
}
