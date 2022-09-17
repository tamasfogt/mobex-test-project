import TodoListItem from "./TodoListItem";
import List from "@mui/material/List";

import { observer } from "mobx-react-lite";

function TodoList() {
  // TODO load todos from store
  return (
    <List>
      <TodoListItem />
      <TodoListItem />
    </List>
  );
}

export default observer(TodoList);
