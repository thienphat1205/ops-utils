// import { FaSearch } from "react-icons/fa";
import logo from "@/assets/images/logo.webp";
import iconClose from "@/assets/images/SelectAppClose.png";
import iconOpen from "@/assets/images/SelectAppOpen.png";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { logout } from "@/services/auth";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Layout } from "antd";
import React, { useCallback, useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ViewSelectApp from "../ViewSelectApp";
import styles from "./index.module.less";

const { Header } = Layout;

const ComponentHeader: React.FC<{
  onCollapse: () => void;
  collapsed: boolean;
}> = ({ onCollapse, collapsed }) => {
  const { currentUser: { userInfo = {} } = {} } = useTypedSelector(
    (state) => state.user
  );
  const { ssoId = "", profile: { fullname = "" } = {} } = userInfo;

  const [openViewSelectApp, setOpenViewSelectApp] = useState<boolean>(false);

  const handleOpenModal = useCallback(() => {
    setOpenViewSelectApp((prevState) => !prevState);
  }, []);

  const genViewLogout = (
    <div className={styles.contentDropdown}>
      <div className={styles.viewInfo}>
        <Avatar size={56} icon={<UserOutlined />} />
        <p className={styles.textName}>{`${ssoId} - ${
          fullname || "User name"
        }`}</p>
        <p className={styles.textTitle}></p>
      </div>
      <div className={styles.viewLogout} onClick={() => logout()}>
        <FaSignOutAlt />
        <span>Đăng xuất</span>
      </div>
    </div>
  );

  return (
    <>
      <Header className={styles.header}>
        <div className={styles.viewLogo}>
          {collapsed ? (
            <AiOutlineMenuUnfold
              onClick={onCollapse}
              className={styles.iconMenu}
            />
          ) : (
            <AiOutlineMenuFold
              onClick={onCollapse}
              className={styles.iconMenu}
            />
          )}

          <Link to="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>
          <span className={styles.appName}>Vận hành</span>
          <div className={styles.inputSearchHeader}></div>
        </div>
        <div className={styles.contentRight}>
          <Dropdown overlay={genViewLogout} placement="bottom">
            <Avatar
              className={styles.avatar}
              size={40}
              icon={<UserOutlined />}
            />
          </Dropdown>
          {!openViewSelectApp ? (
            <img
              className={styles.btnOpenModalSelectAdd}
              src={iconClose}
              alt="toggle"
              onClick={handleOpenModal}
            />
          ) : (
            <img
              src={iconOpen}
              alt="toggle"
              onClick={handleOpenModal}
              className={styles.btnOpenModalSelectAdd}
            />
          )}
        </div>
      </Header>
      <ViewSelectApp isOpen={openViewSelectApp} />
    </>
  );
};

export default ComponentHeader;
