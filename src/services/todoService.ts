import { getFetch } from "../lib/fetch";

// mit adjak meg itt type-nak ami lejön??? a store typeban vannak ugye függvények meg lehet nem is jó az a type neki ...
// TODO itt majd csináld meg a typeokat...

export const createTodo = () => {};

export const getTodos = async (): Promise<any[]> => {
  const res = await getFetch<any[]>(`/todos`, {});
  return res.data;
};
