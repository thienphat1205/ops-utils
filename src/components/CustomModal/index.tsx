import React from "react";
import s from "./index.module.less";
import closeIcon from "@/assets/images/closeIcon.png";
import { Modal } from "antd";

interface ICustomModal {
  visible: boolean;
  onCancel: () => void;

  width?: string | number | undefined;
  maskClosable?: boolean | undefined;
  closable?: boolean;
  top?: number;
}

const CustomModal: React.FC<ICustomModal> = ({
  visible,
  onCancel,
  children,
  width,
  maskClosable = undefined,
  closable = true,
  top,
}) => {
  return (
    <Modal
      style={top ? { top } : {}}
      open={visible}
      onCancel={onCancel}
      className={s.customModal}
      footer={null}
      width={width}
      closeIcon={<img src={closeIcon} alt="close" />}
      maskClosable={maskClosable}
      closable={closable}
      destroyOnClose
    >
      <div className={s.contentModal}>{children}</div>
    </Modal>
  );
};

export default CustomModal;
