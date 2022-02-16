import { IconButton, Paper, TextField, Typography } from "@material-ui/core";
import useStyles from "./useStyles";
import { useDataStore } from "../../contexts/DataContext";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import { useObserver } from "mobx-react";

export default function TodoDetails({ todo }) {
  const dataStore = useDataStore();
  const styles = useStyles();

  return useObserver(() => (
    <Paper className={styles.root}>
      {todo.edit ? (
        <>
          <TextField
            fullWidth
            defaultValue={todo.edit}
            onChange={(e) =>
              dataStore.updateTodo({ ...todo, edit: e.target.value })
            }
            className={styles.text}
          />
          <IconButton
            color="primary"
            onClick={() =>
              dataStore.updateTodo({ ...todo, content: todo.edit, edit: null })
            }
          >
            <SaveIcon />
          </IconButton>
          <IconButton
            onClick={() => dataStore.updateTodo({ ...todo, edit: null })}
            color="primary"
          >
            <CancelIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography className={styles.text}>{todo.content}</Typography>
          <IconButton
            color="primary"
            onClick={() => {
              dataStore.updateTodo({ ...todo, edit: todo.content });
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => dataStore.deleteTodo(todo.id)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      )}
    </Paper>
  ));
}
