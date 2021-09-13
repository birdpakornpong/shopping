import { Container } from "@material-ui/core";
import React, { ReactElement } from "react";
import MainBanner from "../../components/banner/MainBanner";
import styles from "./index.module.scss";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <>
      <MainBanner />
      <div className={styles.content}>
        <Container>
          <p className="text-xl text-gray-500">รายละเอียดเกี่ยวกับเรา</p>
        </Container>
      </div>
    </>
  );
}
