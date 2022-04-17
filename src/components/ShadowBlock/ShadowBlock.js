import React, { memo } from "react";
import clsx from "clsx";

import styles from "./ShadowBlock.module.css";

const ShadowBlock = memo(({ children, className }) => {
  return <div className={clsx(styles.ShadowBlock, className)}>{children}</div>;
});

export default ShadowBlock;
