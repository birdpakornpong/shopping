import React, { ReactElement, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import styles from "./MainHeader.module.scss";
import { useRouter } from "next/router";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  AppBar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

interface Props {}

export default function MainHeader({}: Props): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);

  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        anchor="right"
      >
        <div className={styles.drawer}>
          <List disablePadding>
            <ListItem>
              <ListItemText disableTypography>
                <Link href="/">
                  <Typography
                    className={styles.itemMenuMobile}
                    style={{
                      fontWeight: router.pathname === "/" ? "bolder" : "normal",
                      color:
                        router.pathname === "/"
                          ? "primary"
                          : "rgb(107 107 107)",
                      borderBottom:
                        router.pathname === "/" && "1px solid #757ce8",
                    }}
                  >
                    Home
                  </Typography>
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText disableTypography>
                <Link href="/about">
                  <Typography
                    className={styles.itemMenuMobile}
                    style={{
                      fontWeight:
                        router.pathname === "/about" ? "bolder" : "normal",
                      color:
                        router.pathname === "/about"
                          ? "primary"
                          : "rgb(107 107 107)",
                      borderBottom:
                        router.pathname === "/about" && "1px solid #757ce8",
                    }}
                  >
                    About
                  </Typography>
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText disableTypography>
                <Link href="/shopping-cart">
                  <div className="pl-3.5 opacity-75">
                    <ShoppingCartIcon />
                  </div>
                </Link>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={styles.drawerIconContainer}
      >
        <MenuIcon className={styles.drawerIcon} />
      </IconButton>
    </>
  );

  const tabs = (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <Link href="/">
            <Typography
              className={styles.itemMenu}
              style={{
                fontWeight: router.pathname === "/" ? "bolder" : "normal",
                borderBottom: router.pathname === "/" && "1px solid #757ce8",
              }}
            >
              Home
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/about">
            <Typography
              className={styles.itemMenu}
              style={{
                fontWeight: router.pathname === "/about" ? "bolder" : "normal",
                borderBottom:
                  router.pathname === "/about" && "1px solid #757ce8",
              }}
            >
              About
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/shopping-cart">
            <ShoppingCartIcon />
          </Link>
        </Grid>
      </Grid>
    </>
  );
  return (
    <div>
      <AppBar className={styles.Appbar}>
        <Toolbar
          disableGutters
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            width: "100%",
            padding: "24px",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={4}
          >
            <Grid item>
              <Link href="/">
                <Typography className={styles.logo}>PANG's SHOP</Typography>
              </Link>
            </Grid>
          </Grid>

          {isMobile ? (
            <>{drawer}</>
          ) : (
            <>
              {tabs}
              {/* เมนูส่วนบนขวา desktop */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
