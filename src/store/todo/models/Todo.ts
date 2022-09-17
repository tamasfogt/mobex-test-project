// this is the domain object of the store.
export interface ITodo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
}
// TODO ide alá kell még egy class ami a domain object lesz

export class Todo implements ITodo {
  id: string;
  title: string;
  description: string;
  completed: boolean = false;

  constructor(id: string, title: string, description: string) {
    // TODO lehet ide kell egy makeAutoObservable...
    this.id = id;
    this.title = title;
    this.description = description;
  }
}
