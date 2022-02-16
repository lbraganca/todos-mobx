import { ThemeProvider } from "@material-ui/core";
import Layout from "./components/Layout";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { DataProvider } from "./contexts/DataContext";
import theme from "./themes/main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <Layout>
          <TodoForm />
          <TodoList />
        </Layout>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
