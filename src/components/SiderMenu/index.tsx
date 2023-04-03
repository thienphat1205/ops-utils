/* eslint-disable react-hooks/exhaustive-deps */
import { RouteType } from "@/config/routes";
import { useGetCurrentPath } from "@/hooks/useGetCurrentPath";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { checkPermission } from "@/utils/utils";
import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./index.module.less";

const { Sider } = Layout;

const { SubMenu } = Menu;

const SiderMenu: React.FC<{
  collapsed: boolean;
  isMobile: boolean;
  onCollapse: () => void;
}> = ({ collapsed, isMobile, onCollapse }) => {
  const { currentPath, pathList } = useGetCurrentPath("MainLayout");
  const rootSubmenuKeys =
    pathList?.filter((item) => item?.isParent).map((e) => e?.key) || [];
  const {
    currentUser: { userInfo: { isSupperUser = false } = {} } = {},
    permissions = [],
  } = useTypedSelector((state) => state.user);

  const [selectedKey, setSelectedKey] = useState<any>(undefined);
  const [openKey, setOpenKey] = useState<any>(undefined);
  let navigate = useNavigate();

  useEffect(() => {
    setSelectedKey([currentPath?.key]);
    if (!collapsed) {
      setOpenKey([currentPath?.openTab]);
    }
  }, [currentPath]);

  const handleCollapseMobile = () => {
    if (isMobile) {
      onCollapse();
    }
  };

  const handleClickItem = (path: string) => {
    navigate(path);
  };

  const handleClickSubMenu = (openKeys: any) => {
    const latestOpenKey = openKeys.find(
      (key: any) => openKey.indexOf(key) === -1
    );
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKey(openKeys);
    } else {
      setOpenKey(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const renderMenuItem = (
    item: RouteType,
    index: number
  ): JSX.Element | boolean => {
    const { title, key, path = "", hideInMenu, permission, icon } = item;
    let check = isSupperUser || checkPermission(permissions, permission);
    if (
      path === "/trip-create-auto-pick" ||
      path === "/trip-create-auto-deliver" ||
      path === "/trip-scan-distribute-order"
    ) {
      check = checkPermission(permissions, permission);
    }
    if (!check) return <></>;
    const isExternalLink = path.startsWith("https");
    return (
      !hideInMenu && (
        <Menu.Item key={key} onClick={handleCollapseMobile} icon={icon}>
          {!isExternalLink ? (
            <div onClick={() => handleClickItem(path)}>{title}</div>
          ) : (
            <a rel="noopener noreferrer" href={path} target="_blank">
              {title}
            </a>
          )}
        </Menu.Item>
      )
    );
  };

  const renderSubMenu = (item: RouteType, index: number) => {
    const { subRoutes = [], title, key, icon } = item;
    const permissionsInGroup = subRoutes
      .filter((route) => !route?.hideInMenu)
      .map((item) => item?.permission);
    const isHideSubMenu =
      permissions.filter((x) => permissionsInGroup.includes(x)).length === 0;
    if (isHideSubMenu && !isSupperUser) return null;
    return (
      <SubMenu key={key} icon={icon} title={<span>{title}</span>}>
        {subRoutes.map((item) => renderMenuItem(item, index))}
      </SubMenu>
    );
  };

  if (!selectedKey && !openKey) return null;

  return (
    <>
      <Sider
        theme="dark"
        className={s.sider}
        collapsed={collapsed}
        collapsedWidth={0}
      >
        <Menu
          theme="dark"
          openKeys={openKey}
          selectedKeys={selectedKey}
          onOpenChange={handleClickSubMenu}
          mode="inline"
        >
          {Array.isArray(pathList) &&
            pathList.map((item, idx) => {
              const { isParent } = item;
              return isParent
                ? renderSubMenu(item, idx)
                : renderMenuItem(item, idx);
            })}
        </Menu>
      </Sider>
      {isMobile && !collapsed && (
        <div className={s.overlay} onClick={onCollapse} />
      )}
    </>
  );
};

export default SiderMenu;
