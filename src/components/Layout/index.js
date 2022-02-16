import React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import useStyles from "./useStyles";

export default function Layout({ children }) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar className={styles.appBar} elevation={1}>
        <Toolbar>
          <Typography className={styles.welcome}>
            TODO List - {new Date().toLocaleDateString()}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={styles.page}>
        <div className={styles.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
