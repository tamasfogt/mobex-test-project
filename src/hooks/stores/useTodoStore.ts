import useRootStore from "./useRootStore";
export default function useTodoStore() {
  const { todoStore } = useRootStore();
  return todoStore;
}
