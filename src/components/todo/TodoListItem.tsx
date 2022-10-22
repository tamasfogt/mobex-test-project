import ListItem from "@mui/material/ListItem";
import { observer } from "mobx-react-lite";

function TodoListItem() {
  return <ListItem>Todo item 1</ListItem>;
}

export default observer(TodoListItem);
