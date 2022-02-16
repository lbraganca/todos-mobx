import { Container, IconButton, TextField } from "@material-ui/core";
import { useDataStore } from "../../contexts/DataContext";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./useStyles";
import { useObserver } from "mobx-react";

export default function TodoForm({ todo }) {
  const dataStore = useDataStore();
  const styles = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    dataStore.addTodo();
  };

  return useObserver(() => (
    <Container>
      <form
        className={styles.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          value={dataStore.input}
          onChange={(e) => dataStore.updateInput(e.target.value)}
          fullWidth
          label="Content"
          className={styles.field}
          required
        ></TextField>
        <IconButton
          disabled={!dataStore.input}
          variant="contained"
          type="submit"
          color="primary"
        >
          <AddIcon />
        </IconButton>
      </form>
    </Container>
  ));
}
