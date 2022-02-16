import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    appBar: {
      width: "100%",
    },
    toolbar: theme.mixins.toolbar,
    welcome: {
      flexGrow: 1,
    },
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
  };
});
