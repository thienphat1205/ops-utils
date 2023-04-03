import EmptyLayout from "@/layouts/EmptyLayout";
import MainLayout from "@/layouts/MainLayout";
import React, { lazy, ReactElement } from "react";
import { FaTools } from "react-icons/fa";
const Home = lazy(() => import("@/pages/Home"));
const AuthorCode = lazy(() => import("@/pages/AuthorCode"));
const ConfigPermission = lazy(() => import("@/pages/ConfigPermission"));
const ConfigRole = lazy(() => import("@/pages/ConfigRole"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export interface RouteType {
  isParent?: boolean;
  path?: string;
  title: string;
  key: string;
  permission?: string;
  icon?: ReactElement;

  hideInMenu?: boolean;
  component?: React.LazyExoticComponent<React.FC<{}>>;

  redirect?: string;

  subRoutes?: RouteType[];

  openTab?: string;
}

export interface LayoutType {
  layout: React.FC<{}>;
  name: string;
  routes: RouteType[];
}

const routeList: LayoutType[] = [
  {
    layout: EmptyLayout,
    name: "AuthorCodeLayout",
    routes: [
      {
        title: "Verify code",
        path: "/sso-login-v2",
        key: "AuthorCode",
        component: AuthorCode,
      },
    ],
  },
  {
    layout: MainLayout,
    name: "MainLayout",
    routes: [
      {
        title: "Ops Utils System 2023",
        path: "/",
        key: "Home",
        component: Home,
        hideInMenu: true,
      },
      {
        isParent: true,
        key: "sys-config",
        title: "Cài đặt bộ quyền",
        icon: <FaTools />,
        subRoutes: [
          {
            title: "Chức vụ",
            path: "/sys-config/role",
            key: "role",
            component: ConfigRole,
            openTab: "sys-config",
            permission: "",
          },
          {
            title: "Quyền hạn",
            path: "/sys-config/permission",
            key: "permission",
            component: ConfigPermission,
            openTab: "sys-config",
            permission: "",
          },
        ],
      },
      {
        title: "Not found",
        path: "*",
        component: NotFound,
        hideInMenu: true,
        key: "notFound",
      },
    ],
  },
];

export default routeList;
