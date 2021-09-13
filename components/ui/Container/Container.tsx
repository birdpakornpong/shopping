import React, { ReactElement } from "react";
import styles from "./Container.module.scss";
interface Props {
  children: React.ReactElement;
}

export default function Container({ children }: Props): ReactElement {
  return (
    <div>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
