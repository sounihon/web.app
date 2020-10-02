import { RouteConfig } from "../../router";
import { Login } from "./Login";

export const moduleName = "/auth";
export const routes: RouteConfig[] = [
  {
    path: `${moduleName}/:action`,
    component: Login,
  },
  {
    path: `${moduleName}`,
    component: Login,
  },
];
