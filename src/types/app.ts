import { RoleEnum } from "../common/general";
export type RouteType = {
  path: string;
  component: any;
  exact: boolean;
  isPublic: boolean;
  role?: RoleEnum;
};