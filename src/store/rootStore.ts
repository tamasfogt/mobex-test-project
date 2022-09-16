import { TodoStore } from "./todoStore";

export interface IRootStore {
  todoStore: TodoStore;
}

export class RootStore implements IRootStore {
  todoStore: TodoStore;

  constructor() {
    this.todoStore = new TodoStore(this);
  }
}
