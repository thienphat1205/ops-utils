/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from "react";
import { Result, Button } from "antd";
import { checkPermission } from "@/utils/utils";
import { useGetCurrentPath } from "@/hooks/useGetCurrentPath";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";

const Authorized: React.FC<{ layoutName: string }> = ({
  children,
  layoutName,
}) => {
  const { currentUser: { userInfo = {} } = {}, permissions = [] } =
    useTypedSelector((state) => state.user);
  const { isSupperUser } = userInfo;
  const { currentPath } = useGetCurrentPath(layoutName);

  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const check = useMemo(() => {
    const { permission, path } = currentPath;
    let check = isSupperUser || checkPermission(permissions, permission);
    if (
      path === "/trip-create-auto-pick" ||
      path === "/trip-create-auto-deliver" ||
      path === "/trip-scan-distribute-order"
    ) {
      check = checkPermission(permissions, permission);
    }
    return check;
  }, [currentPath, isSupperUser, permissions]);

  return (
    <>
      {check ? (
        children
      ) : (
        <Result
          status="403"
          title="403"
          subTitle="Bạn không có quyền truy cập vào trang này"
          extra={
            <Button onClick={handleClick} type="primary">
              Quay về trang chủ
            </Button>
          }
        />
      )}
    </>
  );
};

export default Authorized;
