import { FC } from "react";
import { routes as loginRoutes } from "../modules/login";
import {routes as mainRoutes} from '../modules/main';

export interface RouteConfig {
  path: string;
  component: FC;
}
export const routes: RouteConfig[] = [...loginRoutes, ...mainRoutes];
