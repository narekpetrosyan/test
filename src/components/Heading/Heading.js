import React from "react";
import clsx from "clsx";
import ShadowBlock from "../ShadowBlock/ShadowBlock";

import styles from "./Heading.module.css";

const elements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
};

const Heading = ({ children, variant, className, ...props }) => {
  const textElement = React.createElement(
    elements[variant] || elements.h1,
    {
      className: styles.HeadingItem,
      ...props,
    },
    children
  );
  return (
    <ShadowBlock className={clsx(styles.Heading, className)}>
      {textElement}
    </ShadowBlock>
  );
};

export default Heading;
