import { createContext, ReactNode } from "react";

import { IRootStore, RootStore } from "../store/rootStore";

let store: IRootStore; // ez kell???

export const StoreContext = createContext<IRootStore | undefined>(undefined);

// create the provider component
export function RootStoreProvider({ children }: { children: ReactNode }) {
  //only create the store once ( store is a singleton)
  const root = store ?? new RootStore();
  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}
