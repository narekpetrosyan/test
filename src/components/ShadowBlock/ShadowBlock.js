import React from 'react';
import clsx from "clsx";

import styles from "./ShadowBlock.module.css"

export const ShadowBlock = ({children,className}) => {
    return (
        <div className={clsx(styles.ShadowBlock,className)}>
            {children}
        </div>
    );
};

