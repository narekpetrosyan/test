import React, { memo } from "react";
import Heading from "../Heading/Heading";

import styles from "./BlockWrapper.module.css";

const BlcokWrapper = memo(({ children, title }) => {
  return (
    <div className={styles.BlcokWrapper}>
      <Heading>{title}</Heading>

      <div className={styles.BlcokWrapperChildren}>{children}</div>
    </div>
  );
});

export default BlcokWrapper;
