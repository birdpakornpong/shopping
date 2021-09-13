import React, { ReactElement } from "react";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import styles from "./MainLayout.module.scss";
interface Props {
  children: React.ReactElement;
  router?: any;
}

export default function MainLayout({ children, router }: Props): ReactElement {
  return (
    <div>
      <MainHeader />
      {/* <button type="button" onClick={() => router.back()}>
        Back2
      </button> */}
      <div className={styles.content}>{children}</div>
      <MainFooter />
    </div>
  );
}
