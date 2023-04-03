import { useLocation, matchPath } from "react-router-dom";
import routeList, { RouteType } from "@/config/routes";
import { formatListRoutes } from "@/utils/utils";

interface GetCurrentPath {
  currentPath: RouteType;

  pathList: RouteType[] | undefined;
}

export const useGetCurrentPath = (layoutName: string): GetCurrentPath => {
  let currentPath = {} as RouteType;

  const { pathname } = useLocation();

  const pathList = routeList.find((item) => item?.name === layoutName)?.routes;

  const parseList = formatListRoutes(pathList);

  if (parseList) {
    currentPath = parseList.find((route) => {
      const { path = "" } = route;
      return matchPath(path, pathname);
    });
  }

  return { currentPath, pathList };
};
