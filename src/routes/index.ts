import { RouteConfig } from "react-router-config";

import App from "../app";
import AsyncHome from "../pages/Home";
import {AddStudent} from "../pages/addStudent";
import NotFound from "../pages/NotFound";

export default [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: AsyncHome, 
      },
      {
        path: "/addStudent",
        component: AddStudent
      },
      {
        component: NotFound,
      },
    ],
  },
] as RouteConfig[];
