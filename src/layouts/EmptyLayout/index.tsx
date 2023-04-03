/* eslint-disable react-hooks/exhaustive-deps */
import { useActions } from "@/hooks/useActions";
import { getLocalStorage } from "@/utils/utils";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const EmptyLayout: React.FC = () => {
  const { getCurrentUser } = useActions();
  useEffect(() => {
    const token = getLocalStorage("SESSION");
    if (token) {
      getCurrentUser();
    }
  }, []);
  return <Outlet />;
};

export default EmptyLayout;
