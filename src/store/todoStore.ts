import { IRootStore } from "./rootStore";

export interface ITodoStore {
  root: IRootStore;
}

export class TodoStore implements ITodoStore {
  root: IRootStore;
  constructor(root: IRootStore) {
    this.root = root;
  }
}
