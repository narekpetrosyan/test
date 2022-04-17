import React, { memo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BlcokWrapper from "../BlockWrapper/BlockWrapper";
import ShadowBlock from "../ShadowBlock/ShadowBlock";
import TextInput from "../TextInput/TextInput";

import styles from "./ProsList.module.css";

const ProsList = memo(() => {
  const [pros, setPros] = useState(new Map().set(uuidv4(), ""));

  const handleAddPros = () => {
    setPros((prev) => new Map(prev).set(uuidv4(), ""));
  };

  const handleUpdatePros = (key, value) => {
    setPros((prev) => new Map(prev).set(key, value));
  };

  const handleRemoveProItem = (key) => {
    setPros((prev) => {
      const np = new Map(prev);
      if (pros.size > 1) {
        np.delete(key);
      }
      return np;
    });
  };

  return (
    <BlcokWrapper className={styles.ProsCons} title="PROS">
      <ShadowBlock className={styles.ProsConsItems}>
        {[...pros.entries()].map(([key, value], index) => (
          <TextInput
            key={key}
            id={key}
            number={index}
            text={value}
            onAddItem={handleAddPros}
            removeItem={handleRemoveProItem}
            onUpdateItem={handleUpdatePros}
          />
        ))}
      </ShadowBlock>
    </BlcokWrapper>
  );
});

export default ProsList;
