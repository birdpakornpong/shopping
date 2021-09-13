import React, { ReactElement } from "react";
import styles from "./MainBanner.module.scss";
interface Props {}

export default function MainBanner({}: Props): ReactElement {
  return (
    <section className={styles.homeBanner}>
      <div className={styles.slider}>
        <img
          className={styles.slide}
          src="https://storage.googleapis.com/dev-dam-products/310995f760d54923b17b1d0997c30ed7.jpeg"
        ></img>
      </div>
    </section>
  );
}
