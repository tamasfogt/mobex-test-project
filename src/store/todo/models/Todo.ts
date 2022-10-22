// this is the domain object of the store.

import { makeAutoObservable } from "mobx";

export interface ITodo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
}

export class Todo implements ITodo {
  id: string;
  title: string;
  description: string;
  completed: boolean = false;

  constructor(id: string, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;

    makeAutoObservable(this);
  }
}
