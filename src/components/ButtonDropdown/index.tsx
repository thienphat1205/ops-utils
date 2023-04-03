import React, { ReactElement } from "react";
import s from "./index.module.less";
import { Dropdown, Menu, Button, Space } from "antd";
import { FaChevronDown } from "react-icons/fa";
import { MenuInfo } from "rc-menu/lib/interface";

interface ItemMenu {
  text: string;
  onClick: Function;
  icon?: ReactElement;
  disabled?: boolean;
}

const ButtonDropdown: React.FC<{
  menuList: ItemMenu[];
  text?: string;
  trigger?: any;
}> = ({ menuList, text = "Thao tác", trigger = ["click"], children }) => {
  const handleMenuClick = (menu: MenuInfo) => {
    const { key } = menu;
    const itemClicked =
      menuList.find((menu) => menu.text === key) || ({} as ItemMenu);
    const { onClick } = itemClicked;
    if (typeof onClick === "function") {
      onClick();
    }
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      {menuList.map((item) => {
        const { text, icon, disabled } = item;
        return (
          <Menu.Item key={text} disabled={disabled} icon={icon}>
            {text}
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <div className={s.root}>
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        arrow={false}
        trigger={trigger}
        overlayClassName={s.customDropdown}
      >
        {children || (
          <Button className={s.btnDropdown}>
            <Space>
              {text}
              <FaChevronDown className={s.icon} />
            </Space>
          </Button>
        )}
      </Dropdown>
    </div>
  );
};

export default ButtonDropdown;
