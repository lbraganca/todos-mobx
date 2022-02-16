import { Typography, Container } from "@material-ui/core";
import { useObserver } from "mobx-react";
import { useDataStore } from "../../contexts/DataContext";
import TodoDetails from "../TodoDetails";
import useStyles from "./useStyles";

export default function TodoList() {
  const dataStore = useDataStore();
  const styles = useStyles();

  return useObserver(() => (
    <Container>
      {dataStore.todos.length ? (
        <div className={styles.todoList}>
          {dataStore.todos.map((todo) => (
            <TodoDetails key={todo.id} todo={todo} />
          ))}
        </div>
      ) : (
        <Typography className={styles.empty}>
          Feels lonely here, start adding TODOs
        </Typography>
      )}
    </Container>
  ));
}
