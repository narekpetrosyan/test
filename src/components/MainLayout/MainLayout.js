import React, { memo } from "react";
import BlcokWrapper from "../BlockWrapper/BlockWrapper";
import ShadowBlock from "../ShadowBlock/ShadowBlock";

import styles from "./MainLayout.module.css";

const MainLayout = memo(({ children }) => {
  return (
    <ShadowBlock className={styles.MainLayout}>
      <BlcokWrapper title="Should i eat at McDonalds?">{children}</BlcokWrapper>
    </ShadowBlock>
  );
});

export default MainLayout;
