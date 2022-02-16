import { v1 } from "uuid";

export function createDataStore() {
  return {
    todos: [],
    input: "",
    addTodo() {
      this.todos = [...this.todos, { content: this.input, id: v1() }];
      this.input = "";
    },
    deleteTodo(payload) {
      this.todos = [...this.todos.filter((todo) => todo.id !== payload)];
    },
    updateTodo(payload) {
      this.todos = [
        ...this.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, ...payload } : todo
        ),
      ];
    },
    updateInput(payload) {
      this.input = payload;
    },
  };
}
