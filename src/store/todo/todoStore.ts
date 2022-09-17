import { IRootStore } from "../rootStore";
import { ITodo } from "./models/Todo";

export interface ITodoStore {
  root: IRootStore;
}

export class TodoStore implements ITodoStore {
  root: IRootStore; // reference to root store.

  todos: ITodo[] = [];
  isLoading: boolean = true;

  constructor(root: IRootStore) {
    this.root = root;
  }
}
