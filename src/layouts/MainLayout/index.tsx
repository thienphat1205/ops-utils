/* eslint-disable react-hooks/exhaustive-deps */
import Authorized from "@/components/Authorized";
import PageLoading from "@/components/PageLoading";
import { RouteType } from "@/config/routes";
import { useActions } from "@/hooks/useActions";
import { useGetCurrentPath } from "@/hooks/useGetCurrentPath";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { login } from "@/services/auth";
import { getLocalStorage } from "@/utils/utils";
import { Card, Layout } from "antd";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./index.module.less";
const SiderMenu = lazy(() => import("@/components/SiderMenu"));
const Header = lazy(() => import("@/components/Header"));

const { Content } = Layout;

const LAYOUT_NAME = "MainLayout";

const KEY_NOT_PADDING: string[] = [];

const MainLayout: React.FC = () => {
  const { currentPath = {} as RouteType } = useGetCurrentPath(LAYOUT_NAME);
  const { getCurrentUser, getAllowedAppList } = useActions();
  const {
    loading: { loadingGetCurrentUser = false, loading = false } = {},
    currentUser: { userInfo = {} } = {},
  } = useTypedSelector((state) => state.user);

  const [isReady, setIsReady] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [isNotPadding, setIsNotPadding] = useState<boolean>(false);

  const { width } = useWindowDimensions();

  const isMobile = width < 768;

  useEffect(() => {
    const token = getLocalStorage("SESSION");
    if (token) {
      setIsReady(true);
      getCurrentUser();
      getAllowedAppList();
    } else {
      login();
    }
  }, []);

  useEffect(() => {
    if (userInfo?.ssoId) {
      handlePermissons();
    }
  }, [userInfo]);

  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [isMobile]);

  useEffect(() => {
    setIsNotPadding(KEY_NOT_PADDING.indexOf(currentPath?.key) > -1);
  }, [currentPath]);

  const handlePermissons = () => {
    // setDataUserReducer({
    //   permissions,
    // });
  };

  const handleCollapsedMenu = React.useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  if (!isReady || loadingGetCurrentUser || loading) return <PageLoading />;

  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <Layout
          className={
            isNotPadding
              ? `${styles.root} ${styles.layoutNotPadding}`
              : `${styles.root}`
          }
        >
          <Header onCollapse={handleCollapsedMenu} collapsed={collapsed} />
          <Layout className={styles.layoutHasSider}>
            <SiderMenu
              collapsed={collapsed}
              isMobile={isMobile}
              onCollapse={handleCollapsedMenu}
            />
            <Content>
              <Card className={isNotPadding ? `${styles.cardNotPadding}` : ""}>
                <Authorized layoutName={LAYOUT_NAME}>
                  <Outlet />
                </Authorized>
              </Card>
            </Content>
          </Layout>
        </Layout>
      </Suspense>
    </>
  );
};

export default MainLayout;
