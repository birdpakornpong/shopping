import React, { ReactElement } from "react";
import Container from "../Container/Container";
import styles from "./Shelf.module.scss";
interface Props {
  children: React.ReactElement;
}

export default function Shelf({ children }: Props): ReactElement {
  return (
    <div className={styles.shelf}>
      <Container>
        <div className={styles.header}>
          <p className="text-2xl text-gray-600 font-mono mb-2">สินค้าแนะนำ</p>
        </div>
      </Container>
      {children}
    </div>
  );
}
