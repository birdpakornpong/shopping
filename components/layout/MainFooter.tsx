import { Container, Grid, Link, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import styles from "./MainFooter.module.scss";
interface Props {}

export default function MainFooter({}: Props): ReactElement {
  const router = useRouter();
  console.log("router", router.pathname);
  return (
    <div className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item>
            <Link href="/" className="no-underline">
              <Typography
                className={styles.itemMenu}
                style={{
                  borderBottom: router.pathname === "/" && "1px solid #757ce8",
                  fontWeight: router.pathname === "/" ? "bolder" : "normal",
                }}
              >
                Home
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/about" className="no-underline">
              <Typography
                className={styles.itemMenu}
                style={{
                  borderBottom:
                    router.pathname === "/about" && "1px solid #757ce8",
                  fontWeight:
                    router.pathname === "/about" ? "bolder" : "normal",
                }}
              >
                About
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <div className="m-2">
          <Grid container item justifyContent="center" alignItems="center">
            <Typography className={styles.copylight}>
              &copy;Bird pakornpong
            </Typography>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
