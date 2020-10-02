import { FC } from "react";
import { routes as loginRoutes } from "../modules/login";

export interface RouteConfig {
  path: string;
  component: FC;
}
export const routes: RouteConfig[] = [...loginRoutes];
