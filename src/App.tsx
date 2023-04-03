import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import "./App.less";
import PageLoading from "@/components/PageLoading";
import { Helmet } from "react-helmet";
import routeList from "@/config/routes";
import { formatListRoutes } from "@/utils/utils";

const App = () => {
  return (
    <Routes>
      {routeList.map((item) => {
        const { layout: Layout, routes = [], name } = item;
        const parseList = formatListRoutes(routes);
        return (
          <Route element={<Layout />} key={name}>
            {parseList.map((route) => {
              const { title, path, component: Component, redirect } = route;
              const Element = Component || null;
              if (redirect)
                return (
                  <Route
                    key={title}
                    path={path}
                    element={<Navigate to={redirect} />}
                  />
                );
              return (
                <Route
                  key={title}
                  path={path}
                  element={
                    <Suspense fallback={<PageLoading />}>
                      <Helmet>
                        <title>{title}</title>
                      </Helmet>
                      <Element />
                    </Suspense>
                  }
                />
              );
            })}
          </Route>
        );
      })}
    </Routes>
  );
};

export default App;
