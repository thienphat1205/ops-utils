import React from "react";
import styles from "./index.module.less";

const LoadingFullScreen = () => {
  return (
    <div className={styles.loadingFullScreen}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingFullScreen;
