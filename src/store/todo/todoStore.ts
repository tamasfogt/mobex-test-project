import { IRootStore } from "../rootStore";
import { ITodo } from "./models/Todo";
import { makeAutoObservable, runInAction } from "mobx";
import { getTodos } from "../../services/todoService";

export interface ITodoStore {
  root: IRootStore;
  todos: ITodo[];
  isLoading: boolean;
  loadTodos: () => void;
  createTodo: () => void;
}

export class TodoStore implements ITodoStore {
  root: IRootStore; // reference to root store.

  todos: ITodo[] = [];
  isLoading: boolean = true;

  constructor(root: IRootStore) {
    makeAutoObservable(this);
    this.root = root;

    this.loadTodos();
  }

  async loadTodos() {
    this.isLoading = true;
    try {
      const result = await getTodos();
      runInAction(() => {
        this.todos = result;
        this.isLoading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async createTodo() {
    this.isLoading = true;
    // TODO itt is tudom használni ezt a runInAction approachot a kérdés hogy hogyan adom majd hozzá a todo-t a listához...
  }
}
