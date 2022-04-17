import React, { memo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BlcokWrapper from "../BlockWrapper/BlockWrapper";
import ShadowBlock from "../ShadowBlock/ShadowBlock";
import TextInput from "../TextInput/TextInput";

import styles from "./ConsList.module.css";

const ConsList = memo(() => {
  const [cons, setCons] = useState(new Map().set(uuidv4(), ""));

  const handleAddCons = () => {
    setCons((prev) => new Map(prev).set(uuidv4(), ""));
  };

  const handleUpdateCons = (key, value) => {
    setCons((prev) => new Map(prev).set(key, value));
  };

  const handleRemoveConItem = (key) => {
    setCons((prev) => {
      const nc = new Map(prev);
      if (cons.size > 1) {
        nc.delete(key);
      }
      return nc;
    });
  };

  return (
    <BlcokWrapper className={styles.ProsCons} title="CONS">
      <ShadowBlock className={styles.ProsConsItems}>
        {[...cons.entries()].map(([key, value], index) => (
          <TextInput
            key={key}
            id={key}
            number={index}
            text={value}
            onAddItem={handleAddCons}
            removeItem={handleRemoveConItem}
            onUpdateItem={handleUpdateCons}
          />
        ))}
      </ShadowBlock>
    </BlcokWrapper>
  );
});

export default ConsList;
