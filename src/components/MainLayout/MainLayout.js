import React from 'react';
import {Heading} from "../Heading/Heading";
import {ShadowBlock} from "../ShadowBlock/ShadowBlock";

import styles from "./MainLayout.module.css"

export const MainLayout = ({children,parts = 1}) => {
    return (
        <ShadowBlock className={styles.MainLayout}>
            <Heading className={styles.Head}>
                Should i eat at McDonalds?
            </Heading>
            <div className={styles.MainLayoutListBlocks} style={{'--repeat-prop':parts}}>
                {children}
            </div>
        </ShadowBlock>
    );
};

