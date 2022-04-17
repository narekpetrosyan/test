import React from 'react';

import styles from "./Heading.module.css"
import {ShadowBlock} from "../ShadowBlock/ShadowBlock";
import clsx from "clsx";

const elements = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
};

export const Heading = ({ children, variant, className, ...props }) => {
  const textElement = React.createElement(elements[variant] || elements.h1, {
    className: styles.HeadingItem,
    ...props
  }, children)
  return (
      <ShadowBlock className={clsx(styles.Heading,className)}>
        {textElement}
      </ShadowBlock>
  );
};

