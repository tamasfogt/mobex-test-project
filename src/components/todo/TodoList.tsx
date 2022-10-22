import TodoListItem from "./TodoListItem";
import List from "@mui/material/List";

import { observer } from "mobx-react-lite";
import useTodoStore from "../../hooks/stores/useTodoStore";

function TodoList() {
  const todoStore = useTodoStore();
  return (
    <List>
      {todoStore.todos.map((item) => (
        <TodoListItem /> // TODO itt majd még használni kell az értékeket..
      ))}
    </List>
  );
}

export default observer(TodoList);
